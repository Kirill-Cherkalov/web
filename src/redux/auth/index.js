import { handleActions, createActions } from 'redux-actions';

import initialState, * as handlers from './handlers';

export const actions = createActions({
  AUTHENTICATE_REQUEST: undefined,
  AUTHENTICATE_SUCCESS: undefined,
  AUTHENTICATE_FAILURE: undefined,

  CLEAR_REGISTERED: undefined,

  IS_AUTHENTICATED_REQUEST: undefined,
  IS_AUTHENTICATED_SUCCESS: undefined,
  IS_AUTHENTICATED_FAILURE: undefined,

  LOGOUT_REQUEST: undefined,
  LOGOUT_SUCCESS: undefined,
  LOGOUT_FAILURE: undefined,

  REGISTER_REQUEST: undefined,
  REGISTER_SUCCESS: undefined,
  REGISTER_FAILURE: undefined,
});

const reducer = handleActions(
  new Map([
    [actions.authenticateRequest, handlers.authenticateRequest],
    [actions.authenticateSuccess, handlers.authenticateSuccess],
    [actions.authenticateFailure, handlers.authenticateFailure],

    [actions.isAuthenticatedRequest, handlers.isAuthenticatedRequest],
    [actions.isAuthenticatedSuccess, handlers.isAuthenticatedSuccess],
    [actions.isAuthenticatedFailure, handlers.isAuthenticatedFailure],

    [actions.logoutRequest, handlers.logoutRequest],
    [actions.logoutSuccess, handlers.logoutSuccess],
    [actions.logoutFailure, handlers.logoutFailure],

    [actions.registerRequest, handlers.registerRequest],
    [actions.registerSuccess, handlers.registerSuccess],
    [actions.registerFailure, handlers.registerFailure],
  ]),
  initialState,
);

export default reducer;
