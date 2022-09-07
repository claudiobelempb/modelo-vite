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
      iconBgcolor={props.iconBgcolor}
      iconColor={props.iconColor}
      iconSize={props.iconSize}
      isActive={props.isActive}
      isHeight={props.isHeight}
      heightR={props.heightR}
      heightP={props.heightP}
      heightPX={props.heightPX}
      heightVW={props.heightVW}
      heightVH={props.heightVH}
      heightCalc={props.heightCalc}
      isWidth={props.isWidth}
      widthR={props.widthR}
      widthP={props.widthP}
      widthPX={props.widthPX}
      widthVW={props.widthVW}
      widthVH={props.widthVH}
      widthCalc={props.widthCalc}
      isPaddingCustom={props.isPaddingCustom}
      paddingStaticX={props.paddingStaticX}
      paddingStaticY={props.paddingStaticY}
      paddingDynamicX={props.paddingDynamicX}
      paddingDynamicY={props.paddingDynamicY}
      isMarginCustom={props.isMarginCustom}
      marginStaticX={props.marginStaticX}
      marginStaticY={props.marginStaticY}
      marginDynamicX={props.marginDynamicX}
      marginDynamicY={props.marginDynamicY}
      fontSizeStatic={props.fontSizeStatic}
      fontSizeDynamic={props.fontSizeDynamic}
      isBorderDefault={props.isBorderDefault}
      borderWidth={props.borderWidth}
      borderStyle={props.borderStyle}
      borderColor={props.borderColor}
      borderTopColor={props.borderTopColor}
      borderTopStyle={props.borderTopStyle}
      borderTopWidth={props.borderTopWidth}
      borderRightColor={props.borderRightColor}
      borderRightStyle={props.borderRightStyle}
      borderRightWidth={props.borderRightWidth}
      borderBottomColor={props.borderBottomColor}
      borderBottomStyle={props.borderBottomStyle}
      borderBottomWidth={props.borderBottomWidth}
      borderLeftColor={props.borderLeftColor}
      borderLeftStyle={props.borderLeftStyle}
      borderLeftWidth={props.borderLeftWidth}
      borderImageSource={props.borderImageSource}
      borderImageSlice={props.borderImageSlice}
      borderImageWidth={props.borderImageWidth}
      borderImageOutset={props.borderImageOutset}
      borderImageRepeat={props.borderImageRepeat}
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
