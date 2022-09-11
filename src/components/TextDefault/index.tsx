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
        isTextDecoretionLineThrough={props.isTextDecoretionLineThrough}
        isGridRow={props.isGridRow}
        gridRowStart={props.gridRowStart}
        gridRowStartSpan={props.gridRowStartSpan}
        gridRowEnd={props.gridRowEnd}
        gridRowEndSpan={props.gridRowEndSpan}
        isGridColumn={props.isGridColumn}
        gridColumnStart={props.gridColumnStart}
        gridColumnStartSpan={props.gridColumnStartSpan}
        gridColumnEnd={props.gridColumnEnd}
        gridColumnEndSpan={props.gridColumnEndSpan}
        paddingDynamicX={props.paddingDynamicX}
        paddingDynamicY={props.paddingDynamicY}
        paddingDynamic={props.paddingDynamic}
        paddingStatic={props.paddingStatic}
        paddingTop={props.paddingTop}
        paddingBottom={props.paddingBottom}
        paddingLeft={props.paddingLeft}
        paddingRight={props.paddingRight}
        marginDynamicX={props.marginDynamicX}
        marginDynamicY={props.marginDynamicY}
        marginDynamic={props.marginDynamic}
        marginStatic={props.marginStatic}
        marginTop={props.marginTop}
        marginBottom={props.marginBottom}
        marginLeft={props.marginLeft}
        marginRight={props.marginRight}
        fontSizeDynamic={props.fontSizeDynamic}
        fontSizeStatic={props.fontSizeStatic}
        borderDefault={props.borderDefault}
        borderDefaultTop={props.borderDefaultTop}
        borderDefaultRight={props.borderDefaultRight}
        borderDefaultBottom={props.borderDefaultBottom}
        borderDefaultLeft={props.borderDefaultLeft}
        fontSizeDefault={props.fontSizeDefault}
      >
        {children}
      </Styles.ContainerTextDefault>
    </>
  );
};

export { TextDefault };
