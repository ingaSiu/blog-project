import { ReactNode, useEffect } from 'react';

import { HOME_PATH } from '../routes/consts';
import Navbar from '../components/Navbar/Navbar';

export type LinksProps = {
  path: string;
  title: string;
};
type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  const links: LinksProps[] = [
    {
      path: HOME_PATH,
      title: 'RECIPES',
    },
    {
      path: HOME_PATH,
      title: 'test1',
    },
    {
      path: HOME_PATH,
      title: 'test 2',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [children]);

  return (
    <>
      <Navbar links={links} homeLink={HOME_PATH} />
      <div>{children}</div>;
    </>
  );
};

export default MainLayout;
