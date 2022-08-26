import styled, { css } from 'styled-components';

export const HomeDefaultContainer = styled.div`
  ${({ theme }) => css`
    background-color: transparent;
    color: ${theme.bgcolor['#8D8686']} !important;
  `}
`;
