import { ContainerDefault } from '@componets/ContainerDefault';
import { NavBarDefault } from '@componets/NavBarDefault';
import { ReactNode } from 'react';

type HomeLayoutType = {
  children: ReactNode;
};

const HomeLayout: React.FC<HomeLayoutType> = ({ children }) => {
  return (
    <ContainerDefault>
      <NavBarDefault />
      {children}
    </ContainerDefault>
  );
};

export { HomeLayout };
