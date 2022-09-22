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
