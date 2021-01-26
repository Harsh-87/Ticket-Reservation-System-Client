import bus_pic from "../../assets/images/bus2.jpg";
import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bookTicket } from "../../actions/ticketActions";
import TextFieldGroup from "../common/TextFieldGroup";
import BusLayoutComponent from "./BusLayoutComponent";

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
class BusItem extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      age: "",
      email: "",
      mobile: "",
      seat_no: 0,
      showLayout: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClicked = this.onClicked.bind(this);
    this.seatSelection = this.seatSelection.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onClicked() {
    this.setState({ showLayout: !this.state.showLayout });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.seat_no !== 0) {
      const query = {
        seat_no: this.state.seat_no,
        status: "Booked",
        details: {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          age: this.state.age,
          email: this.state.email,
          mobile: this.state.mobile,
        },
        bus: this.props.bus._id,
      };
      this.props.bookTicket(query, this.props.history);
    }
  }

  seatSelection(seat) {
    this.setState({ seat_no: seat.seat_no });
    console.log(seat);
  }

  render() {
    const bus = this.props.bus;
    const departure = new Date(bus.departure);
    const arrival = new Date(bus.arrival);
    const busItemComponent = (
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
                <button
                  onClick={this.onClicked.bind(this)}
                  className="btn btn-info"
                >
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
    const busLayoutComponent = (
      <div
        className="text-left p-4 border"
        style={{
          position: "fixed",
          width: "90%",
          height: "90%",
          left: "5%",
          top: "8%",
          background: "white",
          zIndex: "10",
        }}
      >
        <button
          className="btn btn-secondary"
          onClick={this.onClicked.bind(this)}
        >
          Go Back
        </button>
        <div className="card card-body bg-light mx-5 my-2">
          <div className="row align-items-center">
            <div className="col-5">
              <div height="100px" width="100px">
                <BusLayoutComponent
                  bus={this.props.bus}
                  onSeatSelected={this.seatSelection}
                  selectedSeat={this.state.seat_no}
                />
              </div>
            </div>
            <div className="col-7 border-left">
              <div className="row mx-5">
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

              <form onSubmit={this.onSubmit}>
                <div className="row text-center justify-content-center">
                  <p className="text-primary h3 p-2">Details</p>
                </div>
                <div className="row text-left justify-content-center">
                  <div className="col-4">
                    <label>Firstname</label>
                    <TextFieldGroup
                      type="text"
                      placeholder="First Name"
                      name="firstname"
                      value={this.state.firstname}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="col-4">
                    <label>Last Name</label>
                    <TextFieldGroup
                      type="text"
                      placeholder="Last Name"
                      name="lastname"
                      value={this.state.lastname}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="col-2">
                    <label>Age</label>
                    <TextFieldGroup
                      type="number"
                      placeholder="Age"
                      name="age"
                      value={this.state.age}
                      onChange={this.onChange}
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
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="col-4">
                    <label>Mobile</label>
                    <TextFieldGroup
                      type="text"
                      placeholder="Mobile"
                      name="mobile"
                      value={this.state.mobile}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="col-2">
                    <label>Seat No</label>
                    <TextFieldGroup
                      type="text"
                      placeholder="Seat No"
                      name="seat_no"
                      value={this.state.seat_no}
                      onChange={this.onChange}
                      disabled
                    />
                  </div>
                </div>
                <div className="row  justify-content-center ">
                  <div className="col-6 text-center">
                    <button className="btn btn-info" type="submit">
                      <span>Book</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
    return this.state.showLayout ? busLayoutComponent : busItemComponent;
  }
}

BusItem.propTypes = {
  bookTicket: PropTypes.func.isRequired,
  bus: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  busData: state.busData,
});

export default connect(mapStateToProps, { bookTicket })(BusItem);
