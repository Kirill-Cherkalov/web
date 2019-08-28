import { getErrorMessage } from 'helpers';

const initialState = {
  authenticated: false,
  error: '',
  isLoading: false,
  user: {},
};

export const authenticateRequest = state => ({
  ...state,
  authenticated: false,
  isLoading: true,
  error: initialState.error,
});

export const authenticateSuccess = (state, { payload }) => ({
  ...state,
  authenticated: true,
  isLoading: false,
  user: payload,
});

export const authenticateFailure = (state, { payload }) => ({
  ...state,
  authenticated: false,
  isLoading: false,
  error: getErrorMessage(payload),
});

export const isAuthenticatedRequest = state => ({ ...state, isLoading: true });

export const isAuthenticatedSuccess = (state, { payload }) => ({
  ...state,
  authenticated: true,
  user: payload,
  isLoading: false,
});
export const isAuthenticatedFailure = state => ({ ...state, authenticated: false, isLoading: false });

export const logoutRequest = state => ({ ...state, error: initialState.error, isLoading: true });

export const logoutSuccess = () => ({
  ...initialState,
  authenticated: false,
  isLoading: false,
});
export const logoutFailure = (state, { payload }) => ({ ...state, error: getErrorMessage(payload), isLoading: false });

export const registerRequest = state => ({ ...state, error: initialState.error, isLoading: true });

export const registerSuccess = state => ({
  ...state,
  isLoading: false,
  authenticated: true,
});

export const registerFailure = (state, { payload }) => ({
  ...state,
  isLoading: false,
  error: getErrorMessage(payload.error),
});


export default initialState;
