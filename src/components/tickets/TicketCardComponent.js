import "../../assets/styles/Ticket.css";

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

function Element(item, value) {
  return (
    <p className="text-secondary m-0 px-2">
      {item} : {value}
    </p>
  );
}

function TicketCardComponent(props) {
  const { ticket } = props;
  const depart = getDateAndTime(new Date(ticket.bus.departure));
  const arrive = getDateAndTime(new Date(ticket.bus.arrival));
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="card card-body bg-light m-3">
            <div className="m-2 p-2 text-left ticketCardBorder">
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
                <div className="col-6">
                  {Element(
                    "Name",
                    ticket.details.firstname + " " + ticket.details.lastname
                  )}
                  {Element("Mobile No", ticket.details.mobile)}
                  {Element("Age", ticket.details.age)}
                  {Element("Seat Number", ticket.seat_no)}
                  {Element("Mail Id", ticket.details.email)}
                </div>
                <div className="col-6">
                  {Element("Company", ticket.bus.Company)}
                  {Element("Departure", depart.time + " " + depart.date)}
                  {Element("Arrival", arrive.time + " " + arrive.date)}
                  {Element("From", ticket.bus.from)}
                  {Element("To", ticket.bus.to)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TicketCardComponent;
