import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import * as Styles from './styles';

const TextDefault: React.FC<TypeDefault> = ({ children, ...props }) => {
  return (
    <>
      <Styles.ContainerTextDefault
        isUppercase={props.isUppercase}
        isBorder={props.isBorder}
        fontSize={props.fontSize}
        bgtext={props.bgtext}
        as={props.as}
        padding={props.padding}
        paddingX={props.paddingX}
        paddingY={props.paddingY}
        margin={props.margin}
        marginTop={props.marginTop}
        marginBottom={props.marginBottom}
        marginX={props.marginX}
        marginY={props.marginY}
        fontWeight={props.fontWeight}
        fontFamily={props.fontFamily}
        lineHeight={props.lineHeight}
        bgcolor={props.bgcolor}
        textcolor={props.textcolor}
        width={props.width}
        height={props.height}
        radius={props.radius}
        jcontent={props.jcontent}
        aitems={props.aitems}
        direction={props.direction}
        textAling={props.textAling}
        fontStyle={props.fontStyle}
        radiusTopLeft={props.radiusTopLeft}
        radiusTopRight={props.radiusTopRight}
        radiusBottomLeft={props.radiusBottomLeft}
        radiusBottomRight={props.radiusBottomRight}
        flexWrap={props.flexWrap}
        flexShrink={props.flexShrink}
        flexGrow={props.flexGrow}
        alignSelf={props.alignSelf}
        isPosition={props.isPosition}
        top={props.top}
        bottom={props.bottom}
        left={props.left}
        right={props.right}
        border={props.border}
        gap={props.gap}
      >
        {children}
      </Styles.ContainerTextDefault>
    </>
  );
};

export { TextDefault };
