import { ReactNode } from 'react';
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
  marginTop?: ThemeSpaceTypeText;
  marginBottom?: ThemeSpaceTypeText;
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
  width?: ThemeSpaceTypeText;
  height?: ThemeSpaceTypeText;
  radius?: ThemeSpaceTypeText;
  isRadius?: ThemeSpaceTypeText;
  isRadiusTop?: boolean;
  isRadiusBottom?: boolean;
  radiusTopLeft?: ThemeSpaceTypeText;
  radiusTopRight?: ThemeSpaceTypeText;
  radiusBottomLeft?: ThemeSpaceTypeText;
  radiusBottomRight?: ThemeSpaceTypeText;

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
  left?: ThemeSpaceTypeText;
  right?: ThemeSpaceTypeText;
  top?: ThemeSpaceTypeText;
  bottom?: ThemeSpaceTypeText;
  zIndex?: TypeThemeNumberDefault;
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

  // isBorderDefault
  isBorderDefault?: boolean;
  borderColor?: ThemeColorsText;
  borderStyle?: 'solid' | 'dashed ';
  borderWidth?: TypeThemeNumberDefault;
  borderTopColor?: ThemeColorsText;
  borderTopStyle?: 'solid' | 'dashed ';
  borderTopWidth?: TypeThemeNumberDefault;
  borderRightColor?: ThemeColorsText;
  borderRightStyle?: 'solid' | 'dashed ';
  borderRightWidth?: TypeThemeNumberDefault;
  borderBottomColor?: ThemeColorsText;
  borderBottomStyle?: 'solid' | 'dashed ';
  borderBottomWidth?: TypeThemeNumberDefault;
  borderLeftColor?: ThemeColorsText;
  borderLeftStyle?: 'solid' | 'dashed ';
  borderLeftWidth?: TypeThemeNumberDefault;
  borderImageSource?: 'initial';
  borderImageSlice?: 'initial';
  borderImageWidth?: 'initial';
  borderImageOutset?: 'initial';
  borderImageRepeat?: 'initial';

  isPaddingCustom?: boolean;
  paddingDynamicX?: ThemeSpaceDinamicXText;
  paddingDynamicY?: ThemeSpaceDinamicYText;
  paddingStaticX?: ThemeSpaceTypeText;
  paddingStaticY?: ThemeSpaceTypeText;

  isMarginCustom?: boolean;
  marginDynamicX?: ThemeSpaceDinamicXText;
  marginDynamicY?: ThemeSpaceDinamicYText;
  marginStaticX?: ThemeSpaceTypeText;
  marginStaticY?: ThemeSpaceTypeText;
  start?: TypeThemeNumberDefault;
  end?: TypeThemeNumberDefault;
  span?: string;
  isGridColumnsDefault?: boolean;
  gridColumnsDefault?: (
    start: TypeThemeNumberDefault,
    span: string,
    end: TypeThemeNumberDefault
  ) => void;

  /* Font Dynmaic */
  fontSizeStatic?: ThemeSpaceTypeText;
  fontSizeDynamic?: '1' | '1.5' | '2' | '2.5' | '3' | '3.5' | '4' | '4.5' | '5';
};
