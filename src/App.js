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
import SearchBuses from "./components/bus/searchBuses";
import TicketStatus from "./components/tickets/ticketStatus";
import BusList from "./components/bus/showBusList";
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
            <Route exact path="/search-bus" component={SearchBuses} />
            <Route exact path="/booking" component={TicketStatus} />
            <Route exact path="/buses" component={BusList} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
