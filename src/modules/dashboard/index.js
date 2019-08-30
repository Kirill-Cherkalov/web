import React, { Fragment } from 'react';

import { useActions } from 'helpers/hooks';
import { actions as authActions } from 'redux/auth';

import BookForm from './BookForm';

const Dashboard = () => {
  const actions = useActions(authActions);

  return (
    <Fragment>
      <button type="button" onClick={actions.logoutRequest}>logout</button>
      <BookForm onSubmit={() => {}} />
    </Fragment>
  );
};

export default Dashboard;
