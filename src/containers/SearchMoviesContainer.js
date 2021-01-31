import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMovies } from "../actions/movieActions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextFieldGroup from "../components/common/TextFieldGroup";

class SearchMoviesContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      timing: new Date(),
      errors: {},
    };
    this.onDateChange = this.onDateChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onDateChange(value) {
    this.setState({ timing: value });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    let timing = this.state.timing;
    timing.setHours(0, 0, 0);
    const query = {
      title: this.state.title,
      timing: timing,
    };
    this.props
      .getMovies(query)
      .then((val) => this.props.history.push("/buses"));
  }

  static getDerivedStateFromProps(newProps, state) {
    if (newProps.errors) {
      return { errors: newProps.errors };
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
                  <div className="col-6">
                    <label className="text-white">Title</label>
                    <TextFieldGroup
                      placeholder="Title"
                      name="title"
                      value={this.state.title}
                      onChange={this.onChange}
                      error={errors.text}
                    />
                  </div>
                  <div className="col-6">
                    <label className="text-white">Departure Date</label>
                    <DatePicker
                      className="btn text-left p-2"
                      selected={this.state.timing}
                      placeholderText="Select Date"
                      // minDate={today}
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
                        this.state.title && this.state.timing ? "" : "disabled"
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

SearchMoviesContainer.propTypes = {
  getMovies: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { getMovies })(SearchMoviesContainer);
