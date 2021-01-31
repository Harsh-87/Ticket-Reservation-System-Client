import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bookTicket } from "../../actions/ticketActions";
import MovieItemComponent from "./MovieItemComponent";
import MoviePopupComponent from "./MoviePopupComponent";

class MovieElementComponent extends Component {
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
        movie: this.props.movie._id,
      };
      this.props
        .bookTicket(query)
        .then((val) => this.props.history.push("/status"));
    }
  }

  onSeatSelected(seat) {
    this.setState({ seat_no: seat.seat_no });
  }

  render() {
    const movie = this.props.movie;
    const movieItemComponent = (
      <MovieItemComponent toggleView={this.toggleView} movie={movie} />
    );
    const movieLayoutComponent = (
      <MoviePopupComponent
        toggleView={this.toggleView}
        movie={movie}
        state={this.state}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        onSeatSelected={this.onSeatSelected}
      />
    );
    return this.state.showLayout ? movieLayoutComponent : movieItemComponent;
  }
}

MovieElementComponent.propTypes = {
  bookTicket: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  movieData: state.movieData,
});

export default connect(mapStateToProps, { bookTicket })(MovieElementComponent);
