import { FooterDefault } from '@componets/FooterDefault';
import { NavigationDefault } from '@componets/NavigationDefault';
import { ReactNode } from 'react';

type HomeLayoutType = {
  children: ReactNode;
};

const HomeLayoutDefault: React.FC<HomeLayoutType> = ({ children }) => {
  return (
    <>
      <NavigationDefault />

      {children}

      <FooterDefault />
    </>
  );
};

export { HomeLayoutDefault };
