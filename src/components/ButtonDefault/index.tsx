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
  isUppercase
}) => {
  return (
    <Styles.ButtonDefaultContainer
      bgtext={bgtext}
      bgcolor={bgcolor}
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
    >
      {isIconLeft && children}
      {title ? title : ''}
      {isIconRight && children}
    </Styles.ButtonDefaultContainer>
  );
};

export { ButtonDefault };
