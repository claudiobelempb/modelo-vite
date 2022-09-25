import styled, { css } from 'styled-components';

type NavContainerProps = {
  isActive?: boolean;
  isDisplay?: boolean;
};

export const NavVerticalContainer = styled.nav<NavContainerProps>`
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
  `}
`;

export const NavigationMobileDefault = styled.nav<NavContainerProps>`
  ${({ theme, isActive, isDisplay }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: calc(1rem + 2vh) calc(2rem + 12vw);
    background-color: hsla(0, 0%, 11%, 0.9);
    transition: all 0.65s ease-in-out;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    transform: translateX(400rem);
    z-index: 5;
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
    }

    // md applies to small devices (landscape phones, less than 768px)
    @media (min-width: 320px) and (max-width: 576px) {
    }

    // lg applies to medium devices (tablets, less than 992px)
    @media (min-width: 576px) and (max-width: 768px) {
    }

    // xl applies to large devices (desktops, less than 1200px)
    @media (min-width: 768px) and (max-width: 992px) {
    }

    // xxl applies to x-large devices (large desktops, less than 1400px)
    @media (min-width: 992px) and (max-width: 1200px) {
      display: none;
    }
    // xxl applies to x-large devices (large desktops, less than 1400px)
    @media (min-width: 1200px) and (max-width: 1400px) {
      display: none;
    }
  `}
`;
