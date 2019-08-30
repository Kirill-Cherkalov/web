import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';

import * as http from 'http/book';

import { actions as types } from './index';

function* onCreateBookRequest({ payload }) {
  try {
    yield call(http.create, payload);

    yield put(types.getBooksRequest());
    yield put(types.createBookSuccess());
  } catch (error) {
    yield put(types.createBookFailure(error));
  }
}

function* onUpdateBookRequest({ payload }) {
  try {
    yield call(http.update, payload);

    yield put(types.getBooksRequest());
    yield put(types.updateBookSuccess());
  } catch (error) {
    yield put(types.updateBookFailure(error));
  }
}

function* onDeleteBookRequest({ payload }) {
  try {
    yield call(http.remove, payload);

    yield put(types.getBooksRequest());
    yield put(types.deleteBookSuccess());
  } catch (error) {
    yield put(types.deleteBookFailure(error));
  }
}

function* onGetBooksRequest({ payload }) {
  try {
    const data = yield call(http.getList, payload);

    yield put(types.getBooksRequest());
    yield put(types.getBooksSuccess(data));
  } catch (error) {
    yield put(types.getBooksFailure(error));
  }
}

const bookSagas = [
  takeEvery(types.createBookRequest, onCreateBookRequest),
  takeEvery(types.updateBookRequest, onUpdateBookRequest),
  takeEvery(types.deleteBookRequest, onDeleteBookRequest),
  takeEvery(types.getBooksRequest, onGetBooksRequest),
];

export default bookSagas;
