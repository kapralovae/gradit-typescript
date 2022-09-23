import * as S from './page-subtext.styled';

type PageSubtextType = {
  children: React.ReactNode;
}

function PageSubtext({ children, ...props }: PageSubtextType) {
  return <S.PageSubtext {...props}>{children}</S.PageSubtext>;
};

export default PageSubtext;
