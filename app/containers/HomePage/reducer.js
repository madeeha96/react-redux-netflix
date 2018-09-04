import {
  FETCH_USER_LIST,
  FETCH_USER_LIST_FAILED,
  FETCH_USER_LIST_SUCCESSFUL,
  SET_ACTIVE_USERS,
  FETCH_USER,
  FETCH_USER_SUCCESS
} from "./constants";

import {
  SET_USER_ACTIVE,
  UNSELECT_ACTIVE_USER
} from "../UserDetailsPage/constants";

// The initial state of the App
const initialState = {
  users: [],
  loading: false,
  activeUsers: [],
  selectedUser: {}
};

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_LIST:
      return { ...state, loading: true };
    case FETCH_USER_LIST_SUCCESSFUL:
      return {
        ...state,
        loading: false,
        users: action.payload,
        selectedUser: {}
      };
    case FETCH_USER_LIST_FAILED:
      return { ...state, loading: false };

    case SET_ACTIVE_USERS:
      return { ...state, activeUsers: action.payload };

    case FETCH_USER:
      return { ...state, loading: true };

    case FETCH_USER_SUCCESS:
      return { ...state, selectedUser: action.payload };

    case UNSELECT_ACTIVE_USER:
      debugger;
      return {
        ...state,
        activeUsers: state.activeUsers.filter(id => id !== +action.payload)
      };
    case SET_USER_ACTIVE:
      state.activeUsers.push(+action.payload);
      return {
        ...state,
        activeUsers: state.activeUsers
      };

    default:
      return state;
  }
}
