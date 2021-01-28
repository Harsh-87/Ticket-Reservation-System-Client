import React from "react";
import BusElementComponent from "../components/bus/BusElementComponent";
import store from "../store";
import "../assets/styles/Bus.css";
import { useHistory } from "react-router-dom";

function BusSearchResultContainer() {
  const state = store.getState();
  const buses = state.busData.buses;
  const history = useHistory();
  return (
    <div className="container">
      {buses.map((bus) => (
        <BusElementComponent key={bus._id} bus={bus} history={history} />
      ))}
    </div>
  );
}

export default BusSearchResultContainer;
