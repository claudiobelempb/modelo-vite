import { css } from 'styled-components';
import { TypeThemeNumberDefault } from '../ThemeType';

export const TypeColorValueDefault = {
  none: 'none',
  grayHsla: 'hsla(0, 0%, 11%, 0.9)',
  grayHsl: 'hsl(0, 0%, 11%)',
  grayDarkHsl: 'hsl(0, 0%, 17%)',
  grayLightHsl: 'hsl(0, 1%, 50%)',
  whiteHsl: 'hsl(0, 0%, 100%)',
  blackHsl: 'hsl(0, 0%, 11%)',
  green: '#2f8f9d',
  greenDark: '#1d5c63',
  greenLight: '#3bacb6',
  blue: '#2155cd',
  blueDark: '#242f9b',
  blueLight: '#dbdffd',
  red: 'red',
  redDark: '#FFFFFF',
  redLight: '#eb5353',
  gray: '#FFFFFF',
  grayDark: '#251d3a',
  grayLight: '#FFFFFF',
  grayRgba: 'rgba(0 0 0 / 0.5)',
  white: '#FFFFFF',
  black: '#000000',
  yellow: '#DBAC2C',
  yellowDark: '#C47F17',
  yellowLight: '#F1E9C9',
  purple: '#8047F8',
  purpleDark: '#4B2995',
  purpleLight: '#EBE5F9',
  title: 'hsl(0, 0%, 100%)',
  subTitle: '#403937',
  text: '#574F4D',
  hover: '#D7D5D5',
  button: '#E6E5E5',
  input: '#EDEDED',
  background: '#FAFAFA',
  label: '#8D8686',
  card: '#F3F2F2',
  bgHover: '#FFFFFF',
  textHover: 'hsl(0, 0%, 17%)',
  transparent: 'transparent'
};

export type TypeValueIndexPropsDefault =
  | 'none'
  | 'grayHsla'
  | 'grayHsl'
  | 'grayDarkHsl'
  | 'grayLightHsl'
  | 'whiteHsl'
  | 'blackHsl'
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
  | 'grayRgba'
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
  | 'bgHover'
  | 'textHover'
  | 'card'
  | 'transparent';

type TypeColorPropsDefault = {
  size?: TypeThemeNumberDefault;
  backgroundColor?: TypeValueIndexPropsDefault;
  color?: TypeValueIndexPropsDefault;
  colorPrimary?: TypeValueIndexPropsDefault;
  colorSecondary?: TypeValueIndexPropsDefault;
  urlImg?: string;
};

/**
  backgroundColorDefault?: () => FlattenSimpleInterpolation;
  backgroundLinearGradientDefault?: () => FlattenSimpleInterpolation;
  textColorDefault?: () => FlattenSimpleInterpolation;
  iconDefault?: () => FlattenSimpleInterpolation;

  backgroundColorDefault={props.backgroundColorDefault}
  backgroundLinearGradientDefault={props.backgroundLinearGradientDefault}
  textColorDefault={props.textColorDefault}
  iconDefault={props.iconDefault}

  ${props.backgroundColorDefault && props.backgroundColorDefault()}
  ${props.backgroundLinearGradientDefault && props.backgroundLinearGradientDefault()}
  ${props.textColorDefault && props.textColorDefault()}
  ${props.iconDefault && props.iconDefault()}

*/

export const backgroundColorDefault = (
  colorPrimary: TypeValueIndexPropsDefault
) =>
  css`
    background-color: ${colorPrimary && TypeColorValueDefault[colorPrimary]};
  `;

export const backgroundLinearGradientDefault = ({
  colorPrimary,
  colorSecondary,
  urlImg
}: TypeColorPropsDefault) =>
  css`
    background: linear-gradient(
        to bottom,
        ${colorPrimary && TypeColorValueDefault[colorPrimary]},
        ${colorSecondary && TypeColorValueDefault[colorSecondary]}
      ),
      url(${urlImg});
    background-size: cover;
    background-position: center;
  `;

export const textColorDefault = ({ color }: TypeColorPropsDefault) =>
  css`
    color: ${color && TypeColorValueDefault[color]};
  `;

export const textHoverDefault = ({ color }: TypeColorPropsDefault) =>
  css`
    &:hover {
      filter: brightness(0.6);
      color: ${color && TypeColorValueDefault[color]};
    }
  `;
export const iconDefault = ({
  color = 'grayLightHsl',
  backgroundColor,
  size
}: TypeColorPropsDefault) =>
  css`
    & svg {
      background-color: ${backgroundColor &&
      TypeColorValueDefault[backgroundColor]};
      color: ${color && TypeColorValueDefault[color]};
      font-size: ${size && size}rem;
      /* margin-right: 1rem; */
    }
  `;
