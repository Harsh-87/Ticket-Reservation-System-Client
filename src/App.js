import "./assets/styles/App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import NavBar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import LoginContainer from "./pages/LoginContainer";
import RegisterContainer from "./pages/RegisterContainer";
import DashboardContainer from "./pages/DashboardContainer";
import SearchBusesContainer from "./pages/SearchBusesContainer";
import TicketPNRStatusContainer from "./pages/TicketPNRStatusContainer";
import BookingStatusContainer from "./pages/BookingStatusContainer";
import BusSearchResultContainer from "./pages/BusSearchResultsContainer";
import FindBusDetailsContainer from "./pages/FindBusDetailsContainer";
import AddBusContainer from "./pages/AddBusContainer";
import PrivateRoute from "./components/common/PrivateRoute";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavBar />
            <div style={{ minHeight: "75vh" }}>
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
              <Route exact path="/buses" component={BusSearchResultContainer} />
              <Route exact path="/status" component={BookingStatusContainer} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
