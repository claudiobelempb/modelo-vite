import { TypeDefault } from '@assets/styles/themes/TypeDefault';

import * as Styles from './styles';

const ContainerDefault: React.FC<TypeDefault> = ({
  children,
  bgcolor,
  bgtext,
  fontSize,
  as = 'section',
  direction,
  jcontent,
  aitems,
  padding,
  paddingX,
  paddingY,
  margin,
  marginX,
  marginY
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
    >
      {children}
    </Styles.ContainerDefaultStyle>
  );
};

export { ContainerDefault };
