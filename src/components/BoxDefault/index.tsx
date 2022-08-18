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
  gap
}) => {
  return (
    <Styles.BoxDefaultStyle
      bgtext={bgtext}
      bgcolor={bgcolor}
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
      isVisibility={isVisibility}
      isDisplay={isDisplay}
      height={height}
      width={width}
      media={media}
      padding={padding}
      paddingX={paddingX}
      paddingY={paddingY}
      margin={margin}
      marginX={marginX}
      marginY={marginY}
      gap={gap}
    >
      {children}
    </Styles.BoxDefaultStyle>
  );
};

export { BoxDefault };
