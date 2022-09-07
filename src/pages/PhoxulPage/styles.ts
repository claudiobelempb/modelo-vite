import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import styled, { css } from 'styled-components';

export const PhoxulPageContainer = styled.div<TypeDefault>`
  ${({ theme, ...props }) => css`
    display: grid;
    grid-template-columns:
      [container-start] repeat(12, minmax(min-content, 12.5rem))
      [container-end];
    grid-template-rows: repeat(9, min-content);
    justify-content: center;

    .overall-layout {
      grid-column: container-start / container-end;
    }
  `}
`;
