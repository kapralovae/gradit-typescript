import * as S from './page-title.styled';

type PageTitleType = {
  children: React.ReactNode;
}

function PageTitle({ children, ...props }: PageTitleType) {
  return <S.PageTitle {...props}>{children}</S.PageTitle>;
};

export default PageTitle;
