import { css } from 'styled-components';

export const THEME_LINE_HEIGHT_DEFAULT = {
  base65: '65%',
  base130: '130%',
  base160: '160%'
};

export const THEME_FONT_FAMILY_DEFAULT = {
  roboto: '"Roboto"',
  baloo: '"Baloo 2"',
  secondary: '"secondary"'
};

export const THEME_FLEX_DEFAULT = {
  stretch: 'stretch',
  baseline: 'baseline',
  auto: 'auto',
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  center: 'center',
  spaceBetween: 'space-between',
  spaceAround: 'space-around',
  spaceEvenly: 'space-evenly',
  start: 'start',
  end: 'end',
  left: 'left',
  right: 'right',
  row: 'row',
  rowReverse: 'row-reverse',
  column: 'column',
  columnReverse: 'column-reverse',
  nowRap: 'nowrap',
  wrap: 'wrap',
  wrapReverse: 'wrap-reverse'
};

export const THEME_COLORS_DEFAULT = {
  green: 'green',
  greenDark: '#FFFFFF',
  greenLight: '#FFFFFF',
  blue: 'blue',
  blueDark: '#FFFFFF',
  blueLight: '#FFFFFF',
  red: 'red',
  redDark: '#FFFFFF',
  redLight: '#FFFFFF',
  gray: '#FFFFFF',
  grayDark: '#FFFFFF',
  grayLight: '#FFFFFF',
  white: '#FFFFFF',
  black: '#000000',
  yellow: '#DBAC2C',
  yellowDark: '#C47F17',
  yellowLight: '#F1E9C9',
  purple: '#8047F8',
  purpleDark: '#4B2995',
  purpleLight: '#EBE5F9',
  title: '#272221',
  subTitle: '#403937',
  text: '#574F4D',
  hover: '#D7D5D5',
  button: '#E6E5E5',
  input: '#EDEDED',
  background: '#FAFAFA',
  label: '#8D8686',
  card: '#F3F2F2'
};

export const THEME_SIZE_DEFAULT = {
  base5: '0.5rem',
  base8: '0.8rem',
  base10: '1rem',
  base12: '1.2rem',
  base14: '1.4rem',
  base16: '1.6rem',
  base18: '1.8rem',
  base20: '2rem',
  base24: '2.4rem',
  base32: '3.2rem',
  base36: '3.6rem',
  base48: '4.8rem',
  base54: '5.4rem',
  base56: '5.6rem',
  base64: '6.4rem',
  base81: '8.1rem'
};

export const THEME_SPACE_DEFAULT = {
  base5: '0.5rem',
  base8: '0.8em',
  base10: '1rem',
  base12: '1.2rem',
  base14: '1.4rem',
  base16: '1.6rem',
  base18: '1.8rem',
  base20: '2rem',
  base24: '2.4rem',
  base32: '3.2rem',
  base36: '3.6rem',
  base48: '4.8rem',
  base54: '5.4rem',
  base56: '5.6rem',
  base64: '6.4rem',
  base81: '8.1rem',
  base100: '100%',
  base100vh: '100vh',
  base100vw: '100vw'
};

export const THEME_MEDIA_DEFAULT = {
  xsmall: '(max-width: 320px)',
  smamll: '(min-width: 320px) and (max-width: 576px)',
  medium: '(min-width: 576px) and (max-width: 768px)',
  large: '(min-width: 768px) and (max-width: 992px)',
  xlarge: '(min-width: 992px) and (max-width: 1200px)',
  xxlarge: '(min-width: 1200px) and (max-width: 1400px)',
  media: 'media'
};

export type ThemeFontFamilyDefaultText = 'roboto' | 'baloo' | 'secondary';
export type ThemeLineHeightDefaultText = 'base65' | 'base130' | 'base160';

export type ThemeFlexText =
  | 'stretch'
  | 'baseline'
  | 'auto'
  | 'flexStart'
  | 'flexEnd'
  | 'center'
  | 'spaceBetween'
  | 'spaceAround'
  | 'spaceEvenly'
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'row'
  | 'rowReverse'
  | 'column'
  | 'columnReverse'
  | 'nowRap'
  | 'wrap'
  | 'wrapReverse';

export type ThemeSizeText =
  | 'base5'
  | 'base8'
  | 'base10'
  | 'base12'
  | 'base14'
  | 'base16'
  | 'base18'
  | 'base20'
  | 'base24'
  | 'base32'
  | 'base36'
  | 'base48'
  | 'base54'
  | 'base56'
  | 'base64'
  | 'base81';

export type ThemeSpaceTypeText =
  | 'base5'
  | 'base8'
  | 'base10'
  | 'base12'
  | 'base14'
  | 'base16'
  | 'base18'
  | 'base20'
  | 'base24'
  | 'base32'
  | 'base36'
  | 'base48'
  | 'base54'
  | 'base56'
  | 'base64'
  | 'base81'
  | 'base100'
  | 'base100vh'
  | 'base100vw';

export type ThemeColorsText =
  | 'green'
  | 'greenDark'
  | 'greenLight'
  | 'blue'
  | 'blueDark'
  | 'blueLight'
  | 'red'
  | 'redDark'
  | 'redLight'
  | 'gray'
  | 'grayDark'
  | 'grayLight'
  | 'white'
  | 'black'
  | 'yellow'
  | 'yellowDark'
  | 'yellowLight'
  | 'purple'
  | 'purpleDark'
  | 'purpleLight'
  | 'title'
  | 'subTitle'
  | 'text'
  | 'hover'
  | 'button'
  | 'input'
  | 'background'
  | 'label'
  | 'card';

export type ThemeMediaText =
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
  | 'media';

export type ThemeFlexType = {
  stretch: string;
  baseline: string;
  auto: string;
  flexStart: string;
  flexEnd: string;
  center: string;
  spaceBetween: string;
  spaceAround: string;
  spaceEvenly: string;
  start: string;
  end: string;
  left: string;
  right: string;
  row: string;
  rowReverse: string;
  column: string;
  columnReverse: string;
  nowRap: string;
  wrap: string;
  wrapReverse: string;
};

export type ThemeColors = {
  green?: string;
  greenDark?: string;
  greenLight?: string;
  blue?: string;
  blueDark?: string;
  blueLight?: string;
  red?: string;
  redDark?: string;
  redLight?: string;
  gray?: string;
  grayDark?: string;
  grayLight?: string;
  white?: string;
  black?: string;
  yellow?: string;
  yellowDark?: string;
  yellowLight?: string;
  purple?: string;
  purpleDark?: string;
  purpleLight?: string;
  title?: string;
  subTitle?: string;
  text?: string;
  hover?: string;
  button?: string;
  input?: string;
  background?: string;
  label?: string;
  card?: string;
};

export type ThemeSize = {
  base5?: string;
  base8?: string;
  base14?: string;
  base16?: string;
  base18?: string;
  base20?: string;
  base24?: string;
  base32?: string;
  base36?: string;
  base48?: string;
  base54?: string;
  base81?: string;
};

export type ThemeSpaceType = {
  base5?: string;
  base8?: string;
  base10?: string;
  base12?: string;
  base14?: string;
  base16?: string;
  base18?: string;
  base20?: string;
  base24?: string;
  base32?: string;
  base36?: string;
  base48?: string;
  base54?: string;
  base81?: string;
};

export type ThemeMediaType = {
  xsmall?: string;
  small?: string;
  medium?: string;
  large?: string;
  xlarge?: string;
  xxlarge?: string;
  media?: string;
};

export type ThemeFontFamilyDefaultType = {
  roboto: string;
  baloo: string;
  secondary: string;
};

export type ThemeLineHeightDefaultType = {
  base65: string;
  base130: string;
  base160: string;
};

export type ThemeType = {
  title?: string;
  colors?: ThemeColors;
  fonts?: {
    fontFamile: string;
    fontSize: ThemeSize;
    fontHeight: {
      base130: string;
      base160: string;
    };
    fontWeight: {
      regular: string;
      bold: string;
      extraBold: string;
    };
  };
  space?: ThemeSize;
  flex?: ThemeFlexType;
  media?: ThemeMediaType;
  fontFamily?: ThemeFontFamilyDefaultType;
  lineHeight?: ThemeLineHeightDefaultType;
};

export const textDecoration = (isUppercase: boolean) => css`
  ${isUppercase &&
  css`
    text-transform: uppercase;
  `}
`;
