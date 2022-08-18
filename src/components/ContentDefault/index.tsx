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
  marginX,
  marginY,
  gridRepeat,
  isVisibility,
  isDisplay,
  isHeight,
  media
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
      marginX={marginX}
      marginY={marginY}
      gridRepeat={gridRepeat}
      isVisibility={isVisibility}
      isDisplay={isDisplay}
      isHeight={isHeight}
      media={media}
    >
      {children}
    </Styles.ContentDefaultStyle>
  );
};

export { ContentDefault };
