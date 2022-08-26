import { TypeDefault } from '@assets/styles/themes/TypeDefault';

import * as Styles from './styles';

const ContentDefault: React.FC<TypeDefault> = ({
  children,
  bgcolor,
  bgtext,
  fontSize,
  as,
  direction,
  jcontent,
  aitems,
  gap,
  padding,
  paddingX,
  paddingY,
  margin,
  marginTop,
  marginBottom,
  marginX,
  marginY,
  isGridRepeat,
  isVisibility,
  isDisplay,
  height,
  width,
  media,
  radius,
  radiusTopLeft,
  radiusTopRight,
  radiusBottomLeft,
  radiusBottomRight,
  flexWrap
}) => {
  return (
    <Styles.ContentDefaultStyle
      as={as}
      bgtext={bgtext}
      bgcolor={bgcolor}
      fontSize={fontSize}
      direction={direction}
      jcontent={jcontent}
      aitems={aitems}
      gap={gap}
      padding={padding}
      paddingX={paddingX}
      paddingY={paddingY}
      margin={margin}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginX={marginX}
      marginY={marginY}
      isGridRepeat={isGridRepeat}
      isVisibility={isVisibility}
      isDisplay={isDisplay}
      height={height}
      width={width}
      media={media}
      radius={radius}
      radiusTopLeft={radiusTopLeft}
      radiusTopRight={radiusTopRight}
      radiusBottomLeft={radiusBottomLeft}
      radiusBottomRight={radiusBottomRight}
      flexWrap={flexWrap}
    >
      {children}
    </Styles.ContentDefaultStyle>
  );
};

export { ContentDefault };
