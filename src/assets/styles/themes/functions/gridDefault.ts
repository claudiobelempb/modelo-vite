import { css } from 'styled-components';
import { TypeThemeNumberDefault } from '../ThemeType';

type TypeGridPropsDefault = {
  minMax?: TypeThemeNumberDefault;
  start?: TypeThemeNumberDefault;
  span?: 'span' | '';
  repeat?: 'rows' | 'columns';
  end?: TypeThemeNumberDefault;
  type?:
    | 'grid-colum'
    | 'grid-row'
    | 'grid-template-columns'
    | 'gap'
    | 'row-gap'
    | 'column-gap';
};

/*
  gridTemplateColumnsDefault?: () => FlattenSimpleInterpolation;
  gridTemplateColumnsStaticDefault?: () => FlattenSimpleInterpolation;
  gridTemplateRowsDefault?: () => FlattenSimpleInterpolation;
  gridColumnDefault?: () => FlattenSimpleInterpolation;
  gridRowDefault?: () => FlattenSimpleInterpolation;
  overallDefault?: () => FlattenSimpleInterpolation;

  gridTemplateColumnsDefault={props.gridTemplateColumnsDefault}
  gridTemplateColumnsStaticDefault={props.gridTemplateColumnsStaticDefault}
  gridTemplateRowsDefault={props.gridTemplateRowsDefault}
  gridColumnDefault={props.gridColumnDefault}
  gridRowDefault={props.gridRowDefault}
  overallDefault={props.overallDefault}

  ${props.gridTemplateColumnsDefault && props.gridTemplateColumnsDefault()}
  ${props.gridTemplateColumnsStaticDefault && props.gridTemplateColumnsStaticDefault()}
  ${props.gridTemplateRowsDefault && props.gridTemplateRowsDefault()}
  ${props.gridColumnDefault && props.gridColumnDefault()}
  ${props.gridRowDefault && props.gridRowDefault()}
  ${props.overallDefault && props.overallDefault()}
*/

export const gridTemplateColumnsDefault = (
  repeatColumns: TypeThemeNumberDefault,
  minMax?: TypeThemeNumberDefault
) =>
  css`
    display: grid;
    grid-template-columns:
      [container-start] repeat(${repeatColumns}, minmax(min-content, 1fr))
      [container-end];
  `;

export const gridTemplateColumnsStaticDefault = (
  repeatColumns: TypeThemeNumberDefault,
  minMax?: TypeThemeNumberDefault
) =>
  css`
    grid-template-columns: repeat(
      ${(repeatColumns && repeatColumns) || 'auto-fit'},
      minmax(${(minMax && minMax) || 3}0rem, 1fr)
    );
  `;

export const gridTemplateRowsDefault = (repeatRows: TypeThemeNumberDefault) =>
  css`
    grid-template-rows: repeat(${repeatRows}, min-content);
    justify-content: center;
    /* background-color: green; */
  `;

export const gridColumnDefault = ({ start, span, end }: TypeGridPropsDefault) =>
  css`
    ${span === 'span' &&
    css`
      grid-column: ${start} / ${span} ${end};
    `}
    ${span === '' &&
    css`
      grid-column: ${start} / ${end};
    `}
  `;

export const gridRowDefault = ({ start, span, end }: TypeGridPropsDefault) =>
  css`
    ${span === 'span' &&
    css`
      grid-row: ${start} / ${span} ${end};
    `}
    ${span === '' &&
    css`
      grid-row: ${start} / ${end};
    `}
  `;

export const overallDefault = () =>
  css`
    grid-column: container-start / container-end;
    /* background-color: blue; */
  `;
