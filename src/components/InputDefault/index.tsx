import { TypeDefault } from '@assets/styles/themes/TypeDefault';

import * as Styles from './styles';

const InputDefault: React.FC<TypeDefault> = ({
  type,
  placeholder,
  fontSize,
  bgtext,
  bgcolor,
  as,
  width,
  height,
  isUppercase,
  fontFamily,
  fontWeight,
  lineHeight = 'base130',
  padding,
  paddingX,
  paddingY,
  margin,
  marginX,
  marginY,
  marginTop,
  marginBottom,
  radius,
  radiusTopLeft,
  radiusTopRight,
  radiusBottomLeft,
  radiusBottomRight,
  flexWrap,
  gap,
  direction,
  aitems,
  jcontent,
  onChange,
  ...props
}) => {
  return (
    <>
      <Styles.LabelDefaultContainer>{props.label}</Styles.LabelDefaultContainer>
      <Styles.InputDefaultContainer
        width={width}
        height={height}
        type={type}
        placeholder={placeholder}
        as={as}
        fontSize={fontSize}
        bgcolor={bgcolor}
        bgtext={bgtext}
        bgInput={props.bgInput}
        textInput={props.textInput}
        isUppercase={isUppercase}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        lineHeight={lineHeight}
        padding={padding}
        paddingX={paddingX}
        paddingY={paddingY}
        margin={margin}
        marginTop={marginTop}
        marginBottom={marginBottom}
        marginX={marginX}
        marginY={marginY}
        radius={radius}
        radiusTopLeft={radiusTopLeft}
        radiusTopRight={radiusTopRight}
        radiusBottomLeft={radiusBottomLeft}
        radiusBottomRight={radiusBottomRight}
        gap={gap}
        flexWrap={flexWrap}
        direction={direction}
        aitems={aitems}
        jcontent={jcontent}
        onChange={onChange}
        colorFocus={props.colorFocus}
        flexGrow={props.flexGrow}
        isBorder={props.isBorder}
        iconBgcolor={props.iconBgcolor}
        iconColor={props.iconColor}
        iconSize={props.iconSize}
      />
    </>
  );
};

export { InputDefault };
