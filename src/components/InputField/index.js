/* eslint-disable react/prop-types */
import React from 'react';
import { useField } from 'formik';

import * as S from './styled';

const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <S.Label htmlFor={props.id || props.name}>
      {label}
      <S.Input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </S.Label>
  );
};

export default InputField;
