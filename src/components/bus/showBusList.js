import React, { useState } from "react";
import BusItem from "./busItem";
import store from "../../store";
import { useHistory } from "react-router-dom";

function BusList() {
  const state = store.getState();
  const buses = state.busData.buses;
  const history = useHistory();
  return buses.map((bus) => (
    <BusItem key={bus._id} bus={bus} history={history} />
  ));
}

export default BusList;
