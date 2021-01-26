import React from "react";
import BusElementComponent from "../components/bus/BusElementComponent";
import store from "../store";
import { useHistory } from "react-router-dom";

function BusSearchResultContainer() {
  const state = store.getState();
  const buses = state.busData.buses;
  const history = useHistory();
  return buses.map((bus) => (
    <BusElementComponent key={bus._id} bus={bus} history={history} />
  ));
}

export default BusSearchResultContainer;
