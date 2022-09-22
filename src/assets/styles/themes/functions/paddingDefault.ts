import { css } from 'styled-components';
import { TypeThemeNumberDefault } from '../ThemeType';

type TypePaddingDefault = {
  unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  value?: TypeThemeNumberDefault;
  vstatic?: TypeThemeNumberDefault;
  vdynamic?: TypeThemeNumberDefault;
  vs?: TypeThemeNumberDefault;
  vd?: TypeThemeNumberDefault;
  hs?: TypeThemeNumberDefault;
  hd?: TypeThemeNumberDefault;
  type?: 'padding' | 'top' | 'right' | 'left' | 'bottom';
};

type PaddingDefaultProps = {
  value?: TypeThemeNumberDefault;
  valueX?: TypeThemeNumberDefault;
  valueY?: TypeThemeNumberDefault;
};

export const paddingDefault = ({
  vs,
  vd,
  hs,
  hd,
  type
}: TypePaddingDefault) => css`
  ${type === 'padding' &&
  css`
    padding-top: calc(${vs}rem + ${vd}vh);
    padding-right: calc(${hs}rem + ${hd}vw);
    padding-bottom: calc(${vs}rem + ${vd}vh);
    padding-left: calc(${hs}rem + ${hd}vw);
  `}
  ${type === 'top' &&
  css`
    padding-top: ${vs}rem;
  `}
  ${type === 'right' &&
  css`
    padding-right: ${hs}rem;
  `}
  ${type === 'bottom' &&
  css`
    padding-bottom: ${vs}rem;
  `}
  ${type === 'left' &&
  css`
    padding-left: ${hs}rem;
  `}
`;

/**
  paddingStaticDefault?: () => FlattenSimpleInterpolation;
  paddingStaticXDefault?: () => FlattenSimpleInterpolation;
  paddingStaticYDefault?: () => FlattenSimpleInterpolation;
  paddingDynamicDefault?: () => FlattenSimpleInterpolation;
  paddingDynamicXDefault?: () => FlattenSimpleInterpolation;
  paddingDynamicYDefault?: () => FlattenSimpleInterpolation;
  paddingTopDefault?: () => FlattenSimpleInterpolation;
  paddingRightDefault?: () => FlattenSimpleInterpolation;
  paddingBottomDefault?: () => FlattenSimpleInterpolation;
  paddingLeftDefault?: () => FlattenSimpleInterpolation;

  paddingStaticDefault={props.paddingStaticDefault}
  paddingStaticXDefault={props.paddingStaticXDefault}
  paddingStaticYDefault={props.paddingStaticYDefault}
  paddingDynamicDefault={props.paddingDynamicDefault}
  paddingDynamicXDefault={props.paddingDynamicXDefault}
  paddingDynamicYDefault={props.paddingDynamicYDefault}
  paddingTopDefault={props.paddingTopDefault}
  paddingRightDefault={props.paddingRightDefault}
  paddingBottomDefault={props.paddingBottomDefault}
  paddingLeftDefault={props.paddingLeftDefault}

  ${props.paddingStaticDefault && props.paddingStaticDefault()}
  ${props.paddingStaticXDefault && props.paddingStaticXDefault()}
  ${props.paddingStaticYDefault && props.paddingStaticYDefault()}
  ${props.paddingDynamicDefault && props.paddingDynamicDefault()}
  ${props.paddingDynamicXDefault && props.paddingDynamicXDefault()}
  ${props.paddingDynamicYDefault && props.paddingDynamicYDefault()}
  ${props.paddingTopDefault && props.paddingTopDefault()}
  ${props.paddingRightDefault && props.paddingRightDefault()}
  ${props.paddingBottomDefault && props.paddingBottomDefault()}
  ${props.paddingLeftDefault && props.paddingLeftDefault()}

*/

export const paddingSectionDefault = () => css`
  padding: calc(2rem + 12vh) calc(2rem + 12vw);
`;

export const paddingStaticDefault = ({
  valueX = 0,
  valueY = 0
}: PaddingDefaultProps) => css`
  padding: ${valueY && valueY}rem ${valueX && valueX}rem;
`;

export const paddingDynamicDefault = ({
  value = 0,
  valueX = 0,
  valueY = 0
}: PaddingDefaultProps) => css`
  padding: calc(${value}rem + ${valueY}vh) calc(${value}rem + ${valueX}vw);
`;

export const paddingDynamicYDefault = ({
  vstatic,
  vdynamic
}: TypePaddingDefault) => css`
  padding-top: calc(${vstatic}rem + ${vdynamic}vh);
  padding-bottom: calc(${vstatic}rem + ${vdynamic}vh);
`;

export const paddingStaticYDefault = ({ vstatic }: TypePaddingDefault) => css`
  padding-top: ${vstatic}rem;
  padding-bottom: ${vstatic}rem;
`;

export const paddingDynamicXDefault = ({
  vstatic,
  vdynamic
}: TypePaddingDefault) => css`
  padding-right: calc(${vstatic}rem + ${vdynamic}vw);
  padding-left: calc(${vstatic}rem + ${vdynamic}vw);
`;

export const paddingStaticXDefault = ({ vstatic }: TypePaddingDefault) => css`
  padding-right: ${vstatic}rem;
  padding-left: ${vstatic}rem;
`;

export const paddingTopDefault = ({ vstatic }: TypePaddingDefault) => css`
  padding-top: ${vstatic}rem;
`;
export const paddingRightDefault = ({ vstatic }: TypePaddingDefault) => css`
  padding-right: ${vstatic}rem;
`;
export const paddingBottomDefault = ({ vstatic }: TypePaddingDefault) => css`
  padding-bottom: ${vstatic}rem;
`;
export const paddingLeftDefault = ({ vstatic }: TypePaddingDefault) => css`
  padding-left: ${vstatic}rem;
`;
