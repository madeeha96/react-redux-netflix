// import { createSelector } from 'reselect';

// const selectUser = state => state.users;

const selectHome = state => state.get('home');
const selectUsers = state => {
  return state.homeReducer.users;
};

export { selectHome, selectUsers };
