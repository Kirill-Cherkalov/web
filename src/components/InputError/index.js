import React from 'react';

import * as S from './styled';

const InputError = msg => (
  <S.ErrorText>
    {msg}
  </S.ErrorText>
);

export default InputError;
