import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
`;

export const BasicContainer = styled(FlexContainer)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
