import {
  THEME_COLORS_DEFAULT,
  THEME_FLEX_DEFAULT,
  THEME_SIZE_DEFAULT,
  THEME_SPACE_DEFAULT
} from '@assets/styles/themes/ThemeType';
import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import styled, { css } from 'styled-components';

export const BoxDefaultStyle = styled.div<TypeDefault>`
  ${({
    theme,
    bgcolor,
    bgtext,
    fontSize,
    direction,
    jcontent,
    aitems,
    padding,
    paddingX,
    paddingY,
    margin,
    marginX,
    marginY,
    xsmall,
    small,
    medium,
    large,
    xlarge,
    xxlarge,
    isVisibility,
    isDisplay,
    height,
    width = 'base100',
    media,
    visibility,
    gap
  }) => css`
    display: grid;
    width: ${width && THEME_SPACE_DEFAULT[width]};
    height: ${height && THEME_SPACE_DEFAULT[height]};
    align-items: center;
    justify-content: inherit;

    color: ${bgtext && THEME_COLORS_DEFAULT[bgtext]};
    background-color: ${bgcolor && THEME_COLORS_DEFAULT[bgcolor]};
    font-size: ${fontSize && THEME_SIZE_DEFAULT[fontSize]};
    padding: ${padding && THEME_SPACE_DEFAULT[padding]};
    margin: ${margin && THEME_SPACE_DEFAULT[margin]};
    gap: ${gap && THEME_SPACE_DEFAULT[gap]};

    ${height &&
    css`
      height: ${height};
    `}

    ${isVisibility === 'xsmall' &&
    css`
      @media ${theme.media.xsmall} {
        visibility: hidden;
        opacity: 0;
      }
    `}

    ${isVisibility === 'small' &&
    css`
      @media ${theme.media.xsmall} {
        visibility: hidden;
        opacity: 0;
      }
      @media ${theme.media.small} {
        visibility: hidden;
        opacity: 0;
      }
    `}

    ${isVisibility === 'medium' &&
    css`
      @media ${theme.media.xsmall} {
        visibility: hidden;
        opacity: 0;
      }
      @media ${theme.media.small} {
        visibility: hidden;
        opacity: 0;
      }
      @media ${theme.media.medium} {
        visibility: hidden;
        opacity: 0;
      }
    `}

    ${isVisibility === 'large' &&
    css`
      @media ${theme.media.xsmall} {
        visibility: hidden;
        opacity: 0;
      }
      @media ${theme.media.small} {
        visibility: hidden;
        opacity: 0;
      }
      @media ${theme.media.medium} {
        visibility: hidden;
        opacity: 0;
      }
      @media ${theme.media.large} {
        visibility: hidden;
        opacity: 0;
      }
    `}

    ${isVisibility === 'xlarge' &&
    css`
      @media ${theme.media.xsmall} {
        visibility: hidden;
        opacity: 0;
      }
      @media ${theme.media.small} {
        visibility: hidden;
        opacity: 0;
      }
      @media ${theme.media.medium} {
        visibility: hidden;
        opacity: 0;
      }
      @media ${theme.media.large} {
        visibility: hidden;
        opacity: 0;
      }
      @media ${theme.media.xlarge} {
        visibility: hidden;
        opacity: 0;
      }
    `}

    ${isVisibility === 'xxlarge' &&
    css`
      @media ${theme.media.xsmall} {
        visibility: hidden;
        opacity: 0;
      }
      @media ${theme.media.small} {
        visibility: hidden;
        opacity: 0;
      }
      @media ${theme.media.medium} {
        visibility: hidden;
        opacity: 0;
      }
      @media ${theme.media.large} {
        visibility: hidden;
        opacity: 0;
      }
      @media ${theme.media.xlarge} {
        visibility: hidden;
        opacity: 0;
      }
      @media ${theme.media.xxlarge} {
        visibility: hidden;
        opacity: 0;
      }
    `}

    ${isDisplay === 'xsmall' &&
    css`
      @media ${theme.media.xsmall} {
        display: none;
      }
    `}

    ${isDisplay === 'small' &&
    css`
      @media ${theme.media.xsmall} {
        display: none;
      }
      @media ${theme.media.small} {
        display: none;
      }
    `}

    ${isDisplay === 'medium' &&
    css`
      @media ${theme.media.xsmall} {
        display: none;
      }
      @media ${theme.media.small} {
        display: none;
      }
      @media ${theme.media.medium} {
        display: none;
      }
    `}

    ${isDisplay === 'large' &&
    css`
      @media ${theme.media.xsmall} {
        display: none;
      }
      @media ${theme.media.small} {
        display: none;
      }
      @media ${theme.media.medium} {
        display: none;
      }
      @media ${theme.media.large} {
        display: none;
      }
    `}

    ${isDisplay === 'xlarge' &&
    css`
      @media ${theme.media.xsmall} {
        display: none;
      }
      @media ${theme.media.small} {
        display: none;
      }
      @media ${theme.media.medium} {
        display: none;
      }
      @media ${theme.media.large} {
        display: none;
      }
      @media ${theme.media.xlarge} {
        display: none;
      }
    `}

    ${isDisplay === 'xxlarge' &&
    css`
      @media ${theme.media.xsmall} {
        display: none;
      }
      @media ${theme.media.small} {
        display: none;
      }
      @media ${theme.media.medium} {
        display: none;
      }
      @media ${theme.media.large} {
        display: none;
      }
      @media ${theme.media.xlarge} {
        display: none;
      }
      @media ${theme.media.xxlarge} {
        display: none;
      }
    `}

    ${paddingX &&
    css`
      padding-left: ${THEME_SPACE_DEFAULT[paddingX]};
      padding-right: ${THEME_SPACE_DEFAULT[paddingX]};
    `}

    ${paddingY &&
    css`
      padding-top: ${THEME_SPACE_DEFAULT[paddingY]};
      padding-bottom: ${THEME_SPACE_DEFAULT[paddingY]};
    `}

    ${marginX &&
    css`
      margin-left: ${THEME_SPACE_DEFAULT[marginX]};
      margin-right: ${THEME_SPACE_DEFAULT[marginX]};
    `}

    ${marginY &&
    css`
      margin-top: ${THEME_SPACE_DEFAULT[marginY]};
      margin-bottom: ${THEME_SPACE_DEFAULT[marginY]};
    `}

    ${direction &&
    css`
      display: flex;
      flex-direction: ${direction && THEME_FLEX_DEFAULT[direction]};
    `}

    ${aitems &&
    css`
      display: flex;
      align-items: ${aitems && THEME_FLEX_DEFAULT[aitems]};
    `}

    ${jcontent &&
    css`
      display: flex;
      justify-content: ${jcontent && THEME_FLEX_DEFAULT[jcontent]};
    `}

    ${media === 'media' &&
    css`
      grid-template-columns: 1fr;
      gap: 3px;
      background-color: red;
      @media ${theme.media.small} {
        grid-template-columns: 1fr;
        background-color: green;
        align-items: center;
        justify-content: center;
      }

      @media ${theme.media.xsmall} {
        grid-template-columns: 1fr;
        background-color: green;
        align-items: center;
        justify-content: center;
      }

      @media ${theme.media.medium} {
        display: flex;
        grid-template-columns: 1fr 1fr;
        flex-wrap: wrap;
        background-color: blue;
        justify-content: inherit;
        align-items: inherit;
      }
      @media ${theme.media.large} {
        grid-template-columns: 1fr;
        background-color: yellow;
      }
      @media ${theme.media.xlarge} {
        grid-template-columns: 1fr;
        background-color: black;
      }
      @media ${theme.media.xxlarge} {
        grid-template-columns: 1fr;
        background-color: pink;
      }
    `}

    ${media === 'xsmall' &&
    css`
      grid-template-columns: 1fr;
      gap: 3px;
      background-color: red;
      @media ${theme.media.small} {
        grid-template-columns: 1fr;
        background-color: green;
      }

      @media ${theme.media.xsmall} {
        grid-template-columns: 1fr;
        background-color: green;
      }

      @media ${theme.media.medium} {
        display: flex;
        grid-template-columns: 1fr 1fr;
        flex-wrap: wrap;
        background-color: blue;
      }
      @media ${theme.media.large} {
        grid-template-columns: 1fr;
        background-color: yellow;
      }
      @media ${theme.media.xlarge} {
        grid-template-columns: 1fr;
        background-color: black;
      }
      @media ${theme.media.xxlarge} {
        grid-template-columns: 1fr;
        background-color: pink;
      }
    `}

    ${media === 'small' &&
    css`
      /* grid-template-columns: 1fr; */
      width: 20.75%;
      gap: 3px;
      background-color: red;

      @media ${theme.media.xsmall} {
        grid-template-columns: 1fr;
        background-color: green;
      }
      @media ${theme.media.small} {
        grid-template-columns: 1fr;
        background-color: green;
      }
      @media ${theme.media.medium} {
        display: flex;
        /* grid-template-columns: 1fr 1fr; */
        width: 33%;
        flex-wrap: wrap;
        background-color: blue;
      }
      @media ${theme.media.large} {
        /* grid-template-columns: 1fr; */
        width: 48.5%;
        background-color: yellow;
      }
      @media ${theme.media.xlarge} {
        grid-template-columns: 1fr;
        background-color: black;
      }
      @media ${theme.media.xxlarge} {
        grid-template-columns: 1fr;
        background-color: pink;
      }
    `}

    ${media === 'medium' &&
    css`
      /* grid-template-columns: 1fr; */
      width: 33%;
      gap: 3px;
      background-color: red;
      flex-wrap: wrap;
      grid-gap: 10px;
      @media ${theme.media.small} {
        grid-template-columns: 1fr;
        background-color: green;
        flex-wrap: wrap;
        grid-gap: 10px;
      }

      @media ${theme.media.xsmall} {
        grid-template-columns: 1fr;
        background-color: green;
        flex-wrap: wrap;
        grid-gap: 10px;
      }

      @media ${theme.media.medium} {
        grid-template-columns: repeat(2, 1fr);
        background-color: blue;
        flex-wrap: nowrap;
        grid-gap: 10px;
      }
      @media ${theme.media.large} {
        grid-template-columns: 1fr;
        flex-wrap: nowrap;
        grid-gap: 10px;
        background-color: yellow;
      }
      @media ${theme.media.xlarge} {
        grid-template-columns: 1fr;
        flex-wrap: nowrap;
        grid-gap: 10px;
        background-color: black;
      }
      @media ${theme.media.xxlarge} {
        grid-template-columns: 1fr;
        flex-wrap: nowrap;
        grid-gap: 10px;
        background-color: pink;
      }
    `}

    ${media === 'large' &&
    css`
      /* grid-template-columns: 1fr; */
      width: 48.5%;
      gap: 3px;
      background-color: red;
      @media ${theme.media.xsmall} {
        grid-template-columns: 1fr;
        flex-wrap: wrap;
        background-color: green;
      }
      @media ${theme.media.small} {
        display: flex;
        grid-template-columns: 1fr;
        flex-wrap: wrap;
        background-color: green;
      }
      @media ${theme.media.medium} {
        display: flex;
        grid-template-columns: 1fr 1fr;
        flex-wrap: wrap;
        background-color: blue;
      }
      @media ${theme.media.large} {
        grid-template-columns: repeat(4, 1fr);
        background-color: yellow;
      }
      @media ${theme.media.xlarge} {
        grid-template-columns: 1fr;
        background-color: black;
      }
      @media ${theme.media.xxlarge} {
        grid-template-columns: 1fr;
        background-color: pink;
      }
    `}

    ${media === 'xlarge' &&
    css`
      grid-template-columns: 1fr;
      gap: 3px;
      background-color: red;
      @media ${theme.media.small} {
        grid-template-columns: 1fr;
        background-color: green;
      }

      @media ${theme.media.xsmall} {
        grid-template-columns: 1fr;
        background-color: green;
      }

      @media ${theme.media.medium} {
        display: flex;
        grid-template-columns: 1fr 1fr;
        flex-wrap: wrap;
        background-color: blue;
      }
      @media ${theme.media.large} {
        grid-template-columns: 1fr;
        background-color: yellow;
      }
      @media ${theme.media.xlarge} {
        grid-template-columns: 1fr;
        background-color: black;
      }
      @media ${theme.media.xxlarge} {
        grid-template-columns: 1fr;
        background-color: pink;
      }
    `}

    ${media === 'xxlarge' &&
    css`
      grid-template-columns: 1fr;
      gap: 3px;
      background-color: red;
      @media ${theme.media.small} {
        grid-template-columns: 1fr;
        background-color: green;
      }

      @media ${theme.media.xsmall} {
        grid-template-columns: 1fr;
        background-color: green;
      }

      @media ${theme.media.medium} {
        display: flex;
        grid-template-columns: 1fr 1fr;
        flex-wrap: wrap;
        background-color: blue;
      }
      @media ${theme.media.large} {
        grid-template-columns: 1fr;
        background-color: yellow;
      }
      @media ${theme.media.xlarge} {
        grid-template-columns: 1fr;
        background-color: black;
      }
      @media ${theme.media.xxlarge} {
        grid-template-columns: 1fr;
        background-color: pink;
      }
    `}
  `}

  &__full {
    width: 100%;
    margin: 0;

    @media (min-width: $breakpoints-sm__min) and (max-width: $breakpoints-sm__max) {
      width: 100%;
      text-align: center !important;
    }
  }
  &__1152 {
    width: 75%;
  }
  &__1000 {
    width: 70%;
  }

  /* Para três BOX */
  &__forthree {
    width: 64%;
  }
  &__forthree--small {
    width: 30%;
  }
`;
