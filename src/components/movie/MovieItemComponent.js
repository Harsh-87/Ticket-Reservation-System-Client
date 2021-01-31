import moviePic from "../../assets/images/movieAvatar.png";
import TheatreComponent from "./TheatreComponent";

function MovieItemComponent(props) {
  const { toggleView, movie } = props;
  return (
    <div className="card card-body bg-light mx-5 my-4 movieItem">
      <div className="row align-items-center">
        <div className="col-2">
          <img className="rounded-circle" src={moviePic} alt="Moviepic" />
        </div>
        <div className="col-8 border-left border-right">
          <TheatreComponent movie={movie} />
        </div>
        <div className="col-2">
          <div className="text-info h3 p-2">Rs 850 /-</div>
          <div>
            <button onClick={toggleView} className="btn btn-info">
              Book Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MovieItemComponent;
