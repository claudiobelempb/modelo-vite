import { css } from 'styled-components';
import { TypeThemeNumberDefault } from '../ThemeType';

type TypeWidthDefault = {
  unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  vw?: TypeThemeNumberDefault;
  rem?: TypeThemeNumberDefault;
};

export const widthStaticDefault = ({ rem }: TypeWidthDefault) => css`
  width: ${rem}rem;
`;

export const widthDynamicDefault = ({ vw, unit }: TypeWidthDefault) => css`
  width: calc(16 * ${vw}${unit});
`;
