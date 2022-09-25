import { NavLink } from 'react-router-dom';
import * as Style from './style';

type NavigationDefaultProps = {
  isDisplay?: boolean;
  isOpenNavigation?: () => void;
};

const NavigationMobileDefault: React.FC<NavigationDefaultProps> = ({
  isDisplay = true,
  isOpenNavigation
}) => {
  return (
    <Style.NavigationMobileDefault
      onClick={isOpenNavigation}
      isDisplay={isDisplay}
    >
      <NavLink to={'#'}>Home</NavLink>
      <NavLink to={'#'}>Services</NavLink>
      <NavLink to={'#'}>Works</NavLink>
      <NavLink to={'#'}>Gallery</NavLink>
      <NavLink to={'#'}>Blog</NavLink>
      <NavLink to={'#'}>Contact</NavLink>
    </Style.NavigationMobileDefault>
  );
};

export { NavigationMobileDefault };
