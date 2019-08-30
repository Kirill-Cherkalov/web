import { combineReducers } from 'redux';

import auth from './auth';
import book from './book';

const rootReducer = combineReducers({
  auth,
  book,
});

export default rootReducer;
