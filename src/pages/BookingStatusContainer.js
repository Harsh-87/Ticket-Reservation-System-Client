import store from "../store";
import TicketCardComponent from "../components/tickets/TicketCardComponent";

function BookingStatusContainer() {
  const state = store.getState();
  const { ticket } = state.ticketData;
  let ticketComponent;
  if (ticket?._id) {
    ticketComponent = (
      <div className="container">
        <p className="alert alert-success">Booking Successful</p>
        <TicketCardComponent ticket={ticket} />
      </div>
    );
  } else {
    ticketComponent = (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="card card-body bg-light m-3">
              <p className="alert alert-danger">Booking Failed</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="search-box">
      <div className="dark-overlay search-box-inner text-light">
        {ticketComponent}
      </div>
    </div>
  );
}
export default BookingStatusContainer;
