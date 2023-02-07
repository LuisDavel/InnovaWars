import { useState } from 'react';
import * as S from './styles';

type TMenuProps = {
  children: React.ReactNode
}

const TMenu = ({children}:TMenuProps) => {
  return (
    <S.Wrapper>
      <div>
        {children}
      </div>   
    </S.Wrapper>
  )
}
  
export default TMenu;
  