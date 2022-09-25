import { NavLink } from 'react-router-dom';
import * as Style from './style';

type NavigationDesktopDefaultProps = {
  isDisplay?: boolean;
  isOpenNavigation?: () => void;
};

const NavigationDesktopDefault: React.FC<NavigationDesktopDefaultProps> = ({
  isDisplay = true,
  isOpenNavigation
}) => {
  return (
    <Style.NavigationDesktopDefault
      onClick={isOpenNavigation}
      isDisplay={isDisplay}
    >
      <NavLink to={'#'}>Home</NavLink>
      <NavLink to={'#'}>Services</NavLink>
      <NavLink to={'#'}>Works</NavLink>
      <NavLink to={'#'}>Gallery</NavLink>
      <NavLink to={'#'}>Blog</NavLink>
      <NavLink to={'#'}>Contact</NavLink>
    </Style.NavigationDesktopDefault>
  );
};

export { NavigationDesktopDefault };
