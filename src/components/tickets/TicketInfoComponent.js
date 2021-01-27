function Element(item, value) {
  return (
    <p className="text-secondary m-0 px-2 text-capitalize">
      {item} : {value}
    </p>
  );
}

function TicketInfoComponent(props) {
  let { ticket } = props;
  let Infocomponent;
  if (ticket.status === "open") {
    Infocomponent = (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="card card-body bg-light m-3">
              <div className="m-2 p-2 text-left ticketCardBorder">
                <div className="row p-0 m-0 justify-content-center">
                  <h3 className="text-info text-left">Ticket</h3>
                </div>
                <hr className="m-0" />
                {Element("Status", ticket.status)}
                {Element("Seat No", ticket.seat_no)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    ticket = ticket.ticket_id;
    Infocomponent = (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="card card-body bg-light m-3">
              <div className="m-2 p-2 text-left ticketCardBorder">
                <div className="row p-0 m-0">
                  <div className="col-5"></div>
                  <div className="col-7">
                    <h3 className="text-info text-left">Ticket</h3>
                  </div>
                </div>
                <hr className="m-0" />
                {Element(
                  "Name",
                  ticket.details.firstname + " " + ticket.details.lastname
                )}
                {Element("Mobile No", ticket.details.mobile)}
                {Element("Age", ticket.details.age)}
                {Element("Seat Number", ticket.seat_no)}
                {Element("Mail Id", ticket.details.email)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return Infocomponent;
}
export default TicketInfoComponent;
