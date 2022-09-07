import { TypeDefault } from '@assets/styles/themes/TypeDefault';

import * as Styles from './styles';

const ContainerDefault: React.FC<TypeDefault> = ({
  children,
  bgcolor,
  bgtext,
  fontSize,
  as,
  direction,
  jcontent,
  aitems,
  padding,
  paddingX,
  paddingY,
  margin,
  marginX,
  marginY,
  ...props
}) => {
  return (
    <Styles.ContainerDefaultStyle
      as={as}
      bgtext={bgtext}
      bgcolor={bgcolor}
      fontSize={fontSize}
      direction={direction}
      jcontent={jcontent}
      aitems={aitems}
      padding={padding}
      paddingX={paddingX}
      paddingY={paddingY}
      margin={margin}
      marginX={marginX}
      marginY={marginY}
      isOverall={props.isOverall}
      isGridTemplateColumns={props.isGridTemplateColumns}
      isAfter={props.isAfter}
      isBefore={props.isBefore}
      position={props.position}
      left={props.left}
      right={props.right}
      top={props.height}
      bottom={props.height}
      zIndex={props.zIndex}
      isImgBackgroundGradient={props.isImgBackgroundGradient}
      isImgBackground={props.isImgBackground}
      imgBgPosition={props.imgBgPosition}
      imgBgcolor={props.imgBgcolor}
      imgBgSize={props.imgBgSize}
      imgBgUrl={props.imgBgUrl}
    >
      {children}
    </Styles.ContainerDefaultStyle>
  );
};

export { ContainerDefault };
