import store from "../../store";

function getDateAndTime(date) {
  return {
    time: date.toLocaleTimeString([], { timeStyle: "short" }),
    date: date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  };
}

function BookingStatus() {
  const state = store.getState();
  const { ticket } = state.ticketData;
  let ticketComponent;
  if (ticket?._id) {
    const depart = getDateAndTime(new Date(ticket.bus.departure));
    const arrive = getDateAndTime(new Date(ticket.bus.arrival));
    ticketComponent = (
      <div className="ticket">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card card-body bg-light m-3">
                <p className="alert alert-success">Booking Successful</p>
                <div
                  className="m-2 p-2 text-left"
                  style={{ border: "2px dashed black" }}
                >
                  <div className="row p-0 m-0">
                    <div className="col-5">
                      <span
                        className={
                          "btn text-left rounded " +
                          (ticket.status === "Cancelled"
                            ? "btn-danger"
                            : "btn-success")
                        }
                      >
                        {ticket.status}
                      </span>
                    </div>
                    <div className="col-7">
                      <h3 className="text-info text-left">Ticket</h3>
                    </div>
                  </div>
                  <hr className="m-0" />
                  <div className="row">
                    <div className="col-5">
                      <p className="text-secondary m-0 px-2">
                        Name : {ticket.details.firstname}{" "}
                        {ticket.details.lastname}
                      </p>
                      <p className="text-secondary m-0 px-2">
                        Mail ID : {ticket.details.email}
                      </p>
                      <p className="text-secondary m-0 px-2">
                        Mobile No : {ticket.details.mobile}
                      </p>
                      <p className="text-secondary m-0 px-2">
                        Age : {ticket.details.age}
                      </p>
                      <p className="text-secondary m-0 px-2">
                        Seat Number : {ticket.seat_no}
                      </p>
                    </div>
                    <div className="col-7">
                      <p className="text-secondary m-0 px-2">
                        <span className="text-secondary m-0 px-2">
                          Company : {ticket.bus.Company}
                        </span>
                        <br />
                        <span className="text-secondary m-0 px-2">
                          Departure : {depart.time} {depart.date}
                        </span>
                        <br />
                        <span className="text-secondary m-0 px-2">
                          Arrival : {arrive.time} {arrive.date}
                        </span>
                        <br />
                        <span className="text-secondary m-0 px-2">
                          From : {ticket.bus.from}
                        </span>
                        <br />
                        <span className="text-secondary m-0 px-2">
                          To : {ticket.bus.to}
                        </span>
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    ticketComponent = (
      <div className="ticket">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card card-body bg-light m-3">
                <p className="alert alert-danger">Booking Failed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="search-box">
      <div className="dark-overlay search-box-inner text-light">
        <div className="container">{ticketComponent}</div>
      </div>
    </div>
  );
}
export default BookingStatus;
