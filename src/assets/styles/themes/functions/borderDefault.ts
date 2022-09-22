import { css } from 'styled-components';
import {
  ThemeColorsText,
  THEME_COLORS_DEFAULT,
  TypeThemeNumberDefault
} from '../ThemeType';

type TypeBorderPropsDefault = {
  unit?: 'px' | '%' | 'rem' | 'w' | 'h';
  type?:
    | 'border'
    | 'radius'
    | 'radius-top'
    | 'radius-bottom'
    | 'top'
    | 'right'
    | 'left'
    | 'bottom';
  width?: TypeThemeNumberDefault;
  style?: 'solid' | 'dashed ';
  color?: ThemeColorsText;
};

export const borderDefault = ({
  unit = 'px',
  width = 1,
  style = 'solid',
  color = 'blackHsl'
}: TypeBorderPropsDefault) =>
  css`
    border: ${width}${unit} ${style} ${color && THEME_COLORS_DEFAULT[color]};

    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
  `;

export const borderTopDefault = ({
  unit = 'px',
  width = 1,
  style = 'solid',
  color = 'blackHsl'
}: TypeBorderPropsDefault) =>
  css`
    border-top-width: ${width && width}${unit};
    border-top-style: ${style && style};
    border-top-color: ${color && THEME_COLORS_DEFAULT[color]};
  `;

export const borderRightDefault = ({
  unit = 'px',
  width = 1,
  style = 'solid',
  color = 'blackHsl'
}: TypeBorderPropsDefault) =>
  css`
    border-right-width: ${width && width}${unit};
    border-right-style: ${style && style};
    border-right-color: ${color && THEME_COLORS_DEFAULT[color]};

    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
  `;

export const borderBottomDefault = ({
  unit = 'px',
  width = 1,
  style = 'solid',
  color = 'blackHsl'
}: TypeBorderPropsDefault) =>
  css`
    border-bottom-width: ${width && width}${unit};
    border-bottom-style: ${style && style};
    border-bottom-color: ${color && THEME_COLORS_DEFAULT[color]};

    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
  `;

export const borderLeftDefault = ({
  unit = 'px',
  width = 1,
  style = 'solid',
  color = 'blackHsl'
}: TypeBorderPropsDefault) =>
  css`
    border-left-width: ${width && width}${unit};
    border-left-style: ${style && style};
    border-left-color: ${color && THEME_COLORS_DEFAULT[color]};

    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
  `;

export const borderRadiusDefault = ({
  unit = 'rem',
  width = 1
}: TypeBorderPropsDefault) =>
  css`
    border-radius: calc(10 * ${width && width}${unit});
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
  `;

export const borderRadiusTopRightDefault = ({
  unit = 'rem',
  width = 1
}: TypeBorderPropsDefault) =>
  css`
    border-top-right-radius: calc(10 * ${width && width}${unit});
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
  `;
export const borderRadiusTopLeftDefault = ({
  unit = 'rem',
  width = 1
}: TypeBorderPropsDefault) =>
  css`
    border-top-left-radius: calc(10 * ${width && width}${unit});
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
  `;

export const borderRadiusBottomRightDefault = ({
  unit = 'rem',
  width = 1
}: TypeBorderPropsDefault) =>
  css`
    border-bottom-right-radius: calc(10 * ${width && width}${unit});
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
  `;

export const borderRadiusBottomLeftDefault = ({
  unit = 'rem',
  width = 1
}: TypeBorderPropsDefault) =>
  css`
    border-bottom-left-radius: calc(10 * ${width && width}${unit});
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
  `;
