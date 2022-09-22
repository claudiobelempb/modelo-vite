import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import { NavLink } from 'react-router-dom';

const LinkDefault: React.FC<TypeDefault> = ({
  children,
  href,
  target = '_self',
  links = [],
  ...props
}) => {
  return (
    <NavLink to={href ? href : ''} target={target}>
      {children}
    </NavLink>
  );
};

LinkDefault.defaultProps = {
  children: 'Link Default',
  href: '/',
  target: '_self'
};

export { LinkDefault };
