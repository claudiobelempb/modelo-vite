import {
  THEME_COLORS_DEFAULT,
  THEME_SIZE_DEFAULT
} from '@assets/styles/themes/ThemeType';
import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import styled, { css } from 'styled-components';

export const ContainerNavLink = styled.div<TypeDefault>`
  ${({ theme, bgtext, fontSize = 'base16', isAfter = false, bgcolor }) => css`
    position: relative;
    display: block;
    font-weight: 400;
    color: inherit;
    background-color: inherit;
    ${bgtext &&
    css`
      color: ${bgtext && THEME_COLORS_DEFAULT[bgtext]};
    `}
    ${bgcolor &&
    css`
      background-color: ${bgcolor && THEME_COLORS_DEFAULT[bgcolor]};
    `}

    font-size: ${fontSize && THEME_SIZE_DEFAULT[fontSize]};
    padding: ${theme.size.base16};
    font-weight: ${theme.fonts.fontWeight.bold};

    &:hover {
      color: ${theme.colors.hover};
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0%;
      height: 0.2rem;
      background-color: ${theme.colors.red};
      transition: all 300ms ease-in-out;
    }

    ${isAfter &&
    css`
      &:hover::after {
        left: 25%;
        width: 50%;
      }
    `}
  `}
`;
