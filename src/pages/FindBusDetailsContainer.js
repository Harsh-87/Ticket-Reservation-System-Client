import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getBusAdmin } from "../actions/busActions";
import TextFieldGroup from "../components/common/TextFieldGroup";
import TicketCardComponent from "../components/tickets/TicketCardComponent";

class FindBusDetailsContainer extends Component {
  constructor() {
    super();
    this.state = {
      busId: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  render() {
    const { errors } = this.state;
    const { bus } = this.props.busData;
    let ticketComponents;
    if (bus?._id) {
      ticketComponents = bus.seats.map((seat) =>
        seat.status === "close" ? (
          <TicketCardComponent ticket={seat.ticket_id} showBusInfo={false} />
        ) : (
          ""
        )
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
                    <label className="text-white">Bus Id</label>
                    <TextFieldGroup
                      type="text"
                      error={errors.text}
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
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  busData: state.busData,
});

export default connect(mapStateToProps, { getBusAdmin })(
  FindBusDetailsContainer
);
