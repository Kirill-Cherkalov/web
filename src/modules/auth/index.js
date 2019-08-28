import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ForgotPage from './pages/ForgotPage';
import AuthPage from './pages/AuthPage';

const Login = () => (
  <Switch>
    <Route path={['/register', '/login']} component={AuthPage} />
    <Route path="/forgot" component={ForgotPage} />
  </Switch>
);

export default Login;
