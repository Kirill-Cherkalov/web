import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import validationUserSchema from './yup.schemas';
import InputField from '../InputField';

import * as S from './styled';

const AuthForm = ({ onSubmit }) => (
  <Formik
    initialValues={{ email: '', password: '' }}
    validationSchema={validationUserSchema}
    onSubmit={onSubmit}
  >
    {({ isSubmitting }) => (
      <S.FormikForm>
        <InputField
          name="email"
          placeholder="email"
          type="text"
        />
        <InputField
          name="password"
          placeholder="password"
          type="text"
        />
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
