import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid ${props => props.theme['secondary']};
  color: ${props => props.theme['gray-700']};
  height: 2rem;
  margin-bottom: 10px;
`;