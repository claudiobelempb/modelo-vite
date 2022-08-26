import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import { NavLink } from 'react-router-dom';
import * as Styles from './styles';

const LinkDefault: React.FC<TypeDefault> = ({
  children,
  href,
  fontSize,
  target = '_self',
  isAfter = false,
  isHover,
  links = [],
  ...props
}) => {
  return (
    <Styles.ContainerNavLink
      fontSize={fontSize}
      fontStyle={props.fontStyle}
      as={props.as}
      bgcolor={props.bgcolor}
      bgtext={props.bgtext}
      isUppercase={props.isUppercase}
      fontFamily={props.fontFamily}
      fontWeight={props.fontWeight}
      lineHeight={props.lineHeight}
      padding={props.padding}
      paddingX={props.paddingX}
      paddingY={props.paddingY}
      margin={props.margin}
      marginTop={props.marginTop}
      marginBottom={props.marginBottom}
      marginX={props.marginX}
      marginY={props.marginY}
      radius={props.radius}
      radiusTopLeft={props.radiusTopLeft}
      radiusTopRight={props.radiusTopRight}
      radiusBottomLeft={props.radiusBottomLeft}
      radiusBottomRight={props.radiusBottomRight}
      gap={props.gap}
      flexWrap={props.flexWrap}
      direction={props.direction}
      aitems={props.aitems}
      jcontent={props.jcontent}
      textAling={props.textAling}
      isAfter={isAfter}
      isHover={isHover}
      bgHover={props.bgHover}
      textHover={props.textHover}
      display={props.display}
      width={props.width}
      height={props.height}
      textcolor={props.textcolor}
    >
      <NavLink to={href ? href : ''} target={target}>
        {children}
      </NavLink>
    </Styles.ContainerNavLink>
  );
};

LinkDefault.defaultProps = {
  children: 'Link Default',
  href: '/',
  isAfter: false,
  isHover: false,
  target: '_self',
  bgtext: 'yellow',
  fontSize: 'base16'
};

export { LinkDefault };
