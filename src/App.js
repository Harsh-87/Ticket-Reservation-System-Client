import "./assets/styles/App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import LoginContainer from "./containers/LoginContainer";
import RegisterContainer from "./containers/RegisterContainer";
import DashboardContainer from "./containers/DashboardContainer";
import SearchMoviesContainer from "./containers/SearchMoviesContainer";
import TicketStatusContainer from "./containers/TicketStatusContainer";
import BookingStatusContainer from "./containers/BookingStatusContainer";
import MovieSearchResultContainer from "./containers/MovieSearchResultsContainer";
import FindMovieDetailsContainer from "./containers/FindMovieDetailsContainer";
import AddMovieContainer from "./containers/AddMovieContainer";
import PrivateRoute from "./components/common/PrivateRoute";
import { verifyAdmin } from "./actions/authActions";
import { connect } from "react-redux";

class App extends Component {
  state = {
    isLoading: true,
  };

  async componentDidMount() {
    await this.props.verifyAdmin();
    this.setState({ isLoading: false });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div style={{ minHeight: "75vh" }}>
            <Route exact path="/" component={Landing} />
            <Route exact path="/admin/register" component={RegisterContainer} />
            <Route exact path="/admin/login" component={LoginContainer} />
            <Switch>
              <PrivateRoute
                exact
                path="/admin/dashboard"
                component={DashboardContainer}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/add-movie"
                component={AddMovieContainer}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/find-movie"
                component={FindMovieDetailsContainer}
              />
            </Switch>
            <Route
              exact
              path="/search-movie"
              component={SearchMoviesContainer}
            />
            <Route exact path="/booking" component={TicketStatusContainer} />
            <Route
              exact
              path="/movies"
              component={MovieSearchResultContainer}
            />
            <Route exact path="/status" component={BookingStatusContainer} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  toasts: state.common.toasts,
});

export default connect(mapStateToProps, { verifyAdmin })(App);
