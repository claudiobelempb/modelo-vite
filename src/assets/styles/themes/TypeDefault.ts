import { ReactNode } from 'react';
import {
  ThemeColorsText,
  ThemeFlexText,
  ThemeFontFamilyDefaultText,
  ThemeLineHeightDefaultText,
  ThemeMediaText,
  ThemeSizeText,
  ThemeSpaceTypeText
} from './ThemeType';

export type TypeDefault = {
  placeholder?: string;
  onChange?: () => void;
  onClick?: () => void;
  target?: '_blank' | '_self';
  href?: string;
  isAfter?: boolean;
  isIconLeft?: boolean;
  isIconRight?: boolean;
  isFlex?: boolean;
  title?: string;
  type?: 'text' | 'image' | 'search' | 'text' | 'number';
  text?: string;
  src?: string;
  xsmall?: ThemeMediaText;
  small?: boolean;
  medium?: ThemeMediaText;
  large?: ThemeMediaText;
  xlarge?: ThemeMediaText;
  xxlarge?: ThemeMediaText;
  children?: ReactNode;
  bgcolor?: ThemeColorsText;
  bgtext?: ThemeColorsText;

  as?:
    | 'header'
    | 'main'
    | 'footer'
    | 'section'
    | 'article'
    | 'aside'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'span'
    | 'small'
    | 'form'
    | 'strong';
  jcontent?: ThemeFlexText;
  aitems?: ThemeFlexText;
  direction?: ThemeFlexText;
  gap?: ThemeSpaceTypeText;
  padding?: ThemeSpaceTypeText;
  paddingX?: ThemeSpaceTypeText;
  paddingY?: ThemeSpaceTypeText;
  margin?: ThemeSpaceTypeText;
  marginX?: ThemeSpaceTypeText;
  marginY?: ThemeSpaceTypeText;
  gridRepeat?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16;
  isVisibility?: ThemeMediaText;
  visibility?: 'visible' | 'hidden' | 'collapse' | 'initial' | 'inherit';
  fontFamily?: ThemeFontFamilyDefaultText;
  fontSize?: ThemeSizeText;
  lineHeight?: ThemeLineHeightDefaultText;
  fontWeight?:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | 'bold'
    | 'extraBold';
  isDisplay?: ThemeMediaText;
  width?: ThemeSpaceTypeText;
  height?: ThemeSpaceTypeText;
  radius?: ThemeSpaceTypeText;
  isUppercase?: boolean;
  isPosition?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
  left?: ThemeSpaceTypeText;
  right?: ThemeSpaceTypeText;
  top?: ThemeSpaceTypeText;
  bottom?: ThemeSpaceTypeText;
  isOverflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
  media?: ThemeMediaText;
  zIndex?: number;
  isOpenNav?: boolean;
  links?: [
    {
      children: string;
      href: string;
      target: '_blank' | '_self';
    }
  ];
};
