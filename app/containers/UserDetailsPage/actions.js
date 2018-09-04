import { FETCH_USER, SET_USER_ACTIVE, UNSELECT_ACTIVE_USER } from "./constants";

export function fetchUser(payload) {
  return {
    type: FETCH_USER,
    payload
  };
}

export function setUserActive(payload) {
  return {
    type: SET_USER_ACTIVE,
    payload
  };
}

export function unselectUser(payload) {
  return {
    type: UNSELECT_ACTIVE_USER,
    payload
  };
}
