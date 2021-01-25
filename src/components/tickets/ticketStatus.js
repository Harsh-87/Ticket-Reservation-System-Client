import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTicket, cancelTicket } from "../../actions/ticketActions";
import TextFieldGroup from "../common/TextFieldGroup";

class TicketStatus extends Component {
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

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  getDateAndTime(date) {
    return {
      time: date.toLocaleTimeString([], { timeStyle: "short" }),
      date: date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    };
  }

  render() {
    const { errors } = this.state;
    const { ticket } = this.props.ticketData;
    let ticketComponent;
    if (ticket?._id) {
      const depart = this.getDateAndTime(new Date(ticket.bus.departure));
      const arrive = this.getDateAndTime(new Date(ticket.bus.arrival));
      ticketComponent = (
        <div className="ticket">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card card-body bg-light m-3">
                  <div
                    className="m-2 p-2 text-left"
                    style={{ border: "2px dashed black" }}
                  >
                    <div className="row p-0 m-0">
                      <div className="col-5">
                        <span
                          className={
                            "btn text-left rounded " +
                            (ticket.status === "Cancelled"
                              ? "btn-danger"
                              : "btn-success")
                          }
                        >
                          {ticket.status}
                        </span>
                      </div>
                      <div className="col-7">
                        <h3 className="text-info text-left">Ticket</h3>
                      </div>
                    </div>
                    <hr className="m-0" />
                    <div className="row">
                      <div className="col-5">
                        <p className="text-secondary m-0 px-2">
                          Name : {ticket.details.firstname}{" "}
                          {ticket.details.lastname}
                        </p>
                        <p className="text-secondary m-0 px-2">
                          Mail ID : {ticket.details.email}
                        </p>
                        <p className="text-secondary m-0 px-2">
                          Mobile No : {ticket.details.mobile}
                        </p>
                        <p className="text-secondary m-0 px-2">
                          Age : {ticket.details.age}
                        </p>
                        <p className="text-secondary m-0 px-2">
                          Seat Number : {ticket.seat_no}
                        </p>
                      </div>
                      <div className="col-7">
                        <p className="text-secondary m-0 px-2">
                          <span className="text-secondary m-0 px-2">
                            Company : {ticket.bus.Company}
                          </span>
                          <br />
                          <span className="text-secondary m-0 px-2">
                            Departure : {depart.time} {depart.date}
                          </span>
                          <br />
                          <span className="text-secondary m-0 px-2">
                            Arrival : {arrive.time} {arrive.date}
                          </span>
                          <br />
                          <span className="text-secondary m-0 px-2">
                            From : {ticket.bus.from}
                          </span>
                          <br />
                          <span className="text-secondary m-0 px-2">
                            To : {ticket.bus.to}
                          </span>
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                  {ticket.status === "Cancelled" ? (
                    ""
                  ) : (
                    <div className="text-center">
                      <button
                        onClick={this.onCancelClick.bind(this, ticket)}
                        className="btn btn-danger"
                      >
                        Cancel Ticket
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
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

TicketStatus.propTypes = {
  getTicket: PropTypes.func.isRequired,
  cancelTicket: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  ticketData: state.ticketData,
});

export default connect(mapStateToProps, { getTicket, cancelTicket })(
  TicketStatus
);
