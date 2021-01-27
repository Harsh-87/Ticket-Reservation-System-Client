import bus_pic from "../../assets/images/bus2.jpg";
import JourneyComponent from "./JourneyComponent";

function BusItemComponent(props) {
  const { toggleView, bus } = props;
  return (
    <div className="card card-body bg-light mx-5 my-4 busItem">
      <div className="row align-items-center">
        <div className="col-2">
          <img className="rounded-circle" src={bus_pic} alt="BusPic" />
        </div>
        <div className="col-8 border-left border-right">
          <JourneyComponent bus={bus} />
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
export default BusItemComponent;
