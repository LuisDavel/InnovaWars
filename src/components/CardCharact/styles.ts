import styled from 'styled-components';

export const WrapperText = styled.section`
  width: 240px;
  padding: 5px;
  border-radius: 5px;
  opacity:0.5;
  margin-bottom: 10px;
  border: 2px solid ${props => props.theme['secondary']};
  :hover{
    opacity:1;
    border: 2px solid ${props => props.theme['secondary']};
    transition:all 0.3s ease;
  }
`;

export const WrapperPopUp = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  background:${props => props.theme['primary']} ;
  z-index: 1;
  width: 100%;
  height: 100%;
`;


export const LineText = styled.p`
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
  border-bottom: 2px solid ${props => props.theme['secondary']};
  
`;
export const LineTitle = styled.p`
  margin-top: 10px;

`;



   