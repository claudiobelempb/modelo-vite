import { NavBarDefault } from '@componets/NavBarDefault';
import { ReactNode } from 'react';

type HomeLayoutType = {
  children: ReactNode;
};

const HomeLayout: React.FC<HomeLayoutType> = ({ children }) => {
  return (
    <>
      <NavBarDefault />
      {children}
    </>
  );
};

export { HomeLayout };
