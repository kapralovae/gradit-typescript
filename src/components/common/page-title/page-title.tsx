import * as S from './page-title.styled';

type PageTitleType = {
  children: React.ReactNode;
}

const PageTitle = ({ children, ...props }: PageTitleType) => (
  <S.PageTitle {...props}>{children}</S.PageTitle>
);

export default PageTitle;
