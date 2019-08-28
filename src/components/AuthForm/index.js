import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, ErrorMessage } from 'formik';

import validationUserSchema from './yup.schemas';
import * as S from './styled';

const errorFunc = msg => (
  <S.ErrorText>
    {msg}
  </S.ErrorText>
);

const AuthForm = ({ onSubmit }) => (
  <Formik
    initialValues={{ username: '', password: '' }}
    validationSchema={validationUserSchema}
    onSubmit={onSubmit}
  >
    {({ isSubmitting }) => (
      <S.FormikForm>
        <Field name="username" placeholder="username" />
        <ErrorMessage name="username">
          {errorFunc}
        </ErrorMessage>
        <Field type="password" name="password" placeholder="password" />
        <ErrorMessage name="password">
          {errorFunc}
        </ErrorMessage>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </S.FormikForm>
    )}
  </Formik>
);

AuthForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


export default AuthForm;
