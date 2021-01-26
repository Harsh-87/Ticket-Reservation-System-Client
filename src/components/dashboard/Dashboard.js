import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div className="search-box">
        <div className="dark-overlay search-box-inner text-light">
          <div className="container">
            <h1 className="display-4">Dashboard</h1>
            <div className="row justify-content-center">
              <div className="col-4 btn btn-info m-3">
                <Link className="nav-link text-white" to="/add-bus">
                  Add Bus
                </Link>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-4 btn btn-info m-3">
                <Link className="nav-link text-white" to="/find-bus">
                  Find Bus
                </Link>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-4 btn btn-info m-3">
                <Link className="nav-link text-white" to="/search-bus">
                  Search Bus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
