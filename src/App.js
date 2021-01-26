import React, { Component } from "react";
import "./assets/styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import NavBar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";
import Container from "./pages/SearchBusesContainer";
import TicketPNRStatusContainer from "./pages/TicketPNRStatusContainer";
import BookingStatusContainer from "./pages/BookingStatusContainer";
import BusSearchResultContainer from "./pages/BusSearchResultsContainer";
import BusStatus from "./components/bus/findBus";
import AddBusContainer from "./pages/AddBusContainer";
import PrivateRoute from "./components/common/PrivateRoute";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavBar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/admin/register" component={Register} />
            <Route exact path="/admin/login" component={Login} />
            <Switch>
              <PrivateRoute
                exact
                path="/admin/dashboard"
                component={Dashboard}
              />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/add-bus" component={AddBusContainer} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/find-bus" component={BusStatus} />
            </Switch>
            <Route exact path="/search-bus" component={Container} />
            <Route exact path="/booking" component={TicketPNRStatusContainer} />
            <Route exact path="/buses" component={BusSearchResultContainer} />
            <Route exact path="/status" component={BookingStatusContainer} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
