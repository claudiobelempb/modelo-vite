import { css } from 'styled-components';
import {
  ThemeColorsText,
  THEME_COLORS_DEFAULT,
  TypeThemeNumberDefault
} from '../ThemeType';

type TypeFontDefault = {
  vstatic?: TypeThemeNumberDefault;
  vdynamic?: TypeThemeNumberDefault;
};

/**
  fontSizeStaticDefault?: () => FlattenSimpleInterpolation;
  fontSizeDynamicDefault?: () => FlattenSimpleInterpolation;
  textTransformDefault?: () => FlattenSimpleInterpolation;
  textAlignDefault?: () => FlattenSimpleInterpolation;
  tetxTitleDefault?: () => FlattenSimpleInterpolation;
  textParagraphDefault?: () => FlattenSimpleInterpolation;
  fontFamilyDefault?: () => FlattenSimpleInterpolation;
  fontStyleDefault?: () => FlattenSimpleInterpolation;
  fontLineHeightDefault?: () => FlattenSimpleInterpolation;
  textDecoretionlineThrough?: () => FlattenSimpleInterpolation;

  fontSizeStaticDefault={props.fontSizeStaticDefault}
  fontSizeDynamicDefault={props.fontSizeDynamicDefault}
  textTransformDefault={props.textTransformDefault}
  textAlignDefault={props.textAlignDefault}
  textTitleDefault={props.textTitleDefault}
  textParagraphDefault={props.textParagraphDefault}
  fontFamilyDefault={props.paddingTopDefault}
  fontStyleDefault={props.fontStyleDefault}
  fontLineHeightDefault={props.fontLineHeightDefault}
  textDecoretionlineThrough={props.textDecoretionlineThrough}

  ${props.fontSizeStaticDefault && props.fontSizeStaticDefault()}
  ${props.fontSizeDynamicDefault && props.fontSizeDynamicDefault()}
  ${props.textTransformDefault && props.textTransformDefault()}
  ${props.textAlignDefault && props.textAlignDefault()}
  ${props.textTitleDefault && props.textTitleDefault()}
  ${props.textParagraphDefault && props.textparagraphDefault()}
  ${props.fontFamilyDefault && props.fontFamilyDefault()}
  ${props.fontStyleDefault && props.fontStyleDefault()}
  ${props.fontLineHeightDefault && props.fontLineHeightDefault()}
  ${props.textDecoretionlineThrough && props.textDecoretionlineThrough()}

*/

export const fontSizeStaticDefault = ({ vstatic }: TypeFontDefault) => css`
  font-size: ${vstatic}rem;
`;

export const fontSizeDynamicDefault = ({
  vstatic,
  vdynamic
}: TypeFontDefault) => css`
  font-size: calc(${vstatic}rem + ${vdynamic}vw);
`;

export const textTransformDefault = (
  type:
    | 'none'
    | 'capitalize'
    | 'uppercase'
    | 'lowercase'
    | 'full-width'
    | 'full-size-kana'
) => css`
  text-transform: ${type};
`;

export const textAlignDefault = (
  value:
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'justify-all'
    | 'match-parent'
) => css`
  text-align: ${value};
`;

export const textTitleDefault = () => css`
  font-size: calc(1rem + 1.5vw);
  font-weight: 900;
`;

export const textParagraphDefault = () => css`
  font-size: 2rem;
  color: hsl(0, 0%, 100%);
`;

export const fontFamilyDefault = (
  value: 'roboto' | 'baloo' | 'oswald' | 'plusJakarta'
) => css`
  font-family: ${value};
`;

export const fontStyleDefault = (
  value: 'normal' | 'italic' | 'oblique' | 'initial' | 'inherit'
) => css`
  font-style: ${value};
`;

export const fontLineHeightDefault = (value: '65%' | '130%' | '160%') => css`
  line-height: ${value};
`;

export const fontWeightDefault = (
  value:
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
    | 'extraBold'
) => css`
  font-weight: ${value};
`;

export const textDecoretionlineThrough = (color?: ThemeColorsText) => css`
  color: ${color && THEME_COLORS_DEFAULT[color]};
  text-decoration: line-through;
`;
