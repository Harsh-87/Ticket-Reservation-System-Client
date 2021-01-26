import TextFieldGroup from "../common/TextFieldGroup";

function BookingFormComponent(props) {
  const { state, onChange, onSubmit } = props;
  return (
    <form onSubmit={onSubmit}>
      <div className="row text-left justify-content-center">
        <div className="col-4">
          <label>Firstname</label>
          <TextFieldGroup
            type="text"
            placeholder="First Name"
            name="firstname"
            value={state.firstname}
            onChange={onChange}
          />
        </div>
        <div className="col-4">
          <label>Last Name</label>
          <TextFieldGroup
            type="text"
            placeholder="Last Name"
            name="lastname"
            value={state.lastname}
            onChange={onChange}
          />
        </div>
        <div className="col-2">
          <label>Age</label>
          <TextFieldGroup
            type="number"
            placeholder="Age"
            name="age"
            value={state.age}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="row text-left justify-content-center">
        <div className="col-4">
          <label>Email</label>
          <TextFieldGroup
            type="text"
            placeholder="Email"
            name="email"
            value={state.email}
            onChange={onChange}
          />
        </div>
        <div className="col-4">
          <label>Mobile</label>
          <TextFieldGroup
            type="text"
            placeholder="Mobile"
            name="mobile"
            value={state.mobile}
            onChange={onChange}
          />
        </div>
        <div className="col-2">
          <label>Seat No</label>
          <TextFieldGroup
            type="text"
            placeholder="Seat No"
            name="seat_no"
            value={state.seat_no}
            onChange={onChange}
            disabled
          />
        </div>
      </div>
      <div className="row justify-content-center ">
        <div className="col-6 text-center">
          <button
            className="btn btn-info"
            type="submit"
            disabled={state.seat_no === 0 ? "disabled" : ""}
          >
            <span>Book</span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default BookingFormComponent;
