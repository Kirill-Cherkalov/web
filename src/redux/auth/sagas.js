import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';

import * as http from 'http/auth';

import { actions as types } from './index';

function* onRegisterRequest({ payload }) {
  try {
    const user = yield call(http.register, payload);

    yield put(types.registerSuccess(user));
  } catch (error) {
    yield put(types.registerFailure(error));
  }
}

function* onIsAuthenticatedRequest({ payload }) {
  try {
    const user = yield call(http.isAuthenticated, payload);

    yield put(types.isAuthenticatedSuccess(user));
  } catch (error) {
    yield put(types.isAuthenticatedFailure(error));
  }
}

function* onLogoutRequest({ payload }) {
  try {
    const user = yield call(http.logout, payload);

    yield put(types.logoutSuccess(user));
  } catch (error) {
    yield put(types.logoutFailure(error));
  }
}

function* onAuthenticateRequest({ payload }) {
  try {
    const user = yield call(http.login, payload);

    yield put(types.authenticateSuccess(user));
  } catch (error) {
    yield put(types.authenticateFailure(error));
  }
}

const authSagas = [
  takeEvery(types.registerRequest, onRegisterRequest),
  takeEvery(types.isAuthenticatedRequest, onIsAuthenticatedRequest),
  takeEvery(types.logoutRequest, onLogoutRequest),
  takeEvery(types.authenticateRequest, onAuthenticateRequest),
];

export default authSagas;
