import { css } from 'styled-components';
import {
  ThemeColorsText,
  THEME_COLORS_DEFAULT,
  TypeSpaceNumber
} from '../ThemeType';

export const borderDefault = (
  borderWidth: TypeSpaceNumber,
  borderStyle: 'solid' | 'dashed ',
  borderColor: ThemeColorsText
) =>
  css`
    border: ${borderWidth && borderWidth}px;
    border-style: ${borderStyle && borderStyle};
    border-color: ${borderColor && THEME_COLORS_DEFAULT[borderColor]};
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
  `;

export const borderDefaultTop = (
  borderTopWidth: TypeSpaceNumber,
  borderTopStyle: 'solid' | 'dashed ',
  borderTopColor: ThemeColorsText
) =>
  css`
    border-top-width: ${borderTopWidth && borderTopWidth}px;
    border-top-style: ${borderTopStyle && borderTopStyle};
    border-top-color: ${borderTopColor && borderTopColor};
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
  `;

export const borderDefaultLeft = (
  borderLeftWidth: TypeSpaceNumber,
  borderLeftStyle: 'solid' | 'dashed ',
  borderLeftColor: ThemeColorsText
) =>
  css`
    border-left-width: ${borderLeftWidth && borderLeftWidth}px;
    border-left-style: ${borderLeftStyle && borderLeftStyle};
    border-left-color: ${borderLeftColor &&
    THEME_COLORS_DEFAULT[borderLeftColor]};
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
  `;

export const borderDefaultBottom = (
  borderBottomWidth: TypeSpaceNumber,
  borderBottomStyle: 'solid' | 'dashed ',
  borderBottomColor: ThemeColorsText
) =>
  css`
    border-bottom-width: ${borderBottomWidth && borderBottomWidth}px;
    border-bottom-style: ${borderBottomStyle && borderBottomStyle};
    border-bottom-color: ${borderBottomColor &&
    THEME_COLORS_DEFAULT[borderBottomColor]};
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
  `;

export const borderDefaultRight = (
  borderRightWidth: TypeSpaceNumber,
  borderRightStyle: 'solid' | 'dashed ',
  borderRightColor: ThemeColorsText
) =>
  css`
    border-right-width: ${borderRightWidth && borderRightWidth}px;
    border-right-style: ${borderRightStyle && borderRightStyle};
    border-right-color: ${borderRightColor &&
    THEME_COLORS_DEFAULT[borderRightColor]};
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
  `;
