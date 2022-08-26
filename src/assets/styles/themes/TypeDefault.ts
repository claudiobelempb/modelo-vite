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

  title?: string;
  subTitle?: string;
  description?: string;
  type?:
    | 'text'
    | 'image'
    | 'search'
    | 'text'
    | 'number'
    | 'password'
    | 'email'
    | 'submit'
    | 'reset';
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
  textcolor?: ThemeColorsText;
  bgtext?: ThemeColorsText;
  bgHover?: ThemeColorsText;
  textHover?: ThemeColorsText;
  bgInput?: ThemeColorsText;
  textInput?: ThemeColorsText;
  colorFocus?: ThemeColorsText;
  border?: ThemeColorsText;
  as?:
    | 'header'
    | 'main'
    | 'footer'
    | 'section'
    | 'article'
    | 'aside'
    | 'nav'
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
    | 'img'
    | 'figure'
    | 'strong';
  jcontent?: ThemeFlexText;
  aitems?: ThemeFlexText;
  direction?: ThemeFlexText;
  gap?: ThemeSpaceTypeText;
  padding?: ThemeSpaceTypeText;
  paddingX?: ThemeSpaceTypeText;
  paddingY?: ThemeSpaceTypeText;
  margin?: ThemeSpaceTypeText;
  marginTop?: ThemeSpaceTypeText;
  marginBottom?: ThemeSpaceTypeText;
  marginX?: ThemeSpaceTypeText;
  marginY?: ThemeSpaceTypeText;

  isGridRepeat?:
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
  visibility?: 'visible' | 'hidden' | 'collapse' | 'initial' | 'inherit';
  fontFamily?: ThemeFontFamilyDefaultText;
  fontSize?: ThemeSizeText;
  fontStyle?: 'normal' | 'italic' | 'oblique' | 'initial' | 'inherit';
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
  width?: ThemeSpaceTypeText;
  height?: ThemeSpaceTypeText;
  radius?: ThemeSpaceTypeText;
  radiusTopLeft?: ThemeSpaceTypeText;
  radiusTopRight?: ThemeSpaceTypeText;
  radiusBottomLeft?: ThemeSpaceTypeText;
  radiusBottomRight?: ThemeSpaceTypeText;
  isAfter?: boolean;
  isIconLeft?: boolean;
  isIconRight?: boolean;
  isFlex?: boolean;
  isHover?: boolean;
  isVisibility?: ThemeMediaText;
  isDisplay?: ThemeMediaText;
  display?:
    | 'flex'
    | 'grid'
    | 'block'
    | 'inline-block'
    | 'inline-flex'
    | 'inline-grid'
    | 'none'
    | 'initial'
    | 'inherit'
    | 'unset';
  isUppercase?: boolean;
  isImgRadius?: boolean;
  isBoxShadow?: boolean;
  isBorder?: boolean;
  isPosition?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
  isOverflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
  isOpenNav?: boolean;
  left?: ThemeSpaceTypeText;
  right?: ThemeSpaceTypeText;
  top?: ThemeSpaceTypeText;
  bottom?: ThemeSpaceTypeText;
  media?: ThemeMediaText;
  zIndex?: number;
  flexWrap?: ThemeFlexText;
  flexShrink?: ThemeFlexText;
  alignSelf?: ThemeFlexText;
  flexBasis?: ThemeFlexText;
  flexGrow?: ThemeFlexText;
  textAling?: ThemeFlexText;
  links?: [
    {
      children: string;
      href: string;
      target: '_blank' | '_self';
    }
  ];
};
