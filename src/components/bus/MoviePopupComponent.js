import TheatreComponent from "./TheatreComponent";
import MovieLayoutComponent from "./MovieLayoutComponent";
import BookingFormComponent from "./BookingFormComponent";

function MoviePopupComponent(props) {
  const {
    toggleView,
    movie,
    onSeatSelected,
    onSubmit,
    onChange,
    state,
  } = props;
  return (
    <div className="text-left p-5 border floatLayout">
      <button className="btn btn-secondary" onClick={toggleView}>
        Go Back
      </button>
      <div className="row m-3 align-items-center">
        <div className="col-5">
          <div>
            <MovieLayoutComponent
              movie={movie}
              onSeatSelected={onSeatSelected}
              selectedSeat={state.seat_no}
              admin={false}
            />
          </div>
        </div>
        <div className="col-7">
          <TheatreComponent movie={movie} />
          <BookingFormComponent
            onSubmit={onSubmit}
            onChange={onChange}
            state={state}
          />
        </div>
      </div>
    </div>
  );
}

export default MoviePopupComponent;
