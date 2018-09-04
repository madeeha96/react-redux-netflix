import { map } from "lodash";
import { call, put, takeLatest } from "redux-saga/effects";
import request from "utils/request";

import { FETCH_USER_LIST, FETCH_USER } from "./constants";
import {
  fetchUserListFFailed,
  fetchUserListSuccessful,
  fetchUserSuccessful
} from "./actions";

export function* userList() {
  const requestURL = "https://jsonplaceholder.typicode.com/users";

  try {
    const users = yield call(request, requestURL);
    yield put(
      fetchUserListSuccessful(
        map(users, ({ id, ...rest }) => ({ _id: id, ...rest }))
      )
    );
  } catch (err) {
    yield put(fetchUserListFFailed(err));
  }
}

export function* fetchUser({ payload }) {
  // const users = yield select(selectors.selectUsers) ;
  // // const requestURL = 'https://jsonplaceholder.typicode.com/users' ;
  // const selectedUser = filter(users, { _id: +payload }) ;
  // debugger
  // console.log('selectedUser', selectedUser[0]) ;
  // // try {
  // // } catch (err) {
  // // }

  const requestURL = `https://jsonplaceholder.typicode.com/users/${payload}`;

  try {
    const user = yield call(request, requestURL);
    const { id, ...rest } = user;
    yield put(fetchUserSuccessful({ _id: id, ...rest }));
  } catch (err) {
    Error(err);
  }
}

export default function* userData() {
  yield takeLatest(FETCH_USER_LIST, userList);
  yield takeLatest(FETCH_USER, fetchUser);
}
