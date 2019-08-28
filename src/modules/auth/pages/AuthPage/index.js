import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AuthForm from 'components/AuthForm';

import { useActions } from 'helpers/hooks';
import { actions as authActions } from 'redux/auth';

import * as S from './styled';

const AuthPage = ({ history, location }) => {
  const { authenticated } = useSelector(({ auth }) => auth);
  const actions = useActions(authActions);
  const { pathname } = location;

  useEffect(() => {
    if (authenticated) {
      history.push('/');
    }
  });

  return (
    <S.Container>
      <S.Wrapper>
        <h1>
          {pathname === '/login' ? 'Login' : 'Register'}
        </h1>
        <AuthForm
          onSubmit={pathname === '/login' ? actions.authenticateRequest : actions.registerRequest}
        />
      </S.Wrapper>
      <Link
        to={pathname === '/register' ? '/login' : '/register'}
      >
        Go to {pathname === '/register' ? 'Login' : 'Register'} Page
      </Link>
    </S.Container>
  );
};

AuthPage.propTypes = {
  actions: PropTypes.shape({
    registerRequest: PropTypes.func.isRequired,
  }).isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(AuthPage);
