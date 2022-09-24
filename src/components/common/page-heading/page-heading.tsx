import * as S from './page-heading.styled';

type PageHeadingType = {
  children: React.ReactNode;
}

function PageHeading({ children, ...props }: PageHeadingType) {
  return <S.PageHeading {...props}>{children}</S.PageHeading>;
};

export default PageHeading;
