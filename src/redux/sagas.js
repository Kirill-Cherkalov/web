import { all } from 'redux-saga/effects';

import authSagas from './auth/sagas';
import bookSagas from './book/sagas';

export default function* root() {
  yield all([
    ...authSagas,
    ...bookSagas,
  ]);
}
