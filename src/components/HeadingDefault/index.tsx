import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import * as Styled from './styles';

const HeadingDefault: React.FC<TypeDefault> = ({
  children,
  bgcolor,
  bgtext,
  as = 'h1',
  fontSize = 'base48',
  isUppercase = false,
  fontFamily,
  fontWeight,
  lineHeight
}) => {
  return (
    <Styled.HeadingDefaultContainer
      fontSize={fontSize}
      as={as}
      bgcolor={bgcolor}
      bgtext={bgtext}
      isUppercase={isUppercase}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
    >
      {children}
    </Styled.HeadingDefaultContainer>
  );
};

export { HeadingDefault };
