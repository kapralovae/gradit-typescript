import * as S from './container.styled';

type ContainerType = {
  children: React.ReactNode;
}

function Container ({ children, ...props }: ContainerType) {
  return <S.Container {...props}>{children}</S.Container>;
};

export default Container;
