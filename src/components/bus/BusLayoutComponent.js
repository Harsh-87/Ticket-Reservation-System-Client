function OpenSeat(seat, onSeatSelected) {
  return (
    <div className="col-3">
      <button
        onClick={onSeatSelected.bind(this, seat)}
        className="btn btn-light p-1 m-1 openSeat"
      >
        {seat.seat_no}
      </button>
    </div>
  );
}

function CloseSeat(seat, admin, onSeatSelected) {
  return (
    <div className="col-3">
      <button
        onClick={onSeatSelected.bind(this, seat)}
        className="btn btn-danger p-1 m-1 closeSeat"
        disabled={admin ? "" : "disabled"}
      >
        {seat.seat_no}
      </button>
    </div>
  );
}

function SelectedSeat(seat) {
  return (
    <div className="col-3">
      <button className="btn btn-info p-1 m-1 selectedSeat">
        {seat.seat_no}
      </button>
    </div>
  );
}

function BusLayoutComponent(props) {
  const { bus, onSeatSelected, selectedSeat, admin } = props;
  return (
    <div className="border p-3">
      <div className="row">
        <div className="col-4  text-dark">
          <span className="btn btn-info selectedSeat disabled"></span> Selected
        </div>
        <div className="col-4  text-dark">
          <span className="btn btn-danger selectedSeat disabled"></span>{" "}
          Reserved
        </div>
        <div className="col-4  text-dark">
          <span className="btn btn-light selectedSeat"></span> Available
        </div>
      </div>
      <div className="row marginTop">
        <div className="col-11 text-right">
          <i className="fas fa-user p-3 text-dark"></i>
        </div>
      </div>
      <div className="row">
        {bus.seats.map((seat) => {
          if (seat.seat_no === selectedSeat) return SelectedSeat(seat);
          else if (seat.status === "open")
            return OpenSeat(seat, onSeatSelected);
          else return CloseSeat(seat, admin, onSeatSelected);
        })}
      </div>
    </div>
  );
}

export default BusLayoutComponent;
