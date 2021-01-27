import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clearData } from "../actions/ticketActions";
import TicketCardComponent from "../components/tickets/TicketCardComponent";
class BookingStatusContainer extends Component {
  componentWillUnmount() {
    this.props.clearData();
  }

  render() {
    const { ticket } = this.props.ticketData;
    let ticketComponent;
    if (ticket?._id) {
      console.log(ticket);
      ticketComponent = (
        <div className="container">
          <p className="alert alert-success">
            Booking Successful : {ticket._id}
          </p>
          <TicketCardComponent ticket={ticket} />
        </div>
      );
    } else {
      ticketComponent = (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8">
              <div className="card card-body bg-light m-3">
                <p className="alert alert-danger">Booking Failed</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="search-box">
        <div className="dark-overlay search-box-inner text-light">
          {ticketComponent}
        </div>
      </div>
    );
  }
}

BookingStatusContainer.propTypes = {
  clearData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  ticketData: state.ticketData,
});

export default connect(mapStateToProps, { clearData })(BookingStatusContainer);
