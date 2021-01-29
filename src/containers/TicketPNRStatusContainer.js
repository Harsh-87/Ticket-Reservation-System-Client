import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTicket, cancelTicket, clearData } from "../actions/ticketActions";
import TextFieldGroup from "../components/common/TextFieldGroup";
import TicketCardComponent from "../components/tickets/TicketCardComponent";

class TicketPNRStatusContainer extends Component {
  constructor() {
    super();
    this.state = {
      pnr_number: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const query = {
      ticketId: this.state.pnr_number,
    };
    this.props.getTicket(query);
  }

  onCancelClick(ticket) {
    const query = {
      ticketId: ticket._id,
      busId: ticket.bus._id,
      seat_no: ticket.seat_no,
    };
    this.props.cancelTicket(query);
  }

  static getDerivedStateFromProps(newProps, state) {
    if (newProps.errors) {
      return { errors: newProps.errors };
    }
  }

  componentWillUnmount() {
    this.props.clearData();
  }

  render() {
    const { errors } = this.state;
    const { ticket } = this.props.ticketData;
    let ticketComponent;
    if (ticket?._id) {
      ticketComponent = (
        <div>
          <TicketCardComponent ticket={ticket} />
          {ticket.status === "Booked" ? (
            <button
              onClick={this.onCancelClick.bind(this, ticket)}
              className="btn btn-danger"
            >
              Cancel Ticket
            </button>
          ) : (
            ""
          )}
        </div>
      );
    }
    return (
      <div className="search-box">
        <div className="dark-overlay search-box-inner text-light">
          <div className="container">
            <div className="col-md-8 m-auto">
              <form onSubmit={this.onSubmit}>
                <div className="row text-left justify-content-center">
                  <div className="col-6">
                    <label className="text-white">PNR Number</label>
                    <TextFieldGroup
                      type="text"
                      error={errors.text}
                      placeholder="PNR Number"
                      name="pnr_number"
                      value={this.state.pnr_number}
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
            {ticket?._id === undefined ? "" : ticketComponent}
          </div>
        </div>
      </div>
    );
  }
}

TicketPNRStatusContainer.propTypes = {
  getTicket: PropTypes.func.isRequired,
  cancelTicket: PropTypes.func.isRequired,
  clearData: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  ticketData: state.ticketData,
});

export default connect(mapStateToProps, { getTicket, cancelTicket, clearData })(
  TicketPNRStatusContainer
);
