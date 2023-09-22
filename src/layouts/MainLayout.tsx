import Navbar from '../components/Navbar/Navbar';
import { ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>;
    </>
  );
};

export default MainLayout;
