import bus_pic from "../../assets/images/bus2.jpg";

function onClicked() {
  console.log("I am Called");
}

function DateElement({ date }) {
  return (
    <div>
      <p className="m-0" style={{ fontSize: "30px" }}>
        {date.toLocaleTimeString([], { timeStyle: "short" })}
      </p>
      <p className="m-0">
        {date.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>
    </div>
  );
}

function BusItem(props) {
  const bus = props.bus;
  const departure = new Date(bus.departure);
  const arrival = new Date(bus.arrival);
  return (
    <div className="card card-body bg-light mx-5 my-2">
      <div className="row align-items-center">
        <div className="col-2">
          <div height="100px" width="100px">
            <img className="rounded-circle" src={bus_pic} alt="BusPic" />
          </div>
        </div>
        <div className="col-10 border-left">
          <div className="row mx-5">
            <div className="col-9 text-left">
              <span className="h2 m-0">{bus.Company}</span>
            </div>
            <div className="col-3 text-right">
              <button onClick={onClicked.bind(this)} className="btn btn-info">
                Book Ticket
              </button>
            </div>
          </div>
          <div className="row align-content-center mx-5">
            <div className="col-3 text-left">
              <DateElement date={departure} />
              <p className="mb-2">{bus.from}</p>
            </div>
            <div className="col-6">
              <hr />
            </div>
            <div className="col-3 text-right">
              <DateElement date={arrival} />
              <p className="mb-2">{bus.to}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusItem;
