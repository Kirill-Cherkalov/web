import React, { Fragment } from 'react';

import { useActions } from 'helpers/hooks';
import { actions as authActions } from 'redux/auth';

const Dashboard = () => {
  const actions = useActions(authActions);

  return (
    <Fragment>
      <div>
        Dashboard
      </div>
      <button type="button" onClick={actions.logoutRequest}>logout</button>
    </Fragment>
  );
};

export default Dashboard;
