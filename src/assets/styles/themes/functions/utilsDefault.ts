import { css } from 'styled-components';
import {
  ThemeColorsText,
  THEME_COLORS_DEFAULT,
  TypeThemeNumberDefault
} from '../ThemeType';

type TypeUtilsPropsDefault = {
  color?: ThemeColorsText;
  value?: TypeThemeNumberDefault;
  vstatic?: TypeThemeNumberDefault;
  vdynamic?: TypeThemeNumberDefault;
  offsetY?: TypeThemeNumberDefault;
  offsetX?: TypeThemeNumberDefault;
  blurRadius?: TypeThemeNumberDefault;
  spreadRadius?: TypeThemeNumberDefault;
  type?: 'par' | 'impar' | 'nth-child' | 'box-shadow';
  element?: 'border-top' | 'border-right' | 'border-bottom' | 'border-left';
};

/**
  zIndexDefault?: () => FlattenSimpleInterpolation;
  imparDefault?: () => FlattenSimpleInterpolation;
  parDefault?: () => FlattenSimpleInterpolation;
  boxShadowDefault?: () => FlattenSimpleInterpolation;
  displayDefault?: () => FlattenSimpleInterpolation;
  overflowDefault?: () => FlattenSimpleInterpolation;

  zIndexDefault={props.zIndexDefault}
  imparDefault={props.imparDefault}
  parDefault={props.parDefault}
  boxShadowDefault={props.boxShadowDefault}
  displayDefault={props.displayDefault}
  overflowDefault={props.overflowDefault}

  ${props.zIndexDefault && props.zIndexDefault()}
  ${props.imparDefault && props.imparDefault()}
  ${props.parDefault && props.parDefault()}
  ${props.boxShadowDefault && props.boxShadowDefault()}
  ${props.displayDefault && props.displayDefault()}
  ${props.overflowDefault && props.overflowDefault()}

*/

export const zIndexDefault = (value: TypeThemeNumberDefault) =>
  css`
    z-index: ${value};
  `;
export const overflowDefault = (
  overflow?: 'hidden' | 'overlay' | 'scroll' | 'visible'
) =>
  css`
    overflow: ${overflow && overflow};
  `;

export const visibilityDefault = (
  visibility?: 'hidden' | 'overlay' | 'scroll' | 'visible'
) =>
  css`
    visibility: ${visibility && visibility};
    display: none;
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {
      display: none;
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
      display: none;
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
      display: flex;
    }

    // X-Large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
      display: flex;
    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {
      display: flex;
    }
  `;

export const displayDefault = (
  value: 'flex' | 'grid' | 'block' | 'inline-block'
) =>
  css`
    display: ${value};
  `;

export const imparDefault = ({
  vstatic,
  vdynamic,
  color,
  element = 'border-top'
}: TypeUtilsPropsDefault) =>
  css`
    ${element &&
    css`
      &:nth-child(${vstatic}n + ${vdynamic}) {
        ${element}: ${vstatic}px solid ${color && THEME_COLORS_DEFAULT[color]};
      }
    `}
  `;

export const parDefault = ({
  vstatic,
  color,
  element = 'border-top'
}: TypeUtilsPropsDefault) =>
  css`
    ${element &&
    css`
      &:nth-child(${vstatic}n) {
        ${element && element}: ${vstatic}px solid ${color &&
        THEME_COLORS_DEFAULT[color]};
      }
    `}
  `;

export const boxShadowDefault = ({
  color,
  offsetX,
  offsetY,
  blurRadius,
  spreadRadius
}: TypeUtilsPropsDefault) =>
  css`
    box-shadow: ${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px
      ${color && THEME_COLORS_DEFAULT[color]};
  `;
