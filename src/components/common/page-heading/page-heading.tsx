import * as S from './page-heading.styled';

type PageHeadingType = {
  children: React.ReactNode;
}

const PageHeading = ({ children, ...props }: PageHeadingType) => (
  <S.PageHeading {...props}>{children}</S.PageHeading>
);

export default PageHeading;
