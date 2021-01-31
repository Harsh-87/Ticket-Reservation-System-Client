import React, { Component } from "react";
import { Link } from "react-router-dom";

class DashboardContainer extends Component {
  render() {
    return (
      <div className="search-box">
        <div className="dark-overlay search-box-inner text-light">
          <div className="container">
            <h1 className="display-4">Dashboard</h1>
            <div className="row justify-content-center">
              <div className="col-4 btn btn-info m-3">
                <Link className="nav-link text-white" to="/add-movie">
                  Add Movie
                </Link>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-4 btn btn-info m-3">
                <Link className="nav-link text-white" to="/find-movie">
                  Find Movie
                </Link>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-4 btn btn-info m-3">
                <Link className="nav-link text-white" to="/search-movie">
                  Search Movie
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardContainer;
