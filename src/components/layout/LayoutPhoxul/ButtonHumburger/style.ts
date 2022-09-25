import styled, { css } from 'styled-components';

type ButtonHumburgerContainerProps = {
  onClick?: () => void;
  isOpenHumburger?: boolean;
  isCloseHumburger?: boolean;
};

export const ButtonHumburgerContainer = styled.button<ButtonHumburgerContainerProps>`
  ${({ theme, isOpenHumburger, isCloseHumburger }) => css`
    position: fixed;
    height: 5rem;
    width: 8rem;
    top: 1rem;
    right: 5rem;
    background-color: hsla(0, 0%, 11%, 0.9);
    padding: 1rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    z-index: 10;
    border: none;
    visibility: hidden;

    & div:first-child {
      width: 50%;
      transition: all 0.25s ease;
      height: 2px;
      background-color: #fff;
    }
    & div:nth-child(2) {
      width: 100%;
      transition: all 0.1s ease;
      height: 2px;
      background-color: #fff;
    }
    & div:last-child {
      width: 50%;
      transition: all 0.1s ease;
      height: 2px;
      background-color: #fff;
      align-self: flex-end;
    }

    ${isOpenHumburger &&
    css`
      & div:first-child {
        transform: rotate(45deg) translateX(1.7rem) translateY(-0.2rem);
      }
      & div:nth-child(2) {
        visibility: hidden;
      }
      & div:last-child {
        transform: rotate(-45deg) translateX(-0.2rem) translateY(-2.1rem);
      }
    `}

    // sm applies to x-small devices (portrait phones, less than 576px)
    @media (max-width: 320px) {
      visibility: visible;
    }

    // md applies to small devices (landscape phones, less than 768px)
    @media (min-width: 320px) and (max-width: 576px) {
      visibility: visible;
    }

    // lg applies to medium devices (tablets, less than 992px)
    @media (min-width: 576px) and (max-width: 768px) {
      visibility: visible;
    }

    // xl applies to large devices (desktops, less than 1200px)
    @media (min-width: 768px) and (max-width: 992px) {
      visibility: visible;
    }

    // xxl applies to x-large devices (large desktops, less than 1400px)
    @media (min-width: 992px) and (max-width: 1200px) {
    }
    // xxl applies to x-large devices (large desktops, less than 1400px)
    @media (min-width: 1200px) and (max-width: 1400px) {
    }
  `}
`;
