import { ReactNode } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';
import {
  CategoryDefault,
  LinksTypeDefault,
  PLansTypeDefault,
  PlansTypeOptionDefault,
  ThemeColorsText,
  ThemeMediaText,
  TypeThemeNumberDefault
} from './ThemeType';

export type TypeDefault = {
  placeholder?: string;
  onChange?: () => void;
  onClick?: () => void;
  onSubmit?: () => void;
  target?: '_blank' | '_self';
  href?: string;
  title?: string;
  subTitle?: string;
  description?: string;
  label?: string;
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
  alt?: string;
  url?: string;
  size?: string;
  xsmall?: ThemeMediaText;
  small?: boolean;
  medium?: ThemeMediaText;
  large?: ThemeMediaText;
  xlarge?: ThemeMediaText;
  xxlarge?: ThemeMediaText;
  children?: ReactNode;

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
    | 'ul'
    | 'li'
    | 'img'
    | 'figure'
    | 'label'
    | 'strong';
  isGridRepeat?: TypeThemeNumberDefault;
  visibility?: 'visible' | 'hidden' | 'collapse' | 'initial' | 'inherit';

  isIconLeft?: boolean;
  isIconRight?: boolean;

  isActive?: boolean;

  isBorder?: boolean;
  isOverflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
  isOpenNav?: boolean;

  categories?: CategoryDefault[];
  category?: string;
  price?: number;
  priceCut?: number;
  lowerPrice?: number;
  discount?: number;
  isCheck?: boolean;
  listPlans?: PLansTypeDefault[];
  plansOptions?: PlansTypeOptionDefault[];
  id?: number;
  links?: LinksTypeDefault[];
  model?: 1 | 2 | 3 | 4 | 5;
  date?: string;

  isGridColumnsDefault?: boolean;
  parOuImparOption?: 'par' | 'impa';
  parOuImpar?: (
    valueStatic?: TypeThemeNumberDefault,
    valueDynamic?: TypeThemeNumberDefault,
    borderSize?: TypeThemeNumberDefault,
    borderColor?: ThemeColorsText,
    option?: 'par' | 'impa'
  ) => FlattenSimpleInterpolation;
  positionDefault?: () => FlattenSimpleInterpolation;
  beforeDefault?: () => FlattenSimpleInterpolation;
  afterDefault?: () => FlattenSimpleInterpolation;
  /* Padding Dynamic */
  effectDefault?: () => FlattenSimpleInterpolation;
  effectHoverDefault?: () => FlattenSimpleInterpolation;
  effectHoverBeforeDefault?: () => FlattenSimpleInterpolation;
  effectHoverAfterDefault?: () => FlattenSimpleInterpolation;
  backgroundImgDefault?: () => FlattenSimpleInterpolation;
  fcTransformDefault?: () => FlattenSimpleInterpolation;
  /* Padding Dynamic */
  paddingDefault?: () => FlattenSimpleInterpolation;
  paddingStaticDefault?: () => FlattenSimpleInterpolation;
  paddingStaticXDefault?: () => FlattenSimpleInterpolation;
  paddingStaticYDefault?: () => FlattenSimpleInterpolation;
  paddingDynamicDefault?: () => FlattenSimpleInterpolation;
  paddingDynamicXDefault?: () => FlattenSimpleInterpolation;
  paddingDynamicYDefault?: () => FlattenSimpleInterpolation;
  paddingTopDefault?: () => FlattenSimpleInterpolation;
  paddingRightDefault?: () => FlattenSimpleInterpolation;
  paddingBottomDefault?: () => FlattenSimpleInterpolation;
  paddingLeftDefault?: () => FlattenSimpleInterpolation;
  /* Margin DEFAULT*/
  marginDefault?: () => FlattenSimpleInterpolation;
  marginStaticDefault?: () => FlattenSimpleInterpolation;
  marginStaticXDefault?: () => FlattenSimpleInterpolation;
  marginStaticYDefault?: () => FlattenSimpleInterpolation;
  marginDynamicDefault?: () => FlattenSimpleInterpolation;
  marginDynamicXDefault?: () => FlattenSimpleInterpolation;
  marginDynamicYDefault?: () => FlattenSimpleInterpolation;
  marginTopDefault?: () => FlattenSimpleInterpolation;
  marginRightDefault?: () => FlattenSimpleInterpolation;
  marginBottomDefault?: () => FlattenSimpleInterpolation;
  marginLeftDefault?: () => FlattenSimpleInterpolation;

  /*FONT DEFAULT */
  fontSizeStaticDefault?: () => FlattenSimpleInterpolation;
  fontSizeDynamicDefault?: () => FlattenSimpleInterpolation;
  textTransformDefault?: () => FlattenSimpleInterpolation;
  textAlignDefault?: () => FlattenSimpleInterpolation;
  textTitleDefault?: () => FlattenSimpleInterpolation;
  textParagraphDefault?: () => FlattenSimpleInterpolation;
  fontFamilyDefault?: () => FlattenSimpleInterpolation;
  fontStyleDefault?: () => FlattenSimpleInterpolation;
  fontLineHeightDefault?: () => FlattenSimpleInterpolation;
  textDecoretionlineThrough?: () => FlattenSimpleInterpolation;
  /*HEIGHT DEFAULT */
  heightStaticDefault?: () => FlattenSimpleInterpolation;
  heightDynamicDefault?: () => FlattenSimpleInterpolation;
  /*WIDTH DEFAULT */
  widthStaticDefault?: () => FlattenSimpleInterpolation;
  widthDynamicDefault?: () => FlattenSimpleInterpolation;

  /*GRID DEFAULT */
  gridTemplateColumnsStaticDefault?: () => FlattenSimpleInterpolation;

  /*BORDER DEFAULT */
  borderDefault?: () => FlattenSimpleInterpolation;
  borderTopDefault?: () => FlattenSimpleInterpolation;
  borderRightDefault?: () => FlattenSimpleInterpolation;
  borderLeftDefault?: () => FlattenSimpleInterpolation;
  borderBottomDefault?: () => FlattenSimpleInterpolation;

  /*BORDER RADIUS DEFAULT */
  borderRadiusDefault?: () => FlattenSimpleInterpolation;
  borderRadiusTopRightDefault?: () => FlattenSimpleInterpolation;
  borderRadiusTopLeftDefault?: () => FlattenSimpleInterpolation;
  borderRadiusBottomRightDefault?: () => FlattenSimpleInterpolation;
  borderRadiusBottomLeftDefault?: () => FlattenSimpleInterpolation;

  flexDefault?: () => FlattenSimpleInterpolation;
  gridDefault?: () => FlattenSimpleInterpolation;
  gridTemplateColumnsDefault?: () => FlattenSimpleInterpolation;
  gridTemplateRowsDefault?: () => FlattenSimpleInterpolation;
  gridColumnDefault?: () => FlattenSimpleInterpolation;
  gridRowDefault?: () => FlattenSimpleInterpolation;
  overallDefault?: () => FlattenSimpleInterpolation;
  /* FLEX DEFAULT */
  flexDirectionDefault?: () => FlattenSimpleInterpolation;
  alignSelfDefault?: () => FlattenSimpleInterpolation;
  flexGapDefault?: () => FlattenSimpleInterpolation;
  justifyContentDefault?: () => FlattenSimpleInterpolation;
  alignItemsDefault?: () => FlattenSimpleInterpolation;
  flexBasisDefault?: () => FlattenSimpleInterpolation;
  flexGrowDefault?: () => FlattenSimpleInterpolation;
  flexWrapDefault?: () => FlattenSimpleInterpolation;

  backgroundColorDefault?: () => FlattenSimpleInterpolation;
  textColorDefault?: () => FlattenSimpleInterpolation;
  textHoverDefault?: () => FlattenSimpleInterpolation;
  backgroundLinearGradientDefault?: () => FlattenSimpleInterpolation;
  iconDefault?: () => FlattenSimpleInterpolation;
  /* UTILS DEFAULT */
  zIndexDefault?: () => FlattenSimpleInterpolation;
  imparDefault?: () => FlattenSimpleInterpolation;
  parDefault?: () => FlattenSimpleInterpolation;
  boxShadowDefault?: () => FlattenSimpleInterpolation;
  displayDefault?: () => FlattenSimpleInterpolation;
  overflowDefault?: () => FlattenSimpleInterpolation;
  visibilityDefault?: () => FlattenSimpleInterpolation;
};
