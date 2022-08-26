import {
  borderDefault,
  isBoxShadowDefault,
  isImgRadiusDefault,
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
    bgtext,
    fontSize,
    direction,
    jcontent,
    aitems,
    padding,
    paddingX,
    paddingY,
    margin,
    marginTop,
    marginBottom,
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
    width,
    media,
    visibility,
    gap,
    radiusTopLeft,
    radiusTopRight,
    radiusBottomLeft,
    radiusBottomRight,
    isGridRepeat,
    display,
    isBorder,
    border,
    ...props
  }) => css`
    /* display: grid; */
    width: ${width && THEME_SPACE_DEFAULT[width]};
    height: ${height && THEME_SPACE_DEFAULT[height]};
    display ${display && display};
    border-radius: ${props.radius && THEME_SPACE_DEFAULT[props.radius]};
    border-top-left-radius: ${
      radiusTopLeft && THEME_SPACE_DEFAULT[radiusTopLeft]
    };
    border-top-right-radius: ${
      radiusTopRight && THEME_SPACE_DEFAULT[radiusTopRight]
    };
    border-bottom-left-radius: ${
      radiusBottomLeft && THEME_SPACE_DEFAULT[radiusBottomLeft]
    };
    border-bottom-right-radius: ${
      radiusBottomRight && THEME_SPACE_DEFAULT[radiusBottomRight]
    };
    /* align-items: center;
    justify-content: inherit; */


    font-size: ${fontSize && THEME_SIZE_DEFAULT[fontSize]};
    padding: ${padding && THEME_SPACE_DEFAULT[padding]};
    margin: ${margin && THEME_SPACE_DEFAULT[margin]};
    margin-top: ${marginTop && THEME_SPACE_DEFAULT[marginTop]};
    margin-bottom: ${marginBottom && THEME_SPACE_DEFAULT[marginBottom]};
    gap: ${gap && THEME_SPACE_DEFAULT[gap]};
    flex-wrap: ${props.flexWrap && THEME_FLEX_DEFAULT[props.flexWrap]};
    flex-grow: ${props.flexGrow && props.flexGrow};
    align-self: ${props.alignSelf && THEME_FLEX_DEFAULT[props.alignSelf]};
    ${borderDefault(isBorder ? isBorder : false)}
    ${isImgRadiusDefault(props.isImgRadius ? props.isImgRadius : false)}
    ${isBoxShadowDefault(props.isBoxShadow ? props.isBoxShadow : false)}

    ${
      props.textcolor &&
      css`
        color: ${props.textcolor && THEME_COLORS_DEFAULT[props.textcolor]};
      `
    }

    ${
      props.bgcolor &&
      css`
        background-color: ${props.bgcolor &&
        THEME_COLORS_DEFAULT[props.bgcolor]};
      `
    }

    ${
      border &&
      css`
        border: 1px solid ${border && THEME_COLORS_DEFAULT[border]};
      `
    }

    ${
      padding &&
      css`
        @media ${theme.media.xsmall} {
          padding: 1rem;
          /* grid-template-columns: 1fr;
          flex-wrap: wrap;
          background-color: green; */
        }
        @media ${theme.media.small} {
          ${padding &&
          css`
            padding: 1rem;
          `}/* display: grid;
          grid-template-columns: repeat(${isGridRepeat}, 1fr);
          flex-wrap: wrap;
          background-color: red;
          justify-content: center;
          align-items: center; */
        }

        /* @media ${theme.media.medium} {
          grid-template-columns: 1fr 1fr;
          flex-wrap: wrap;
          background-color: blue;
        }  */
        /* @media ${theme.media.large} {
          grid-template-columns: repeat(2, 1fr);
          flex-wrap: wrap;
          background-color: yellow;
        } */
        /* @media ${theme.media.xlarge} {
          grid-template-columns: 1fr;
          background-color: black;
        } */
        /* @media ${theme.media.xxlarge} {
          grid-template-columns: 1fr;
          background-color: pink;
        } */
      `
    }

    ${
      isVisibility === 'xsmall' &&
      css`
        @media ${theme.media.xsmall} {
          visibility: hidden;
          opacity: 0;
        }
      `
    }

    ${
      isVisibility === 'small' &&
      css`
        @media ${theme.media.xsmall} {
          visibility: hidden;
          opacity: 0;
        }
        @media ${theme.media.small} {
          visibility: hidden;
          opacity: 0;
        }
      `
    }

    ${
      isVisibility === 'medium' &&
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
      `
    }

    ${
      isVisibility === 'large' &&
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
      `
    }

    ${
      isVisibility === 'xlarge' &&
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
      `
    }

    ${
      isVisibility === 'xxlarge' &&
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
      `
    }

    ${
      isDisplay === 'xsmall' &&
      css`
        @media ${theme.media.xsmall} {
          display: none;
        }
      `
    }

    ${
      isDisplay === 'small' &&
      css`
        @media ${theme.media.xsmall} {
          display: none;
        }
        @media ${theme.media.small} {
          display: none;
        }
      `
    }

    ${
      isDisplay === 'medium' &&
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
      `
    }

    ${
      isDisplay === 'large' &&
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
      `
    }

    ${
      isDisplay === 'xlarge' &&
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
      `
    }

    ${
      isDisplay === 'xxlarge' &&
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
      `
    }



    ${
      paddingX &&
      css`
        padding-left: ${THEME_SPACE_DEFAULT[paddingX]};
        padding-right: ${THEME_SPACE_DEFAULT[paddingX]};
      `
    }

    ${
      paddingY &&
      css`
        padding-top: ${THEME_SPACE_DEFAULT[paddingY]};
        padding-bottom: ${THEME_SPACE_DEFAULT[paddingY]};
      `
    }

    ${
      marginX &&
      css`
        margin-left: ${THEME_SPACE_DEFAULT[marginX]};
        margin-right: ${THEME_SPACE_DEFAULT[marginX]};
      `
    }

    ${
      marginY &&
      css`
        margin-top: ${THEME_SPACE_DEFAULT[marginY]};
        margin-bottom: ${THEME_SPACE_DEFAULT[marginY]};
      `
    }

    ${
      direction &&
      css`
        flex-direction: ${direction && THEME_FLEX_DEFAULT[direction]};
        /* display: grid;
        flex-direction: ${direction && THEME_FLEX_DEFAULT[direction]};
        grid-template-columns: 1fr;
        gap: 3px; */
        /* background-color: red; */
        /* @media ${theme.media.small} {
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
          display: grid;
          grid-template-columns: 1fr;
          background-color: yellow;
          flex-wrap: wrap;
        }
        @media ${theme.media.xlarge} {
          grid-template-columns: 1fr;
          background-color: black;
        }
        @media ${theme.media.xxlarge} {
          grid-template-columns: 1fr;
          background-color: pink;
        } */
      `
    }

    ${
      aitems &&
      css`
        display: flex;
        align-items: ${aitems && THEME_FLEX_DEFAULT[aitems]};
      `
    }

    ${
      jcontent &&
      css`
        display: flex;
        justify-content: ${jcontent && THEME_FLEX_DEFAULT[jcontent]};
      `
    }

    /** Media Query */

    ${
      isGridRepeat === 1 &&
      css`
        display: flex;
        grid-template-columns: 1fr;
        justify-content: center;
        align-items: center;
        /* background-color: orange; */
      `
    }

    ${
      isGridRepeat === 2 &&
      css`
        @media ${theme.media.xsmall} {
          display: grid;
          flex-wrap: wrap;
          place-items: center;
          grid-template-columns: 1fr;
          /* display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center; */
          /* background-color: green; */
        }

        @media ${theme.media.small} {
          display: grid;
          flex-wrap: wrap;
          place-items: center;
          grid-template-columns: 1fr;
          /* background-color: red; */
        }

        @media ${theme.media.medium} {
          display: grid;
          flex-wrap: wrap;
          /* place-items: center; */
          grid-template-columns: repeat(2, 1fr);
          /* background-color: blue; */
        }
        @media ${theme.media.large} {
          display: grid;
          flex-wrap: wrap;
          /* place-items: center; */
          grid-template-columns: repeat(2, 1fr);
          /* background-color: blue; */
          /* background-color: yellow; */
        }
        @media ${theme.media.xlarge} {
          display: grid;
          flex-wrap: wrap;
          /* place-items: center; */
          grid-template-columns: repeat(2, 1fr);
          /* grid-template-columns: repeat(12, 1fr);
          grid-column: 1 / span 6; */
          /* background-color: blue; */
          /* background-color: black; */
          /* color: white; */
          flex-direction: ${direction && THEME_FLEX_DEFAULT[direction]};
        }
        @media ${theme.media.xxlarge} {
          display: grid;
          flex-wrap: wrap;
          /* place-items: center; */
          grid-template-columns: repeat(2, 1fr);
          flex-direction: ${direction && THEME_FLEX_DEFAULT[direction]};
          /* background-color: pink; */
        }
      `
    }

    ${
      isGridRepeat === 3 &&
      css`
        @media ${theme.media.xsmall} {
          display: grid;
          flex-wrap: wrap;
          place-items: center;
          grid-template-columns: 1fr;
          justify-content: ${jcontent
            ? THEME_FLEX_DEFAULT[jcontent]
            : 'center'};
          align-items: ${aitems ? THEME_FLEX_DEFAULT[aitems] : 'center'};
          flex-direction: ${direction
            ? THEME_FLEX_DEFAULT[direction]
            : 'column'};
          /* background-color: green; */
        }

        @media ${theme.media.small} {
          display: grid;
          flex-wrap: wrap;
          place-items: center;
          grid-template-columns: 1fr;
          justify-content: ${jcontent
            ? THEME_FLEX_DEFAULT[jcontent]
            : 'center'};
          align-items: ${aitems ? THEME_FLEX_DEFAULT[aitems] : 'center'};
          flex-direction: ${direction
            ? THEME_FLEX_DEFAULT[direction]
            : 'column'};
          /* background-color: red; */
        }

        @media ${theme.media.medium} {
          display: grid;
          flex-wrap: wrap;
          /* place-items: center; */
          /* grid-template-columns: repeat(2, 1fr); */
          grid-template-columns: 1fr;
          justify-content: ${jcontent ? THEME_FLEX_DEFAULT[jcontent] : 'spa'};
          align-items: ${aitems ? THEME_FLEX_DEFAULT[aitems] : 'space-between'};
          flex-direction: ${direction ? THEME_FLEX_DEFAULT[direction] : 'row'};
          /* background-color: blue; */
        }
        @media ${theme.media.large} {
          display: grid;
          /* place-items: center; */
          grid-template-columns: repeat(3, 1fr);
          /* background-color: yellow; */
        }

        @media ${theme.media.xlarge} {
          display: grid;
          /* place-items: center; */
          grid-template-columns: repeat(3, 1fr);
          /* background-color: rosybrown; */
        }
        @media ${theme.media.xxlarge} {
          display: grid;
          /* flex-wrap: wrap; */
          grid-template-columns: repeat(3, 1fr);
          /* background-color: pink; */
        }
      `
    }

    ${
      isGridRepeat === 4 &&
      css`
        @media ${theme.media.xsmall} {
          display: grid;
          flex-wrap: wrap;
          place-items: center;
          grid-template-columns: 1fr;
          /* background-color: green; */
        }
        @media ${theme.media.small} {
          display: grid;
          flex-wrap: wrap;
          place-items: center;
          grid-template-columns: 1fr;
          justify-content: center;
          /* background-color: red; */
        }

        @media ${theme.media.medium} {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          flex-wrap: wrap;
          justify-content: center;
          /* background-color: blue; */
        }
        @media ${theme.media.large} {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          flex-wrap: nowrap;
          justify-content: center;
          /* background-color: yellow; */
        }
        @media ${theme.media.xlarge} {
          display: grid;
          flex-wrap: wrap;
          grid-template-columns: repeat(4, 1fr);
          justify-content: space-between;
          /* background-color: rosybrown; */
        }
        @media ${theme.media.xxlarge} {
          display: grid;
          flex-wrap: wrap;
          grid-template-columns: repeat(4, 1fr);
          justify-content: space-between;
          /* background-color: pink; */
        }
      `
    }

    ${
      isGridRepeat === 5 &&
      css`
        @media ${theme.media.xsmall} {
          display: grid;
          flex-wrap: wrap;
          place-items: center;
          grid-template-columns: 1fr;
          background-color: green;
        }

        @media ${theme.media.small} {
          display: grid;
          flex-wrap: wrap;
          place-items: center;
          background-color: red;
        }

        @media ${theme.media.medium} {
          display: grid;
          flex-wrap: wrap;
          /* place-items: center; */
          grid-template-columns: repeat(5, 1fr);
          background-color: blue;
        }
        @media ${theme.media.large} {
          display: grid;
          flex-wrap: wrap;
          /* place-items: center; */
          grid-template-columns: repeat(5, 1fr);
          background-color: yellow;
        }
        @media ${theme.media.xlarge} {
          display: grid;
          flex-wrap: wrap;
          /* place-items: center; */
          grid-template-columns: repeat(5, 1fr);
          background-color: rosybrown;
        }
        @media ${theme.media.xxlarge} {
          display: grid;
          flex-wrap: wrap;
          grid-template-columns: repeat(5, 1fr);
          background-color: pink;
          justify-content: space-between;
        }
      `
    }

${
  isGridRepeat === 6 &&
  css`
    @media ${theme.media.xsmall} {
      display: grid;
      flex-wrap: wrap;
      place-items: center;
      grid-template-columns: 1fr;
      background-color: green;
    }

    @media ${theme.media.small} {
      display: grid;
      flex-wrap: wrap;
      place-items: center;
      background-color: red;
    }

    @media ${theme.media.medium} {
      display: grid;
      flex-wrap: wrap;
      /* place-items: center; */
      grid-template-columns: repeat(6, 1fr);
      background-color: blue;
    }
    @media ${theme.media.large} {
      display: grid;
      flex-wrap: wrap;
      /* place-items: center; */
      grid-template-columns: repeat(6, 1fr);
      background-color: yellow;
    }
    @media ${theme.media.xlarge} {
      display: grid;
      flex-wrap: wrap;
      /* place-items: center; */
      grid-template-columns: repeat(6, 1fr);
      background-color: rosybrown;
    }
    @media ${theme.media.xxlarge} {
      display: grid;
      flex-wrap: wrap;
      grid-template-columns: repeat(6, 1fr);
      background-color: pink;
      justify-content: space-between;
    }
  `
}

${
  isGridRepeat === 7 &&
  css`
    @media ${theme.media.xsmall} {
      display: grid;
      flex-wrap: wrap;
      place-items: center;
      grid-template-columns: 1fr;
      background-color: green;
    }

    @media ${theme.media.small} {
      display: grid;
      flex-wrap: wrap;
      place-items: center;
      background-color: red;
    }

    @media ${theme.media.medium} {
      display: grid;
      flex-wrap: wrap;
      place-items: center;
      grid-template-columns: 1fr;
      /* grid-template-columns: repeat(12, 1fr);
      grid-column: 1 / span ${isGridRepeat}; */
      background-color: blue;
    }
    @media ${theme.media.large} {
      display: grid;
      flex-wrap: wrap;
      /* place-items: center; */
      grid-template-columns: repeat(7, 1fr);
      background-color: yellow;
    }
    @media ${theme.media.xlarge} {
      display: grid;
      flex-wrap: wrap;
      /* place-items: center; */
      grid-template-columns: repeat(7, 1fr);
      background-color: rosybrown;
    }
    @media ${theme.media.xxlarge} {
      display: grid;
      flex-wrap: wrap;
      grid-template-columns: repeat(7, 1fr);
      background-color: pink;
      justify-content: space-between;
    }
  `
}

  `}
`;
