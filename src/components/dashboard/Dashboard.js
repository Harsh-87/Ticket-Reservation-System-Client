import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    let dashboardContent;
    dashboardContent = (
      <div>
        <p className="lead text-muted">Welcome</p>
        <li className="btn btn-info m-3">
          <Link className="nav-link text-white" to="/add-bus">
            Add Bus
          </Link>
        </li>
        <br />
        <li className="btn btn-info m-3">
          <Link className="nav-link text-white" to="/find-bus">
            Find Bus
          </Link>
        </li>
        <br />
        <li className="btn btn-info m-3">
          <Link className="nav-link text-white" to="/search-bus">
            Search Bus
          </Link>
        </li>
      </div>
    );

    return (
      <div classnames="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
