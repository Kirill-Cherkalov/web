import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useActions } from 'helpers/hooks';
import { actions as authActions } from 'redux/auth';

import PrivateRoute from './PrivateRoute';
import Login from '../modules/auth';
import Main from '../modules/main';


const AppRouter = () => {
  const { authenticated } = useSelector(({ auth }) => auth);
  const actions = useActions(authActions);

  useEffect(() => {
    actions.isAuthenticatedRequest();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path={['/register', '/login', '/forgot']} component={Login} />
        <PrivateRoute
          path="/"
          component={Main}
          authenticated={authenticated}
        />
      </Switch>
    </Router>
  );
};

export default AppRouter;
