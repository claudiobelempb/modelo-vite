import { css } from 'styled-components';
import { TypeThemeNumberDefault } from '../ThemeType';

type TypeHeightDefault = {
  unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  value?: TypeThemeNumberDefault;
};

export const heightStaticDefault = ({ value }: TypeHeightDefault) => css`
  height: ${value}rem;
`;
export const heightDynamicDefault = ({ value, unit }: TypeHeightDefault) => css`
  height: calc(16 * ${value}${unit});
`;
