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

function TheatreComponent({ movie }) {
  const timing = new Date(movie.timing);
  return (
    <div>
      <div className="row align-content-center mx-5">
        <div className="col-9 text-left">
          <span className="h2 m-0">{movie.theatre}</span>
        </div>
      </div>
      <div className="row align-content-center mx-5">
        <div className="col-12 text-left">
          <DateElement date={timing} />
        </div>
      </div>
    </div>
  );
}

export default TheatreComponent;
