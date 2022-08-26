import { TypeDefault } from '@assets/styles/themes/TypeDefault';

import * as Styles from './styles';

const BoxDefault: React.FC<TypeDefault> = ({
  children,
  bgcolor,
  bgtext,
  fontSize,
  direction,
  jcontent,
  aitems,
  padding,
  paddingX,
  paddingY,
  margin,
  marginTop,
  marginBottom,
  marginX,
  marginY,
  xsmall,
  small,
  medium,
  large,
  xlarge,
  xxlarge,
  isVisibility,
  isDisplay,
  height,
  width,
  media,
  gap,
  radius,
  radiusTopLeft,
  radiusTopRight,
  radiusBottomLeft,
  radiusBottomRight,
  isGridRepeat,
  display,
  isBorder,
  border,
  as,
  ...props
}) => {
  return (
    <Styles.BoxDefaultStyle
      bgtext={bgtext}
      bgcolor={bgcolor}
      textcolor={props.textcolor}
      fontSize={fontSize}
      direction={direction}
      jcontent={jcontent}
      aitems={aitems}
      xsmall={xsmall}
      small={small}
      medium={medium}
      large={large}
      xlarge={xlarge}
      xxlarge={xxlarge}
      height={height}
      width={width}
      media={media}
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
      isVisibility={isVisibility}
      isDisplay={isDisplay}
      display={display}
      isBorder={isBorder}
      border={border}
      as={as}
      isGridRepeat={isGridRepeat}
      isImgRadius={props.isImgRadius}
      isBoxShadow={props.isBoxShadow}
      flexWrap={props.flexWrap}
      flexGrow={props.flexGrow}
      alignSelf={props.alignSelf}
    >
      {children}
    </Styles.BoxDefaultStyle>
  );
};

export { BoxDefault };
