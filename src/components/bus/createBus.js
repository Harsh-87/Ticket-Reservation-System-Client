import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addBus } from "../../actions/busActions";
import SelectListGroup from "../common/SelectListGroup";
import TextFieldGroup from "../common/TextFieldGroup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CreateBus extends Component {
  constructor() {
    super();
    this.state = {
      from: "",
      to: "",
      departure: new Date(),
      arrival: new Date(),
      Company: "",
      bus_no: "",
      no_of_seats: 40,
      success: false,
      errors: {},
    };
    this.onDepartureChange = this.onDepartureChange.bind(this);
    this.onArrivalChange = this.onArrivalChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onDepartureChange(value) {
    this.setState({ departure: value });
  }

  onArrivalChange(value) {
    this.setState({ arrival: value });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const query = {
      from: this.state.from,
      to: this.state.to,
      departure: this.state.departure,
      arrival: this.state.arrival,
      no_of_seats: this.state.no_of_seats,
      Company: this.state.Company,
      bus_no: this.state.bus_no,
    };
    this.props.addBus(query);
    this.setState({
      success: true,
      from: "",
      to: "",
      departure: new Date(),
      arrival: new Date(),
      Company: "",
      bus_no: "",
      no_of_seats: 40,
    });
  }

  render() {
    const { errors } = this.state;
    const today = new Date();
    const options = [
      { label: "Select City", value: 0 },
      { label: "Delhi", value: "Delhi" },
      { label: "Kolkata", value: "Kolkata" },
      { label: "Mumbai", value: "Mumbai" },
      { label: "Ranchi", value: "Ranchi" },
      { label: "Lucknow", value: "Lucknow" },
    ];
    return (
      <div className="search-box">
        <div className="dark-overlay search-box-inner text-light">
          <div className="container">
            <div className="col-md-8 m-auto">
              {this.state.success ? (
                <p className="alert alert-success m-3">
                  Bus Added Successfully
                </p>
              ) : (
                ""
              )}
              <form onSubmit={this.onSubmit}>
                <p className="h2">Add Bus</p>
                <div className="row justify-content-center">
                  <div className="col-6 text-left">
                    <label className="text-white">From</label>
                    <SelectListGroup
                      placeholder="From"
                      name="from"
                      value={this.state.from}
                      onChange={this.onChange}
                      onSelect={this.onChange}
                      options={options}
                      error={errors.text}
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-6 text-left">
                    <label className="text-white">To</label>
                    <SelectListGroup
                      placeholder="To"
                      name="to"
                      value={this.state.to}
                      onChange={this.onChange}
                      onSelect={this.onChange}
                      options={options}
                      error={errors.text}
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-6 text-left py-2">
                    <label className="text-white">Departure</label>
                    <br />
                    <DatePicker
                      className="btn text-left p-2"
                      selected={this.state.departure}
                      placeholderText="Departure"
                      minDate={today}
                      onSelect={this.onDepartureChange}
                      onChange={this.onDepartureChange}
                      timeInputLabel="Time:"
                      dateFormat="dd/MM/yyyy h:mm aa"
                      showTimeInput
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-6 text-left py-2">
                    <label className="text-white">Arrival</label>
                    <br />
                    <DatePicker
                      className="btn text-left p-2"
                      selected={this.state.arrival}
                      placeholderText="Arrival"
                      minDate={this.state.departure}
                      onSelect={this.onArrivalChange}
                      onChange={this.onArrivalChange}
                      timeInputLabel="Time:"
                      dateFormat="MM/dd/yyyy h:mm aa"
                      showTimeInput
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-6 text-left">
                    <label>Vehicle No</label>
                    <TextFieldGroup
                      type="text"
                      placeholder="Vehicle No"
                      name="bus_no"
                      value={this.state.bus_no}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-6 text-left">
                    <label>Company</label>
                    <TextFieldGroup
                      type="text"
                      placeholder="Company"
                      name="Company"
                      value={this.state.Company}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-4">
                    <button
                      className="btn btn-info mt-4"
                      type="submit"
                      disabled={
                        this.state.from &&
                        this.state.to &&
                        this.state.departure &&
                        this.state.arrival &&
                        this.state.bus_no &&
                        this.state.Company
                          ? ""
                          : "disabled"
                      }
                    >
                      <span>Add Bus</span>
                      <i className="fas fa-search p-2"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateBus.propTypes = {
  addBus: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { addBus })(CreateBus);
