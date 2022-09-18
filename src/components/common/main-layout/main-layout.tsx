import { Header, Footer } from '../common';

type MainLayoutType = {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutType) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
