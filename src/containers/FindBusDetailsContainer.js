import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clearData, getMovieAdmin } from "../actions/movieActions";
import TextFieldGroup from "../components/common/TextFieldGroup";
import TicketInfoComponent from "../components/tickets/TicketInfoComponent";
import MovieLayoutComponent from "../components/bus/MovieLayoutComponent";
import "../assets/styles/Ticket.css";
import TheatreComponent from "../components/bus/TheatreComponent";

class FindBusDetailsContainer extends Component {
  constructor() {
    super();
    this.state = {
      busId: "",
      seat_no: 0,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSeatSelected = this.onSeatSelected.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.getBusAdmin(this.state.busId);
  }

  onSeatSelected(seat) {
    this.setState({ seat_no: seat.seat_no });
  }

  componentWillUnmount() {
    this.props.clearData();
  }

  render() {
    const { bus } = this.props.busData;
    let ticketComponents;
    if (bus?._id) {
      ticketComponents = (
        <div className="card card-body bg-light">
          <div className="row text-dark">
            <div className="col-12">
              <TheatreComponent bus={bus} />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-5">
              <div>
                <MovieLayoutComponent
                  bus={bus}
                  onSeatSelected={this.onSeatSelected}
                  selectedSeat={this.state.seat_no}
                  admin={true}
                />
              </div>
            </div>
            <div className="col-7 text-dark">
              {this.state.seat_no === 0 ? (
                "Select a Seat"
              ) : (
                <TicketInfoComponent
                  ticket={bus.seats[this.state.seat_no - 1]}
                />
              )}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="search-box">
        <div className="dark-overlay pt-5 text-light">
          <div className="container">
            <div className="col-md-8 m-auto">
              <form onSubmit={this.onSubmit}>
                <div className="row text-left justify-content-center">
                  <div className="col-6">
                    <label className="text-white">Bus Id</label>
                    <TextFieldGroup
                      type="text"
                      error={null}
                      placeholder="Bus Id"
                      name="busId"
                      value={this.state.busId}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="row  justify-content-center ">
                  <div className="col-6 text-center">
                    <button className="btn btn-info" type="submit">
                      <span>Search</span>
                      <i className="fas fa-search p-2"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              className="m-2"
              style={{ maxHeight: "500px", overflow: "scroll" }}
            >
              {bus?._id === undefined ? "" : ticketComponents}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FindBusDetailsContainer.propTypes = {
  getBusAdmin: PropTypes.func.isRequired,
  clearData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  busData: state.busData,
});

export default connect(mapStateToProps, {
  getBusAdmin: getMovieAdmin,
  clearData,
})(FindBusDetailsContainer);
