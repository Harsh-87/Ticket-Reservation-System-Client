import JourneyComponent from "./JourneyComponent";
import BusLayoutComponent from "./BusLayoutComponent";
import BookingFormComponent from "./BookingFormComponent";

function BusPopupComponent(props) {
  const { toggleView, bus, onSeatSelected, onSubmit, onChange, state } = props;
  return (
    <div className="text-left p-5 border floatLayout">
      <button className="btn btn-secondary" onClick={toggleView}>
        Go Back
      </button>
      <div className="row m-3 align-items-center">
        <div className="col-5">
          <div>
            <BusLayoutComponent
              bus={bus}
              onSeatSelected={onSeatSelected}
              selectedSeat={state.seat_no}
            />
          </div>
        </div>
        <div className="col-7">
          <JourneyComponent bus={bus} />
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

export default BusPopupComponent;
