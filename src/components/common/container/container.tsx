import * as S from './container.styled';

type ContainerType = {
  children: React.ReactNode;
}

const Container = ({ children, ...props }: ContainerType) => (
  <S.Container {...props}>{children}</S.Container>
);

export default Container;
