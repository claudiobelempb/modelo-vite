import { TypeDefault } from '@assets/styles/themes/TypeDefault';

import * as Styles from './styles';

const ButtonDefault: React.FC<TypeDefault> = ({
  children,
  title,
  isIconLeft = true,
  isIconRight,
  fontSize,
  onClick,
  bgtext,
  bgcolor,
  direction,
  aitems,
  jcontent,
  isPosition,
  left,
  right,
  top,
  bottom,
  padding,
  paddingX,
  paddingY,
  margin,
  marginX,
  marginY,
  width,
  height,
  gap,
  isUppercase,
  ...props
}) => {
  return (
    <Styles.ButtonDefaultContainer
      bgtext={bgtext}
      bgcolor={bgcolor}
      textcolor={props.textcolor}
      direction={direction}
      fontSize={fontSize}
      jcontent={jcontent}
      aitems={aitems}
      isPosition={isPosition}
      left={left}
      right={right}
      top={top}
      bottom={bottom}
      onClick={onClick}
      padding={padding}
      paddingX={paddingX}
      paddingY={paddingY}
      margin={margin}
      marginX={marginX}
      marginY={marginY}
      height={height}
      width={width}
      gap={gap}
      isUppercase={isUppercase}
      iconBgcolor={props.iconBgcolor}
      iconColor={props.iconColor}
      iconSize={props.iconSize}
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
      {isIconLeft && children}
      {title ? title : ''}
      {isIconRight && children}
    </Styles.ButtonDefaultContainer>
  );
};

export { ButtonDefault };
