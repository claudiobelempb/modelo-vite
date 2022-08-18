import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import styled, { css } from 'styled-components';

export const BrandDefautContainer = styled.div<TypeDefault>`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: inherit;
    justify-content: inherit;
    & h1 {
      font-size: ${theme.size.base32};
    }
  `}
`;
