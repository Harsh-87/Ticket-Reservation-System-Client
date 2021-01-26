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

function JourneyComponent({ bus }) {
  const departure = new Date(bus.departure);
  const arrival = new Date(bus.arrival);
  return (
    <div>
      <div className="row align-content-center mx-5">
        <div className="col-9 text-left">
          <span className="h2 m-0">{bus.Company}</span>
        </div>
      </div>
      <div className="row align-content-center mx-5">
        <div className="col-4 text-left">
          <DateElement date={departure} />
          <p className="mb-4">{bus.from}</p>
        </div>
        <div className="col-4">
          <hr />
        </div>
        <div className="col-4 text-right">
          <DateElement date={arrival} />
          <p className="mb-2">{bus.to}</p>
        </div>
      </div>
    </div>
  );
}

export default JourneyComponent;
