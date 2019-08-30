import { handleActions, createActions } from 'redux-actions';

import initialState, * as handlers from './handlers';

export const actions = createActions({
  CREATE_BOOK_REQUEST: undefined,
  CREATE_BOOK_SUCCESS: undefined,
  CREATE_BOOK_FAILURE: undefined,

  DELETE_BOOK_REQUEST: undefined,
  DELETE_BOOK_SUCCESS: undefined,
  DELETE_BOOK_FAILURE: undefined,

  UPDATE_BOOK_REQUEST: undefined,
  UPDATE_BOOK_SUCCESS: undefined,
  UPDATE_BOOK_FAILURE: undefined,

  GET_BOOKS_REQUEST: undefined,
  GET_BOOKS_SUCCESS: undefined,
  GET_BOOKS_FAILURE: undefined,
});

const reducer = handleActions(
  new Map([
    [actions.createBookRequest, handlers.createBookRequest],
    [actions.createBookSuccess, handlers.createBookSuccess],
    [actions.createBookFailure, handlers.createBookFailure],

    [actions.updateBookRequest, handlers.updateBookRequest],
    [actions.updateBookSuccess, handlers.updateBookSuccess],
    [actions.updateBookFailure, handlers.updateBookFailure],

    [actions.deleteBookRequest, handlers.deleteBookRequest],
    [actions.deleteBookSuccess, handlers.deleteBookSuccess],
    [actions.deleteBookFailure, handlers.deleteBookFailure],

    [actions.getBooksRequest, handlers.getBooksRequest],
    [actions.getBooksSuccess, handlers.getBooksSuccess],
    [actions.getBooksFailure, handlers.getBooksFailure],
  ]),
  initialState,
);

export default reducer;
