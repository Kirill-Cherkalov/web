import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import './index.css';

import AppRouter from './router';
import configureStore from './redux/configureStore';
import theme from './theme';

const store = configureStore();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
