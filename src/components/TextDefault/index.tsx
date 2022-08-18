import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import * as Styles from './styles';

const TextDefault: React.FC<TypeDefault> = ({
  children,
  as,
  bgtext,
  fontSize,
  isUppercase = false,
  paddingX,
  paddingY,
  margin,
  marginX,
  marginY,
  fontWeight,
  fontFamily,
  lineHeight,
  bgcolor,
  width,
  height,
  radius,
  jcontent,
  aitems,
  direction
}) => {
  return (
    <>
      <Styles.ContainerTextDefault
        isUppercase={isUppercase}
        fontSize={fontSize}
        bgtext={bgtext}
        as={as}
        paddingX={paddingX}
        paddingY={paddingY}
        margin={margin}
        marginX={marginX}
        marginY={marginY}
        fontWeight={fontWeight}
        fontFamily={fontFamily}
        lineHeight={lineHeight}
        bgcolor={bgcolor}
        width={width}
        height={height}
        radius={radius}
        jcontent={jcontent}
        aitems={aitems}
        direction={direction}
      >
        {children}
      </Styles.ContainerTextDefault>
    </>
  );
};

export { TextDefault };
