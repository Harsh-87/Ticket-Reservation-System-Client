import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing">
      <div className="dark-overlay landing-inner text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-3 mb-4 mt-5">Movie Reservation System</h1>
              <hr className="bg-white" />
              <Link
                to="/search-movie"
                className="btn btn-lg btn-info mr-2 mt-5"
              >
                Book Tickets
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
