import { Header, Footer } from '../common';

type MainLayoutType = {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutType) {
  return(
  <>
    <Header />
    {children}
    <Footer />
  </>
  );
}

export default MainLayout;
