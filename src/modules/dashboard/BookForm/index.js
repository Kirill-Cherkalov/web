import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, ErrorMessage } from 'formik';

import InputError from 'components/InputError';

import validationSchema from './yup.schemas';
import * as S from './styled';

const BookForm = ({ onSubmit }) => (
  <Formik
    initialValues={{ name: '', price: 0 }}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {({ isSubmitting }) => (
      <S.FormikForm>
        <Field name="name" placeholder="Book name" />
        <ErrorMessage name="name">
          {InputError}
        </ErrorMessage>
        <Field type="number" name="price" placeholder="Book price" />
        <ErrorMessage name="price">
          {InputError}
        </ErrorMessage>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </S.FormikForm>
    )}
  </Formik>
);

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default BookForm;
