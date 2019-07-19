import styled from 'styled-components';

const colors = {
  grey: '#242424',
};

export const StyledH2 = styled.h2`
  margin-top: 0;
  padding-top: 25px;
  color: ${props => props.color};
  background-color: linear-gradient(${colors.grey}, #ffffff);
`;
