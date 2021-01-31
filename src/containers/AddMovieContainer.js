import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addMovie, clearData } from "../actions/movieActions";
import TextFieldGroup from "../components/common/TextFieldGroup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class AddMovieContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      timing: new Date(),
      theatre: "",
      no_of_seats: 40,
      success: false,
      error: false,
    };
    this.onTimingChange = this.onTimingChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTimingChange(value) {
    this.setState({ timing: value });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  componentWillUnmount() {
    this.props.clearData();
  }

  async onSubmit(e) {
    e.preventDefault();
    this.setState({ error: false, success: false });
    const query = {
      title: this.state.title,
      timing: this.state.timing,
      no_of_seats: this.state.no_of_seats,
      theatre: this.state.theatre,
    };
    const movieId = await this.props.addMovie(query);
    const newState = {
      title: "",
      timing: new Date(),
      no_of_seats: 40,
      theatre: "",
    };
    if (movieId) {
      newState.success = true;
    } else {
      newState.error = true;
    }
    this.setState(newState);
  }

  render() {
    const { movie } = this.props.movieData;
    const today = new Date();
    return (
      <div className="search-box">
        <div className="dark-overlay text-light p-4">
          <div className="container">
            <div className="col-8 m-auto">
              {this.state.success ? (
                <p className="alert alert-success mb-3">
                  Movie Added Successfully : {movie._id}
                </p>
              ) : this.state.error ? (
                <p className="alert alert-danger mb-3">Some error occured!</p>
              ) : (
                ""
              )}
              <form onSubmit={this.onSubmit}>
                <p className="h2">Add Movie</p>
                <div className="row justify-content-center">
                  <div className="col-6 text-left">
                    <label className="text-white">Title</label>
                    <TextFieldGroup
                      placeholder="Title"
                      name="title"
                      value={this.state.title}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-6 text-left py-2">
                    <label className="text-white">Timing</label>
                    <br />
                    <DatePicker
                      className="btn text-left p-2"
                      selected={this.state.timing}
                      placeholderText="Timing"
                      minDate={today}
                      onSelect={this.onTimingChange}
                      onChange={this.onTimingChange}
                      timeInputLabel="Time:"
                      dateFormat="dd/MM/yyyy h:mm aa"
                      showTimeInput
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-6 text-left">
                    <label>Theatre</label>
                    <TextFieldGroup
                      type="text"
                      placeholder="Theatre"
                      name="theatre"
                      value={this.state.theatre}
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
                        this.state.title &&
                        this.state.timing &&
                        this.state.theatre
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

AddMovieContainer.propTypes = {
  addMovie: PropTypes.func.isRequired,
  movieData: PropTypes.object.isRequired,
  clearData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movieData: state.movieData,
});

export default connect(mapStateToProps, { addMovie, clearData })(
  AddMovieContainer
);
