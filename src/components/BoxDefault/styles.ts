import {
  isBorderDefault,
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
    width = 'base100p',
    media,
    visibility,
    gap,
    radiusTopLeft,
    radiusTopRight,
    radiusBottomLeft,
    radiusBottomRight,
    isGridRepeat,
    isBorder,
    border,
    ...props
  }) => css`
    display: ${props.display && props.display};
    grid-area: ${props.gridArea};
    width: ${width && THEME_SPACE_DEFAULT[width]};
    height: ${height && THEME_SPACE_DEFAULT[height]};
    border-radius: ${props.radius && THEME_SPACE_DEFAULT[props.radius]};
    border-top-left-radius: ${radiusTopLeft &&
    THEME_SPACE_DEFAULT[radiusTopLeft]};
    border-top-right-radius: ${radiusTopRight &&
    THEME_SPACE_DEFAULT[radiusTopRight]};
    border-bottom-left-radius: ${radiusBottomLeft &&
    THEME_SPACE_DEFAULT[radiusBottomLeft]};
    border-bottom-right-radius: ${radiusBottomRight &&
    THEME_SPACE_DEFAULT[radiusBottomRight]};
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
    flex-basis: ${props.flexBasis && THEME_SPACE_DEFAULT[props.flexBasis]};
    ${isBorderDefault(isBorder ? isBorder : false)}
    ${isImgRadiusDefault(props.isImgRadius ? props.isImgRadius : false)}
    ${isBoxShadowDefault(props.isBoxShadow ? props.isBoxShadow : false)}
    ${props.gridColumnsDefault};
    z-index: ${props.zIndex && props.zIndex};

    /* props isWidth */
    ${props.isWidth === 'isWidthR' &&
    css`
      width: calc(${props.widthCalc} * ${props.widthR + 'rem'});
    `}
    ${props.isWidth === 'isWidthP' &&
    css`
      width: calc(${props.widthCalc} * ${props.widthP + '%'});
    `}
    ${props.isWidth === 'isWidthPX' &&
    css`
      width: calc(${props.widthCalc} * ${props.widthPX + 'px'});
    `}
    ${props.isWidth === 'isWidthVW' &&
    css`
      width: calc(${props.widthCalc} * ${props.widthVW + 'vw'});
    `}
    ${props.isWidth === 'isWidthVH' &&
    css`
      width: calc(${props.widthCalc} * ${props.widthVH + 'vh'});
    `}

     /* props isHeight */
    ${props.isHeight === 'isHeightR' &&
    css`
      height: calc(${props.heightCalc} * ${props.heightR + 'rem'});
    `}
    ${props.isHeight === 'isHeightP' &&
    css`
      height: calc(${props.heightCalc} * ${props.heightP + '%'});
    `}
    ${props.isHeight === 'isHeightPX' &&
    css`
      height: calc(${props.heightCalc} * ${props.heightPX + 'px'});
    `}
    ${props.isHeight === 'isHeightVW' &&
    css`
      height: calc(${props.heightCalc} * ${props.heightVW + 'vw'});
    `}
    ${props.isHeight === 'isHeightVH' &&
    css`
      height: calc(${props.heightCalc} * ${props.heightVH + 'vh'});
    `}

    /* props isBorderDefault */
    ${props.isBorderDefault &&
    css`
      border: ${props.borderWidth}px ${props.borderStyle}
        ${props.borderColor && THEME_COLORS_DEFAULT[props.borderColor]};
      border-top-color: ${props.borderTopColor &&
      THEME_COLORS_DEFAULT[props.borderTopColor]};
      border-top-style: ${props.borderTopStyle};
      border-top-width: ${props.borderTopWidth};
      border-right-color: ${props.borderRightColor &&
      THEME_COLORS_DEFAULT[props.borderRightColor]};
      border-right-style: ${props.borderRightStyle};
      border-right-width: ${props.borderRightWidth};
      border-bottom-color: ${props.borderBottomColor &&
      THEME_COLORS_DEFAULT[props.borderBottomColor]};
      border-bottom-style: ${props.borderBottomStyle};
      border-bottom-width: ${props.borderBottomWidth};
      border-left-color: ${props.borderLeftColor &&
      THEME_COLORS_DEFAULT[props.borderLeftColor]};
      border-left-style: ${props.borderLeftStyle};
      border-left-width: ${props.borderLeftWidth};
      border-image-source: initial;
      border-image-slice: initial;
      border-image-width: initial;
      border-image-outset: initial;
      border-image-repeat: initial;
    `}

    ${props.isAfter &&
    css`
      &::after {
        content: '';
        position: ${props.afterPosition ? props.afterPosition : ''};
        z-index: ${props.afterZindex ? props.afterZindex : ''};
        top: ${props.afterTop && props.afterTop};
        bottom: ${props.afterBottom && props.afterBottom};
        left: ${props.afterLeft && props.afterLeft};
        right: ${props.afterRight && props.afterRight};
        width: ${props.afterWidth && props.afterWidth};
        height: ${props.afterHeight && props.afterHeight};
        background-image: url(${props.afterBackgroundImg});
        background-color: ${props.afterBackgroundColor &&
        THEME_COLORS_DEFAULT[props.afterBackgroundColor]};
        clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 100%, 0% 0%);
      }
    `}

    & svg {
      background-color: ${props.iconBgcolor &&
      THEME_COLORS_DEFAULT[props.iconBgcolor]};
      color: ${props.iconColor && THEME_COLORS_DEFAULT[props.iconColor]};
      font-size: ${props.iconSize && THEME_SPACE_DEFAULT[props.iconSize]};
    }

    ${props.isGridRow &&
    css`
      grid-row: ${props.gridRowStartSpan} ${props.gridRowStart} /
        ${props.gridRowEndSpan} ${props.gridRowEnd};
    `}

    ${props.isGridColumn &&
    css`
      grid-column: ${props.gridColumnStartSpan} ${props.gridColumnStart} /
        ${props.gridColumnEndSpan} ${props.gridColumnEnd};
    `}

    ${props.textcolor &&
    css`
      color: ${props.textcolor && THEME_COLORS_DEFAULT[props.textcolor]};
    `}

    ${props.bgcolor &&
    css`
      background-color: ${props.bgcolor && THEME_COLORS_DEFAULT[props.bgcolor]};
    `}

    ${border &&
    css`
      border: 1px solid ${border && THEME_COLORS_DEFAULT[border]};
    `}

    ${padding &&
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

    /** Media Query */

    ${isGridRepeat === 1 &&
    css`
      display: flex;
      grid-template-columns: 1fr;
      justify-content: center;
      align-items: center;
      /* background-color: orange; */
    `}

    ${isGridRepeat === 2 &&
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
    `}

    ${isGridRepeat === 3 &&
    css`
      @media ${theme.media.xsmall} {
        display: grid;
        flex-wrap: wrap;
        place-items: center;
        grid-template-columns: 1fr;
        justify-content: ${jcontent ? THEME_FLEX_DEFAULT[jcontent] : 'center'};
        align-items: ${aitems ? THEME_FLEX_DEFAULT[aitems] : 'center'};
        flex-direction: ${direction ? THEME_FLEX_DEFAULT[direction] : 'column'};
        /* background-color: green; */
      }

      @media ${theme.media.small} {
        display: grid;
        flex-wrap: wrap;
        place-items: center;
        grid-template-columns: 1fr;
        justify-content: ${jcontent ? THEME_FLEX_DEFAULT[jcontent] : 'center'};
        align-items: ${aitems ? THEME_FLEX_DEFAULT[aitems] : 'center'};
        flex-direction: ${direction ? THEME_FLEX_DEFAULT[direction] : 'column'};
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
    `}

    ${isGridRepeat === 4 &&
    css`
      @media ${theme.media.xsmall} {
        display: grid;
        flex-wrap: wrap;
        place-items: center;
        grid-template-columns: 1fr;
        justify-content: ${jcontent ? THEME_FLEX_DEFAULT[jcontent] : 'center'};
        align-items: ${aitems ? THEME_FLEX_DEFAULT[aitems] : 'center'};
        flex-direction: ${direction ? THEME_FLEX_DEFAULT[direction] : 'column'};
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
    `}

    ${isGridRepeat === 5 &&
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
    `}

    ${isGridRepeat === 6 &&
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
    `}

    ${isGridRepeat === 7 &&
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
    `}

    ${props.gridTemplateColumns === 1 &&
    css`
      display: flex;
      grid-template-columns: 1fr;
      justify-content: center;
      align-items: center;
      /* background-color: orange; */
    `}

    ${props.gridTemplateColumns === 2 &&
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
    `}

    ${props.gridTemplateColumns === 3 &&
    css`
      @media ${theme.media.xsmall} {
        display: grid;
        flex-wrap: wrap;
        place-items: center;
        grid-template-columns: 1fr;
        justify-content: ${jcontent ? THEME_FLEX_DEFAULT[jcontent] : 'center'};
        align-items: ${aitems ? THEME_FLEX_DEFAULT[aitems] : 'center'};
        flex-direction: ${direction ? THEME_FLEX_DEFAULT[direction] : 'column'};
        /* background-color: green; */
      }

      @media ${theme.media.small} {
        display: grid;
        flex-wrap: wrap;
        place-items: center;
        grid-template-columns: 1fr;
        justify-content: ${jcontent ? THEME_FLEX_DEFAULT[jcontent] : 'center'};
        align-items: ${aitems ? THEME_FLEX_DEFAULT[aitems] : 'center'};
        flex-direction: ${direction ? THEME_FLEX_DEFAULT[direction] : 'column'};
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
        grid-template-rows: repeat(${props.gridTemplateRows}, 3rem);
        /* background-color: pink; */
      }
    `}

    ${props.gridTemplateColumns === 4 &&
    css`
        height: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
        place-items: center;
        gap: 2rem;
        /* @media ${theme.media.xsmall} {
          display: grid;
          flex-wrap: wrap;
          place-items: center;
          grid-template-columns: 1fr;
          justify-content: ${
            jcontent ? THEME_FLEX_DEFAULT[jcontent] : 'center'
          };
          align-items: ${aitems ? THEME_FLEX_DEFAULT[aitems] : 'center'};
          flex-direction: ${
            direction ? THEME_FLEX_DEFAULT[direction] : 'column'
          };
          /* background-color: green; */
        }

        /* @media ${theme.media.small} {
          display: grid;
          flex-wrap: wrap;
          place-items: center;
          grid-template-columns: 1fr;
          /* background-color: red; */
          justify-content: center;
        } */

        /* @media ${theme.media.medium} {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          flex-wrap: wrap;
          justify-content: center;
          /* background-color: blue; */
        } */

        /* @media ${theme.media.large} {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          flex-wrap: nowrap;
          justify-content: center;
          /* background-color: yellow; */
        } */
        /* @media ${theme.media.xlarge} {
          display: grid;
          flex-wrap: wrap;
          grid-template-columns: repeat(4, 1fr);
          justify-content: space-between;
          /* background-color: rosybrown; */
        } */
        /* @media ${theme.media.xxlarge} {
          display: grid;
          flex-wrap: wrap;
          grid-template-columns: repeat(4, 1fr);
          justify-content: space-between;
          /* background-color: pink; */
        } */ */
      `}

    ${props.gridTemplateColumns === 5 &&
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
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(${props.gridTemplateRows}, auto);
        /* background-color: yellow; */
      }
      @media ${theme.media.xlarge} {
        display: grid;
        flex-wrap: wrap;
        /* place-items: center; */
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(${props.gridTemplateRows}, auto);
        /* background-color: rosybrown; */
      }
      @media ${theme.media.xxlarge} {
        display: grid;
        flex-wrap: wrap;
        grid-template-columns: repeat(5, 1fr);
        justify-content: space-between;
        /* background-color: pink; */
      }
    `}

  ${props.gridTemplateColumns === 6 &&
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
    `}

  ${props.gridTemplateColumns === 7 &&
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
    `}

  ${props.gridTemplateColumns &&
    css`
      @media ${theme.media.xsmall} {
        display: grid;
        flex-wrap: wrap;
        place-items: center;
        grid-template-columns: repeat(${props.gridTemplateColumns}, 1fr);
        grid-template-rows: repeat(${props.gridTemplateRows}, auto);
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
        grid-template-columns:
          [container-start] repeat(
            ${props.gridTemplateColumns},
            minmax(min-content)
          )
          [container-end];
        grid-template-rows: repeat(${props.gridTemplateRows}, min-content);
        background-color: rosybrown;
        /* justify-content: center; */
      }
      @media ${theme.media.xxlarge} {
        display: grid;
        grid-template-columns:
          [container-start] repeat(
            ${props.gridTemplateColumns},
            minmax(min-content)
          )
          [container-end];
        grid-template-rows: repeat(${props.gridTemplateRows}, min-content);
        background-color: pink;
      }
    `}

    ${props.isGridColumn &&
    css`
      @media ${theme.media.xsmall} {
        display: grid;
        grid-row: ${props.gridRowStartSpan} / ${props.gridRowStart} /
          ${props.gridRowEndSpan} ${props.gridRowEnd};
        grid-column: ${props.gridColumnStartSpan} / ${props.gridColumnStart} /
          ${props.gridColumnEndSpan} ${props.gridColumnEnd};
      }

      @media ${theme.media.small} {
      }

      @media ${theme.media.medium} {
      }
      @media ${theme.media.large} {
      }
      @media ${theme.media.xlarge} {
      }
      @media ${theme.media.xxlarge} {
      }
    `}
  `}
`;
