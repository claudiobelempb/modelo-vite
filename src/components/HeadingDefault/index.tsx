import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import * as Styled from './styles';

const HeadingDefault: React.FC<TypeDefault> = ({
  children,
  bgcolor,
  bgtext,
  as = 'h1',
  fontSize,
  isUppercase = false,
  fontFamily,
  fontWeight,
  lineHeight,
  fontStyle,
  padding,
  paddingX,
  paddingY,
  margin,
  marginX,
  marginY,
  radius,
  radiusTopLeft,
  radiusTopRight,
  radiusBottomLeft,
  radiusBottomRight,
  marginTop,
  marginBottom,
  gap,
  flexWrap,
  direction,
  aitems,
  jcontent,
  ...props
}) => {
  return (
    <Styled.HeadingDefaultContainer
      fontSize={fontSize}
      fontStyle={fontStyle}
      as={as}
      bgcolor={bgcolor}
      textcolor={props.textcolor}
      bgtext={bgtext}
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
      textAling={props.textAling}
    >
      {children}
    </Styled.HeadingDefaultContainer>
  );
};

export { HeadingDefault };
