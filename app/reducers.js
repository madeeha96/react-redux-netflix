import { combineReducers } from "redux";
import { LOCATION_CHANGE } from "react-router-redux";

import homeReducer from "containers/HomePage/reducer";

const routeInitialState = {
  location: null
};

function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return {
        location: action.payload
      };
    default:
      return state;
  }
}

export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    homeReducer,
    ...injectedReducers
  });
}
