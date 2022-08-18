import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import { NavLink } from 'react-router-dom';
import * as Styles from './styles';

const LinkDefault: React.FC<TypeDefault> = ({
  children,
  bgtext,
  href,
  fontSize,
  target = '_self',
  isAfter = false,
  links = []
}) => {
  return (
    <>
      <NavLink to={href ? href : ''} target={target}>
        <Styles.ContainerNavLink
          isAfter={isAfter}
          bgtext={bgtext}
          fontSize={fontSize}
        >
          {children}
        </Styles.ContainerNavLink>
      </NavLink>
    </>
  );
};

LinkDefault.defaultProps = {
  children: 'Link Default',
  href: '/',
  isAfter: false,
  target: '_self',
  bgtext: 'yellow',
  fontSize: 'base16'
};

export { LinkDefault };
