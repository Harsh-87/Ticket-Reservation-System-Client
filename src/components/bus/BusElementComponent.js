import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bookTicket } from "../../actions/ticketActions";
import BusItemComponent from "./BusItemComponent";
import BusPopupComponent from "./BusPopupComponent";

class BusElementComponent extends Component {
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
    this.toggleView = this.toggleView.bind(this);
    this.onSeatSelected = this.onSeatSelected.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  toggleView() {
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

  onSeatSelected(seat) {
    this.setState({ seat_no: seat.seat_no });
    console.log(seat);
  }

  render() {
    const bus = this.props.bus;
    const busItemComponent = (
      <BusItemComponent toggleView={this.toggleView} bus={bus} />
    );
    const busLayoutComponent = (
      <BusPopupComponent
        toggleView={this.toggleView}
        bus={bus}
        state={this.state}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        onSeatSelected={this.onSeatSelected}
      />
    );
    return this.state.showLayout ? busLayoutComponent : busItemComponent;
  }
}

BusElementComponent.propTypes = {
  bookTicket: PropTypes.func.isRequired,
  bus: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  busData: state.busData,
});

export default connect(mapStateToProps, { bookTicket })(BusElementComponent);
