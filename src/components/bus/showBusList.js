import React from "react";
import BusItem from "./busItem";
import store from "../../store";

function BusList() {
  const state = store.getState();
  const buses = state.busData.buses;
  return buses.map((bus) => <BusItem key={bus._id} bus={bus} />);
}

export default BusList;
