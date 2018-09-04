import {
  FETCH_USER_LIST,
  FETCH_USER_LIST_FAILED,
  FETCH_USER_LIST_SUCCESSFUL,
  SET_ACTIVE_USERS,
  FETCH_USER,
  FETCH_USER_SUCCESS
} from "./constants";

export function fetchUserList(payload) {
  return {
    type: FETCH_USER_LIST,
    payload
  };
}

export function fetchUserListFFailed(payload) {
  return {
    type: FETCH_USER_LIST_FAILED,
    payload
  };
}

export function fetchUserListSuccessful(payload) {
  return {
    type: FETCH_USER_LIST_SUCCESSFUL,
    payload
  };
}

export function setActiveUsers(payload) {
  return {
    type: SET_ACTIVE_USERS,
    payload
  };
}

export function fetchUser(payload) {
  return {
    type: FETCH_USER,
    payload
  };
}

export function fetchUserSuccessful(payload) {
  return {
    type: FETCH_USER_SUCCESS,
    payload
  };
}
