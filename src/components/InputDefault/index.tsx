import {
  ThemeColorsText,
  ThemeFlexText,
  ThemeSizeText
} from '@assets/styles/themes/ThemeType';
import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import { ReactNode } from 'react';

import * as Styles from './styles';

type InputDefaultType = {
  title?: string;
  children?: ReactNode;
  type?: 'search' | 'text' | 'number';
  placeholder?: string;
  isIconLeft?: boolean;
  isIconRight?: boolean;
  fontSize?: ThemeSizeText;
  bgtext?: ThemeColorsText;
  bgcolor?: ThemeColorsText;
  direction?: ThemeFlexText;
  jcontent?: ThemeFlexText;
  aitems?: ThemeFlexText;
  onChange?: () => void;
};

const InputDefault: React.FC<TypeDefault> = ({
  type,
  placeholder,
  fontSize,
  bgtext,
  bgcolor,
  direction,
  jcontent,
  aitems,
  onChange
}) => {
  return (
    <Styles.InputDefaultContainer
      bgtext={bgtext}
      bgcolor={bgcolor}
      fontSize={fontSize}
      direction={direction}
      jcontent={jcontent}
      aitems={aitems}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export { InputDefault };
