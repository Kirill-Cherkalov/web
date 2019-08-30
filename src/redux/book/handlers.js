import { getErrorMessage } from 'helpers';

const initialState = {
  data: [],
  error: '',
  isLoading: false,
};

export const createBookRequest = state => ({
  ...state,
  isLoading: true,
  error: initialState.error,
});

export const createBookSuccess = state => ({
  ...state,
  isLoading: false,
  error: initialState.error,
});

export const createBookFailure = (state, { payload }) => ({
  ...state,
  isLoading: false,
  error: getErrorMessage(payload),
});

export const updateBookRequest = state => ({
  ...state,
  isLoading: true,
  error: initialState.error,
});

export const updateBookSuccess = state => ({
  ...state,
  isLoading: false,
  error: initialState.error,
});

export const updateBookFailure = (state, { payload }) => ({
  ...state,
  isLoading: false,
  error: getErrorMessage(payload),
});

export const deleteBookRequest = state => ({
  ...state,
  isLoading: true,
  error: initialState.error,
});

export const deleteBookSuccess = state => ({
  ...state,
  isLoading: false,
  error: initialState.error,
});

export const deleteBookFailure = (state, { payload }) => ({
  ...state,
  isLoading: false,
  error: getErrorMessage(payload),
});

export const getBooksRequest = state => ({
  ...state,
  isLoading: true,
  error: initialState.error,
});

export const getBooksSuccess = (state, { payload }) => ({
  ...state,
  data: payload,
  isLoading: false,
  error: initialState.error,
});

export const getBooksFailure = (state, { payload }) => ({
  ...state,
  isLoading: false,
  error: getErrorMessage(payload),
});


export default initialState;
