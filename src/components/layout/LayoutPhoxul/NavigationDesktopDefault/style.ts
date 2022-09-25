import styled, { css } from 'styled-components';

type NavContainerProps = {
  isActive?: boolean;
  isDisplay?: boolean;
};

export const NavigationDesktopDefault = styled.nav<NavContainerProps>`
  ${({ theme, isActive, isDisplay }) => css`
    display: flex;
    gap: 3rem;

    & a {
      font-size: 1.5rem;
      color: hsl(0, 1%, 50%);
      transition: all 0.2s ease-in-out;

      &:hover {
        color: white;
      }

      ${isActive &&
      css`
        color: #000;
      `}
    }

    ${isDisplay &&
    css`
      transform: translateX(0);
    `}

    // sm applies to x-small devices (portrait phones, less than 576px)
     @media (max-width: 320px) {
      display: none;
    }

    // md applies to small devices (landscape phones, less than 768px)
    @media (min-width: 320px) and (max-width: 576px) {
      display: none;
    }

    // lg applies to medium devices (tablets, less than 992px)
    @media (min-width: 576px) and (max-width: 768px) {
      display: none;
    }

    // xl applies to large devices (desktops, less than 1200px)
    @media (min-width: 768px) and (max-width: 992px) {
      display: none;
    }

    // xxl applies to x-large devices (large desktops, less than 1400px)
    @media (min-width: 992px) and (max-width: 1200px) {
    }
    // xxl applies to x-large devices (large desktops, less than 1400px)
    @media (min-width: 1200px) and (max-width: 1400px) {
    }
  `}
`;
