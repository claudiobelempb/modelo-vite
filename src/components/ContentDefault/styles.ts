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
    gap = 'base10',
    padding,
    paddingX,
    paddingY,
    margin,
    marginTop,
    marginBottom,
    marginX,
    marginY,
    isGridRepeat,
    isVisibility,
    isDisplay,
    isPosition,
    left,
    right,
    top,
    bottom,
    height,
    width,
    media,
    radius,
    radiusTopLeft,
    radiusTopRight,
    radiusBottomLeft,
    radiusBottomRight,
    flexWrap,
    ...props
  }) => css`
    display: ${props.display ? props.display : 'flex'};
    height: ${height && THEME_SPACE_DEFAULT[height]};
    width: ${width ? THEME_SPACE_DEFAULT[width] : '90%'};
    position: ${isPosition && isPosition};
    top: ${top && THEME_SPACE_DEFAULT[top]};
    bottom: ${bottom && THEME_SPACE_DEFAULT[bottom]};
    left ${left && THEME_SPACE_DEFAULT[left]};
    right: ${right && THEME_SPACE_DEFAULT[right]};
    border-radius: ${radius && THEME_SPACE_DEFAULT[radius]};
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
    margin: 0 auto;
    color: ${bgtext && THEME_COLORS_DEFAULT[bgtext]};
    background-color: ${bgcolor && THEME_COLORS_DEFAULT[bgcolor]};
    font-size: ${fontSize && THEME_SIZE_DEFAULT[fontSize]};
    padding: ${padding && THEME_SPACE_DEFAULT[padding]};
    margin: ${margin && THEME_SPACE_DEFAULT[margin]};
    margin-top: ${marginTop && THEME_SPACE_DEFAULT[marginTop]};
    margin-bottom: ${marginBottom && THEME_SPACE_DEFAULT[marginBottom]};
    gap: ${gap && THEME_SPACE_DEFAULT[gap]};
    flex-wrap: ${flexWrap && THEME_FLEX_DEFAULT[flexWrap]};

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
          /* background-color: yellow; */
        }
        @media ${theme.media.xlarge} {
          display: grid;
          flex-wrap: wrap;
          /* place-items: center; */
          grid-template-columns: repeat(2, 1fr);
          /* grid-template-columns: repeat(12, 1fr);
          grid-column: 1 / span 6; */
          /* background-color: black; */
          /* color: white; */
          flex-direction: ${direction && THEME_FLEX_DEFAULT[direction]};
        }
        @media ${theme.media.xxlarge} {
          display: grid;
          flex-wrap: wrap;
          /* place-items: center; */
          grid-template-columns: repeat(2, 1fr);
          /* background-color: pink; */
          flex-direction: ${direction && THEME_FLEX_DEFAULT[direction]};
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
          grid-template-columns: repeat(2, 1fr);
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
          /* background-color: red; */
          justify-content: center;
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
          place-items: center;
          flex-wrap: wrap;
          /* place-items: center; */
          grid-template-columns: repeat(2, 1fr);
          /* background-color: blue; */
        }
        @media ${theme.media.large} {
          display: grid;
          flex-wrap: wrap;
          /* place-items: center; */
          grid-template-columns: repeat(3, 1fr);
          /* background-color: yellow; */
        }
        @media ${theme.media.xlarge} {
          display: grid;
          flex-wrap: wrap;
          /* place-items: center; */
          grid-template-columns: repeat(5, 1fr);
          /* background-color: rosybrown; */
        }
        @media ${theme.media.xxlarge} {
          display: grid;
          flex-wrap: wrap;
          grid-template-columns: repeat(5, 1fr);
          justify-content: space-between;
          /* background-color: pink; */
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


    ${
      isVisibility &&
      css`
        visibility: hidden;
        opacity: 0;
      `
    }

    ${
      isDisplay &&
      css`
        display: none;
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
      `
    }

    ${
      aitems &&
      css`
        align-items: ${aitems && THEME_FLEX_DEFAULT[aitems]};
      `
    }

    ${
      jcontent &&
      css`
        justify-content: ${jcontent && THEME_FLEX_DEFAULT[jcontent]};
      `
    }
`}
`;
