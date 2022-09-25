import { css } from 'styled-components';
import { TypeThemeNumberDefault } from '../ThemeType';

export const TypeFlexValueDefault = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  inherit: 'inherit',
  initial: 'initial',
  revert: 'revert',
  unset: 'unset',
  stretch: 'stretch',
  baseline: 'baseline',
  auto: 'auto',
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  center: 'center',
  spaceBetween: 'space-between',
  spaceAround: 'space-around',
  spaceEvenly: 'space-evenly',
  start: 'start',
  end: 'end',
  left: 'left',
  right: 'right',
  row: 'row',
  rowReverse: 'row-reverse',
  column: 'column',
  columnReverse: 'column-reverse',
  nowRap: 'nowrap',
  wrap: 'wrap',
  wrapReverse: 'wrap-reverse',
  repeat: 'repeat',
  noRepeat: 'no-repeat',
  cover: 'cover',
  contain: 'contain'
};

type TypeValueFlexDefault =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'
  | 'stretch'
  | 'baseline'
  | 'auto'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'
  | 'now-rap'
  | 'wrap'
  | 'cover'
  | 'contain'
  | 'repeat'
  | 'no-repeat'
  | 'wrap-reverse';

type TypeFlexPropsDefault = {
  unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  row?: TypeThemeNumberDefault;
  column?: TypeThemeNumberDefault;
  type?:
    | 'flex-direction'
    | 'align-items'
    | 'justify-content'
    | 'gap'
    | 'row-gap'
    | 'column-gap'
    | 'flex-basis';
};

/**
  flexDirectionDefault?: () => FlattenSimpleInterpolation;
  alignSelfDefault?: () => FlattenSimpleInterpolation;
  flexGapDefault?: () => FlattenSimpleInterpolation;
  justifyContentDefault?: () => FlattenSimpleInterpolation;
  alignItemsDefault?: () => FlattenSimpleInterpolation;
  flexBasisDefault?: () => FlattenSimpleInterpolation;
  flexGrowDefault?: () => FlattenSimpleInterpolation;

  flexDirectionDefault={props.flexDirectionDefault}
  alignSelfDefault={props.alignSelfDefault}
  flexGapDefault={props.flexGapDefault}
  justifyContentDefault={props.justifyContentDefault}
  alignItemsDefault={props.alignItemsDefault}
  flexBasisDefault={props.flexBasisDefault}
  flexGrowDefault={props.flexGrowDefault}

  ${props.flexDirectionDefault && props.flexDirectionDefault()}
  ${props.alignSelfDefault && props.alignSelfDefault()}
  ${props.flexGapDefault && props.flexGapDefault()}
  ${props.justifyContentDefault && props.justifyContentDefault()}
  ${props.alignItemsDefault && props.alignItemsDefault()}
  ${props.flexBasisDefault && props.flexBasisDefault()}
  ${props.flexGrowDefault && props.flexGrowDefault()}

*/

export const flexDirectionDefault = (value: TypeValueFlexDefault) =>
  css`
    flex-direction: ${value};
  `;

export const alignSelfDefault = (value: TypeValueFlexDefault) =>
  css`
    align-self: ${value};
  `;

export const flexGapDefault = ({ row = 0, column = 0 }: TypeFlexPropsDefault) =>
  css`
    gap: ${row && row}rem ${column && column}rem;
  `;

export const justifyContentDefault = (value: TypeValueFlexDefault) =>
  css`
    justify-content: ${value};
  `;
export const alignItemsDefault = (value: TypeValueFlexDefault) =>
  css`
    align-items: ${value};
  `;
export const flexBasisDefault = (value: TypeThemeNumberDefault) =>
  css`
    flex-basis: calc(10 * ${value && value}%);

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {
      flex-basis: auto;
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
      flex-basis: auto;
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
    }

    // X-Large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {
    }
  `;
export const flexGrowDefault = (value: TypeThemeNumberDefault) =>
  css`
    flex-grow: calc(${value && value});
  `;
export const flexWrapDefault = (value: 'wrap' | 'nowrap') =>
  css`
    flex-wrap: ${value && value};

    // sm applies to x-small devices (portrait phones, less than 576px)
    @media (max-width: 320px) {
      flex-wrap: wrap;
    }

    // md applies to small devices (landscape phones, less than 768px)
    @media (min-width: 320px) and (max-width: 576px) {
      flex-wrap: wrap;
    }

    // lg applies to medium devices (tablets, less than 992px)
    @media (min-width: 576px) and (max-width: 768px) {
      flex-wrap: wrap;
    }

    // xl applies to large devices (desktops, less than 1200px)
    @media (min-width: 768px) and (max-width: 992px) {
      flex-wrap: wrap;
    }

    // xxl applies to x-large devices (large desktops, less than 1400px)
    @media (min-width: 992px) and (max-width: 1200px) {
      flex-wrap: nowrap;
    }
    // xxl applies to x-large devices (large desktops, less than 1400px)
    @media (min-width: 1200px) and (max-width: 1400px) {
      flex-wrap: nowrap;
    }
  `;
