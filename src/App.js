import "./assets/styles/App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import LoginContainer from "./containers/LoginContainer";
import RegisterContainer from "./containers/RegisterContainer";
import DashboardContainer from "./containers/DashboardContainer";
import SearchBusesContainer from "./containers/SearchBusesContainer";
import TicketPNRStatusContainer from "./containers/TicketPNRStatusContainer";
import BookingStatusContainer from "./containers/BookingStatusContainer";
import BusSearchResultContainer from "./containers/BusSearchResultsContainer";
import FindBusDetailsContainer from "./containers/FindBusDetailsContainer";
import AddBusContainer from "./containers/AddBusContainer";
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
            {this.state.isLoading ? (
              <div>Loading</div>
            ) : (
              <>
                <Route exact path="/" component={Landing} />
                <Route
                  exact
                  path="/admin/register"
                  component={RegisterContainer}
                />
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
                    path="/add-bus"
                    component={AddBusContainer}
                  />
                </Switch>
                <Switch>
                  <PrivateRoute
                    exact
                    path="/find-bus"
                    component={FindBusDetailsContainer}
                  />
                </Switch>
                <Route
                  exact
                  path="/search-bus"
                  component={SearchBusesContainer}
                />
                <Route
                  exact
                  path="/booking"
                  component={TicketPNRStatusContainer}
                />
                <Route
                  exact
                  path="/buses"
                  component={BusSearchResultContainer}
                />
                <Route
                  exact
                  path="/status"
                  component={BookingStatusContainer}
                />
              </>
            )}
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect(null, { verifyAdmin })(App);
