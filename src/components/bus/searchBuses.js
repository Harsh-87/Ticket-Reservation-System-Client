import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getBuses } from "../../actions/busActions";
import TextFieldGroup from "../common/TextFieldGroup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class SearchBuses extends Component {
  constructor() {
    super();
    this.state = {
      from: "",
      to: "",
      departure: new Date(),
      errors: {},
    };
    this.onDateChange = this.onDateChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onDateChange(value) {
    this.setState({ departure: value });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    let departure = this.state.departure;
    departure.setHours(0, 0, 0);
    const query = {
      from: this.state.from,
      to: this.state.to,
      departure: departure,
    };
    this.props.getBuses(query, this.props.history);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  render() {
    const { errors } = this.state;
    const today = new Date();

    return (
      <div className="search-box">
        <div className="dark-overlay search-box-inner text-light">
          <div className="container">
            <div className="col-md-8 m-auto">
              <form onSubmit={this.onSubmit}>
                <div className="row text-left">
                  <div className="col-4">
                    <label className="text-white">From</label>
                    <TextFieldGroup
                      type="text"
                      error={errors.text}
                      placeholder="From"
                      name="from"
                      value={this.state.from}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="col-4">
                    <label className="text-white">To</label>
                    <TextFieldGroup
                      type="text"
                      error={errors.text}
                      placeholder="To"
                      name="to"
                      value={this.state.to}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="col-4">
                    <label className="text-white">Departure Date</label>
                    <DatePicker
                      className="btn text-left p-2"
                      selected={this.state.departure}
                      placeholderText="Select Date"
                      minDate={today}
                      dateFormat="dd/MM/yyyy"
                      onSelect={this.onDateChange}
                      onChange={this.onDateChange}
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-4">
                    <button
                      className="btn btn-info mt-4"
                      type="submit"
                      disabled={
                        this.state.from && this.state.to && this.state.departure
                          ? ""
                          : "disabled"
                      }
                    >
                      <span>Search</span>
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

SearchBuses.propTypes = {
  getBuses: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { getBuses })(SearchBuses);
