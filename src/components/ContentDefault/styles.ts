import {
  THEME_COLORS_DEFAULT,
  THEME_FLEX_DEFAULT,
  THEME_SIZE_DEFAULT,
  THEME_SPACE_DEFAULT
} from '@assets/styles/themes/ThemeType';
import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import styled, { css } from 'styled-components';

export const ContentDefaultStyle = styled.div<TypeDefault>`
  ${({
    theme,
    bgcolor,
    bgtext,
    as,
    fontSize,
    direction,
    jcontent,
    aitems,
    gap,
    padding,
    paddingX,
    paddingY,
    margin,
    marginX,
    marginY,
    gridRepeat,
    isVisibility,
    isDisplay,
    isHeight,
    media
  }) => css`
    width: 90%;
    height: 100%;
    display: flex;
    flex: 1 1;
    margin: 0 auto;
    color: ${bgtext && THEME_COLORS_DEFAULT[bgtext]};
    background-color: ${bgcolor && THEME_COLORS_DEFAULT[bgcolor]};
    font-size: ${fontSize && THEME_SIZE_DEFAULT[fontSize]};
    padding: ${padding && THEME_SPACE_DEFAULT[padding]};
    margin: ${margin && THEME_SPACE_DEFAULT[margin]};
    gap: ${gap && THEME_SPACE_DEFAULT[gap]};

    ${gridRepeat &&
    css`
      grid-template-columns: repeat(${gridRepeat}, 1fr);
    `}

    ${isHeight &&
    css`
      height: ${isHeight};
    `}

    ${isVisibility &&
    css`
      visibility: hidden;
      opacity: 0;
    `}

    ${isDisplay &&
    css`
      display: none;
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
      flex-direction: ${direction && THEME_FLEX_DEFAULT[direction]};
    `}

    ${aitems &&
    css`
      align-items: ${aitems && THEME_FLEX_DEFAULT[aitems]};
    `}

    ${jcontent &&
    css`
      justify-content: ${jcontent && THEME_FLEX_DEFAULT[jcontent]};
    `}

    ${media === 'media' &&
    css`
      @media ${theme.media.xsmall} {
        grid-template-columns: 1fr;
        /* flex-wrap: wrap; */
        /* background-color: red; */
        gap: 3px;
        justify-content: center;
        align-items: center;
      }

      @media ${theme.media.small} {
        grid-template-columns: 1fr;
        /* flex-wrap: wrap; */
        /* background-color: green; */
        gap: 3px;
        justify-content: center;
        align-items: center;
      }

      @media ${theme.media.medium} {
        display: flex;
        grid-template-columns: 1fr;
        /* flex-wrap: wrap; */
        /* background-color: blue; */
        gap: 3px;
        align-items: center;
        justify-content: initial;
      }
      @media ${theme.media.large} {
        grid-template-columns: 1fr;
        /* background-color: yellow; */
        gap: 3px;
        align-items: center;
        justify-content: initial;
      }
      @media ${theme.media.xlarge} {
        grid-template-columns: 1fr;
        /* background-color: black; */
        gap: 3px;
        align-items: center;
        justify-content: initial;
      }
      @media ${theme.media.xxlarge} {
        grid-template-columns: 1fr;
        gap: 3px;
        /* background-color: pink; */
        align-items: center;
        justify-content: initial;
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
      grid-template-columns: 1fr;
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

    ${media === 'medium' &&
    css`
      /* grid-column: repeat(4, 1fr); */
      width: 33%;
      gap: 3px;
      background-color: red;
      flex-wrap: nowrap;
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
        grid-template-columns: repeat(4, 1fr);
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
      @media ${theme.media.small} {
        grid-template-columns: 1fr;
        flex-wrap: wrap;
        background-color: red;
      }

      @media ${theme.media.xsmall} {
        grid-template-columns: 1fr;
        flex-wrap: wrap;
        background-color: green;
      }

      @media ${theme.media.medium} {
        grid-template-columns: 1fr 1fr;
        flex-wrap: wrap;
        background-color: blue;
      }
      @media ${theme.media.large} {
        grid-template-columns: repeat(4, ifr);
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
      @media ${theme.media.small} {
        grid-template-columns: 1fr;
        flex-wrap: wrap;
        background-color: green;
      }

      @media ${theme.media.xsmall} {
        grid-template-columns: 1fr;
        flex-wrap: wrap;
        background-color: green;
      }

      @media ${theme.media.medium} {
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
      @media ${theme.media.small} {
        grid-template-columns: 1fr;
        flex-wrap: wrap;
        background-color: green;
      }

      @media ${theme.media.xsmall} {
        grid-template-columns: 1fr;
        flex-wrap: wrap;
        background-color: green;
      }

      @media ${theme.media.medium} {
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
`;
