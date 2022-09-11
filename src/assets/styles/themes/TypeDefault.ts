import { ReactNode } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';
import { TypeTansFormDefault } from './functions/effectDefaults';
import {
  CategoryDefault,
  LinksTypeDefault,
  PLansTypeDefault,
  PlansTypeOptionDefault,
  ThemeColorsText,
  ThemeFlexText,
  ThemeFontFamilyDefaultText,
  ThemeLineHeightDefaultText,
  ThemeMediaText,
  ThemeSizeText,
  ThemeSpaceDinamicXText,
  ThemeSpaceDinamicYText,
  ThemeSpaceTypeText,
  TypeDynamicDefault,
  TypeSpaceNumber,
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
  repeat?: string;
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
  label?: string;
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
    | 'ul'
    | 'li'
    | 'img'
    | 'figure'
    | 'label'
    | 'strong';
  jcontent?: ThemeFlexText;
  aitems?: ThemeFlexText;
  direction?: ThemeFlexText;
  gap?: ThemeSpaceTypeText;
  columnGap?: ThemeSpaceTypeText;
  rowGap?: ThemeSpaceTypeText;
  isGridTemplateAreas?: boolean;
  isGridTemplateColumns?: boolean;
  isOverall?: boolean;
  gridArea?: string;
  isGridColumn?: boolean;
  gridColumnValueStart?: TypeThemeNumberDefault;
  gridColumnValueStartSpan?: TypeThemeNumberDefault;
  gridColumnValueEnd?: TypeThemeNumberDefault;
  gridColumnValueEndSpan?: TypeThemeNumberDefault;
  gridColumnSpan?: TypeThemeNumberDefault;
  gridColumnStartSpan?: 'span';
  gridColumnEndSpan?: 'span';
  gridColumnStart?: TypeThemeNumberDefault;
  gridColumnEnd?: TypeThemeNumberDefault;
  isGridRow?: boolean;
  gridRowValueStart?: TypeThemeNumberDefault;
  gridRowValueStartSpan?: TypeThemeNumberDefault;
  gridRowValueEnd?: TypeThemeNumberDefault;
  gridRowValueEndSpan?: TypeThemeNumberDefault;
  gridRowSpan?: TypeThemeNumberDefault;
  gridRowStartSpan?: 'span';
  gridRowStart?: TypeThemeNumberDefault;
  gridRowEndSpan?: 'span';
  gridRowEnd?: TypeThemeNumberDefault;
  gridTemplateColumnsSpan?: TypeThemeNumberDefault;
  gridTemplateColumns?: TypeThemeNumberDefault;
  gridTemplateRowsSpan?: TypeThemeNumberDefault;
  gridTemplateRows?: TypeThemeNumberDefault;
  padding?: ThemeSpaceTypeText;
  paddingX?: ThemeSpaceTypeText;
  paddingY?: ThemeSpaceTypeText;
  margin?: ThemeSpaceTypeText;
  // marginTop?: ThemeSpaceTypeText;
  // marginBottom?: ThemeSpaceTypeText;
  marginX?: ThemeSpaceTypeText;
  marginY?: ThemeSpaceTypeText;
  isGridRepeat?: TypeThemeNumberDefault;
  visibility?: 'visible' | 'hidden' | 'collapse' | 'initial' | 'inherit';
  fontFamily?: ThemeFontFamilyDefaultText;
  fontSize?: ThemeSizeText;
  iconSize?: ThemeSpaceTypeText;
  iconColor?: ThemeColorsText;
  iconBgcolor?: ThemeColorsText;
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
  radius?: ThemeSpaceTypeText;
  borderRadius?: TypeDynamicDefault;
  isRadius?: ThemeSpaceTypeText;
  isRadiusTop?: boolean;
  isRadiusBottom?: boolean;
  radiusTopLeft?: ThemeSpaceTypeText;
  radiusTopRight?: ThemeSpaceTypeText;
  radiusBottomLeft?: ThemeSpaceTypeText;
  radiusBottomRight?: ThemeSpaceTypeText;
  fontSizeDefault?: TypeDynamicDefault;
  fontSizeDynamicDefault?: TypeDynamicDefault;
  fontSizeStaticDefault?: TypeDynamicDefault;

  isBackgrondImgDefault?: (
    url: string,
    size: string,
    repeat: string,
    position: string
  ) => void;
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
  isActive?: boolean;
  isUppercase?: boolean;
  isImgRadius?: boolean;
  isBoxShadow?: boolean;
  isTextDecoretionLineThrough?: boolean;
  isBorder?: boolean;
  isOverflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
  isOpenNav?: boolean;
  isImgBackgroundGradient?: boolean;
  isImgBackground?: boolean;
  imgBgcolor?: ThemeColorsText;
  imgBgSize?: ThemeFlexText;
  imgBgPosition?: ThemeFlexText;
  imgBgUrl?: string;
  isPosition?: boolean;
  isAfter?: boolean;
  isTransform?: boolean;
  isAfterTransform?: boolean;
  afterPosition?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
  afterTop?: TypeThemeNumberDefault;
  afterBottom?: TypeThemeNumberDefault;
  afterLeft?: TypeThemeNumberDefault;
  afterRight?: TypeThemeNumberDefault;
  afterWidth?: ThemeSpaceTypeText;
  afterHeight?: ThemeSpaceTypeText;
  afterBackgroundColor?: ThemeColorsText;
  afterBackgroundImg?: string;
  afterClipPath?: boolean;
  afterZindex?: TypeThemeNumberDefault;
  isBefore?: boolean;
  isBeforeTransform?: boolean;
  beforePosition?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
  beforeTop?: TypeThemeNumberDefault;
  beforeBottom?: TypeThemeNumberDefault;
  beforeLeft?: TypeThemeNumberDefault;
  beforeRight?: TypeThemeNumberDefault;
  beforeWidth?: ThemeSpaceTypeText;
  beforeHeight?: ThemeSpaceTypeText;
  beforeBackgroundColor?: ThemeColorsText;
  beforeBackgroundImg?: string;
  beforeClipPath?: boolean;
  beforeZindex?: TypeThemeNumberDefault;
  position?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
  left?: TypeThemeNumberDefault;
  right?: TypeThemeNumberDefault;
  top?: TypeThemeNumberDefault;
  bottom?: TypeThemeNumberDefault;
  zIndex?: TypeThemeNumberDefault;
  width?: TypeThemeNumberDefault;
  height?: TypeThemeNumberDefault;
  backgroundColor?: ThemeColorsText;
  backgroundImg?: string;
  clipPath?: boolean;
  transformX?: boolean;
  transformY?: boolean;
  translate?: TypeThemeNumberDefault;
  media?: ThemeMediaText;
  flexWrap?: ThemeFlexText;
  flexShrink?: ThemeFlexText;
  alignSelf?: ThemeFlexText;
  flexBasis?: ThemeSpaceTypeText;
  flexGrow?: ThemeFlexText;
  textAling?: ThemeFlexText;
  btnTitle?: string;
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

  isPaddingCustomX?: boolean;
  isPaddingCustomY?: boolean;
  psth?: number;
  pstw?: number;
  pdvh?: number;
  pdvw?: number;
  min?: number;
  max?: number;
  isHeightR?: boolean;
  isHeightP?: boolean;
  isHeightPX?: boolean;
  isHeightVW?: boolean;
  isHeightVH?: boolean;
  isHeight?:
    | 'isHeightR'
    | 'isHeightP'
    | 'isHeightPX'
    | 'isHeightVW'
    | 'isHeightVH';
  heightR?: TypeThemeNumberDefault;
  heightP?: TypeThemeNumberDefault;
  heightVW?: TypeThemeNumberDefault;
  heightVH?: TypeThemeNumberDefault;
  heightPX?: TypeThemeNumberDefault;
  heightCalc?: TypeThemeNumberDefault;

  isWidth?: 'isWidthR' | 'isWidthP' | 'isWidthPX' | 'isWidthVW' | 'isWidthVH';
  widthR?: TypeThemeNumberDefault;
  widthP?: TypeThemeNumberDefault;
  widthPX?: TypeThemeNumberDefault;
  widthVW?: TypeThemeNumberDefault;
  widthVH?: TypeThemeNumberDefault;
  widthCalc?: TypeThemeNumberDefault;

  // isPaddingCustom?: boolean;
  // paddingDynamicX?: ThemeSpaceDinamicXText;
  // paddingDynamicY?: ThemeSpaceDinamicYText;
  // paddingStaticX?: ThemeSpaceTypeText;
  // paddingStaticY?: ThemeSpaceTypeText;

  isMarginCustom?: boolean;
  marginDynamicX?: ThemeSpaceDinamicXText;
  marginDynamicY?: ThemeSpaceDinamicYText;
  marginStaticX?: ThemeSpaceTypeText;
  marginStaticY?: ThemeSpaceTypeText;
  start?: TypeThemeNumberDefault;
  end?: TypeThemeNumberDefault;
  span?: string;
  isGridColumnsDefault?: boolean;
  gridColumnsDefault?: () => FlattenSimpleInterpolation;
  gridRows?: () => FlattenSimpleInterpolation;
  parOuImparOption?: 'par' | 'impa';
  parOuImpar?: (
    valueStatic?: TypeThemeNumberDefault,
    valueDynamic?: TypeThemeNumberDefault,
    borderSize?: TypeThemeNumberDefault,
    borderColor?: ThemeColorsText,
    option?: 'par' | 'impa'
  ) => FlattenSimpleInterpolation;
  positionDefault?: (
    position?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky',
    zindex?: TypeThemeNumberDefault,
    top?: TypeThemeNumberDefault,
    bottom?: TypeThemeNumberDefault,
    left?: TypeThemeNumberDefault,
    right?: TypeThemeNumberDefault,
    width?: TypeThemeNumberDefault,
    height?: TypeThemeNumberDefault,
    backgroundImg?: string,
    backgroundColor?: ThemeColorsText,
    clipPath?: boolean,
    transformX?: boolean,
    transformY?: boolean,
    translate?: TypeThemeNumberDefault
  ) => FlattenSimpleInterpolation;

  beforeDefault?: (
    position?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky',
    zindex?: TypeThemeNumberDefault,
    top?: TypeThemeNumberDefault,
    bottom?: TypeThemeNumberDefault,
    left?: TypeThemeNumberDefault,
    width?: TypeThemeNumberDefault,
    height?: TypeThemeNumberDefault,
    backgroundImg?: string,
    backgroundColor?: ThemeColorsText,
    clipPath?: boolean
  ) => FlattenSimpleInterpolation;

  afterDefault?: (
    position?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky',
    zindex?: TypeThemeNumberDefault,
    top?: TypeThemeNumberDefault,
    bottom?: TypeThemeNumberDefault,
    left?: TypeThemeNumberDefault,
    width?: TypeThemeNumberDefault,
    height?: TypeThemeNumberDefault,
    backgroundImg?: string,
    backgroundColor?: ThemeColorsText,
    clipPath?: boolean
  ) => FlattenSimpleInterpolation;

  backgroundImgDefault?: () => FlattenSimpleInterpolation;
  fcTransformDefault?: () => FlattenSimpleInterpolation;

  /* Padding Dynmaic */
  pdx?: TypeSpaceNumber;
  pdy?: TypeSpaceNumber;
  pdt?: TypeSpaceNumber;
  pdb?: TypeSpaceNumber;
  pdl?: TypeSpaceNumber;
  pdr?: TypeSpaceNumber;
  valueStatic?: TypeSpaceNumber;
  valueDynamic?: TypeSpaceNumber;
  valueStaticW?: TypeSpaceNumber;
  valueDynamicW?: TypeSpaceNumber;
  valueStaticH?: TypeSpaceNumber;
  valueDynamiH?: TypeSpaceNumber;
  effectDefault?: (
    transform?: TypeTansFormDefault,
    property?:
      | 'none'
      | 'all'
      | 'height'
      | 'color'
      | 'background'
      | 'img'
      | 'inherit'
      | 'initial'
      | 'revert'
      | 'revert-layer'
      | 'unset',
    duration?: TypeThemeNumberDefault,
    timingFunction?:
      | 'ease'
      | 'ease-in'
      | 'ease-out'
      | 'ease-in-out'
      | 'linear'
      | 'step-start'
      | 'step-end'
      | 'inherit'
      | 'initial'
      | 'revert'
      | 'revert-layer'
      | 'unset',
    delay?: TypeThemeNumberDefault
  ) => FlattenSimpleInterpolation;
  paddingDynamicX?: (
    valueStatic: TypeSpaceNumber,
    valueDinamic: TypeSpaceNumber
  ) => FlattenSimpleInterpolation;
  paddingDynamicY?: (
    valueStatic: TypeSpaceNumber,
    valueDynamic: TypeSpaceNumber
  ) => FlattenSimpleInterpolation;
  paddingDynamic?: (
    valueStaticH: TypeSpaceNumber,
    valueDynamiH: TypeSpaceNumber,
    valueStaticW: TypeSpaceNumber,
    valueDynamiW: TypeSpaceNumber
  ) => FlattenSimpleInterpolation;
  paddingStatic?: (
    valueStaticH: TypeSpaceNumber,
    valueStaticW: TypeSpaceNumber
  ) => FlattenSimpleInterpolation;
  paddingStaticX?: (valueStatic: TypeSpaceNumber) => FlattenSimpleInterpolation;
  paddingStaticY?: (valueStatic: TypeSpaceNumber) => FlattenSimpleInterpolation;
  paddingTop?: TypeSpaceNumber;
  paddingBottom?: TypeSpaceNumber;
  paddingLeft?: TypeSpaceNumber;
  paddingRight?: TypeSpaceNumber;

  marginDynamic?: (
    valueStaticH: TypeSpaceNumber,
    valueDynamiH: TypeSpaceNumber,
    valueStaticW: TypeSpaceNumber,
    valueDynamiW: TypeSpaceNumber
  ) => FlattenSimpleInterpolation;
  marginStatic?: (
    valueStaticH: TypeSpaceNumber,
    valueStaticW: TypeSpaceNumber
  ) => FlattenSimpleInterpolation;

  marginTop?: TypeSpaceNumber;
  marginBottom?: TypeSpaceNumber;
  marginLeft?: TypeSpaceNumber;
  marginRight?: TypeSpaceNumber;

  fontSizeDynamic?: (
    valueStatic: TypeSpaceNumber,
    valueDynamic: TypeSpaceNumber
  ) => FlattenSimpleInterpolation;

  // isBorderDefault
  isBorderDefault?: boolean;
  borderWidth?: TypeSpaceNumber;
  borderStyle?: 'solid' | 'dashed ';
  borderColor?: ThemeColorsText;
  borderTopWidth?: TypeSpaceNumber;
  borderTopStyle?: 'solid' | 'dashed ';
  borderTopColor?: ThemeColorsText;
  borderLeftWidth?: TypeSpaceNumber;
  borderLeftStyle?: 'solid' | 'dashed ';
  borderLeftColor?: ThemeColorsText;
  borderBottomWidth?: TypeSpaceNumber;
  borderBottomStyle?: 'solid' | 'dashed ';
  borderBottomColor?: ThemeColorsText;
  borderRightWidth?: TypeSpaceNumber;
  borderRightStyle?: 'solid' | 'dashed ';
  borderRightColor?: ThemeColorsText;
  borderImageSource?: 'initial';
  borderImageSlice?: 'initial';
  borderImageWidth?: 'initial';
  borderImageOutset?: 'initial';
  borderImageRepeat?: 'initial';

  borderDefault?: (
    borderWidth: TypeSpaceNumber,
    borderStyle: 'solid' | 'dashed ',
    borderColor: ThemeColorsText
  ) => FlattenSimpleInterpolation;

  borderDefaultTop?: (
    borderTopWidth: TypeSpaceNumber,
    borderTopStyle: 'solid' | 'dashed ',
    borderTopColor: ThemeColorsText
  ) => FlattenSimpleInterpolation;

  borderDefaultRight?: (
    borderRightWidth: TypeSpaceNumber,
    borderRightStyle: 'solid' | 'dashed ',
    borderRightColor: ThemeColorsText
  ) => FlattenSimpleInterpolation;

  borderDefaultBottom?: (
    borderBottomWidth: TypeSpaceNumber,
    borderBottomStyle: 'solid' | 'dashed ',
    borderBottomColor: ThemeColorsText
  ) => FlattenSimpleInterpolation;

  borderDefaultLeft?: (
    borderLeftWidth: TypeSpaceNumber,
    borderLeftStyle: 'solid' | 'dashed ',
    borderLeftColor: ThemeColorsText
  ) => FlattenSimpleInterpolation;

  /* Padding Static */
  psx?: TypeSpaceNumber;
  psy?: TypeSpaceNumber;
  pst?: TypeSpaceNumber;
  psb?: TypeSpaceNumber;
  psl?: TypeSpaceNumber;
  psr?: TypeSpaceNumber;

  /* Margin Dynmaic */
  mdx?: TypeSpaceNumber;
  mdy?: TypeSpaceNumber;
  mdt?: TypeSpaceNumber;
  mdb?: TypeSpaceNumber;
  mdl?: TypeSpaceNumber;
  mdr?: TypeSpaceNumber;

  /* Margin Static */
  msx?: TypeSpaceNumber;
  msy?: TypeSpaceNumber;
  mst?: TypeSpaceNumber;
  msb?: TypeSpaceNumber;
  msl?: TypeSpaceNumber;
  msr?: TypeSpaceNumber;

  /* Font Dynmaic */
  fsd?: TypeSpaceNumber;
  fsdcalc?: TypeSpaceNumber;
  /* Font Static */
  fss?: TypeSpaceNumber;

  /* Font Dynmaic */
  // fontSizeDynamic?: TypeSpaceDinamicText;
  /* Font Static */
  isPar?: boolean;
  isImpar?: boolean;
  fontSizeStatic?: TypeSpaceNumber;
};
