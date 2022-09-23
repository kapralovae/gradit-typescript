import React, { MouseEventHandler } from 'react';
import * as S from './button.styled';

type ButtonType = {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Button({ children, onClick, ...props }: ButtonType) {
  return <S.Button onClick={onClick} {...props}>{children}</S.Button>
};

export default Button;
