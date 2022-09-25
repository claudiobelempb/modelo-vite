import { css } from 'styled-components';
import { TypeThemeNumberDefault } from '../ThemeType';

type TypeHeightDefault = {
  unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  rem?: TypeThemeNumberDefault;
};

export const heightStaticDefault = ({ rem }: TypeHeightDefault) => css`
  height: calc(16 * ${rem}rem);
`;
export const heightDynamicDefault = ({ rem, unit }: TypeHeightDefault) => css`
  height: calc(16 * ${rem}${unit});
`;
