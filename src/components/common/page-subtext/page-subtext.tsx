import * as S from './page-subtext.styled';

type PageSubtextType = {
  children: React.ReactNode;
}

const PageSubtext = ({ children, ...props }: PageSubtextType) => (
  <S.PageSubtext {...props}>{children}</S.PageSubtext>
);

export default PageSubtext;
