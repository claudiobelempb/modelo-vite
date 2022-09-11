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
    width: ${props.width && css``};
    height: ${props.height && css``};
    border-radius: ${props.radius && css``};
    border-top-left-radius: ${radiusTopLeft &&
    THEME_SPACE_DEFAULT[radiusTopLeft]};
    border-top-right-radius: ${radiusTopRight &&
    THEME_SPACE_DEFAULT[radiusTopRight]};
    border-bottom-left-radius: ${radiusBottomLeft &&
    THEME_SPACE_DEFAULT[radiusBottomLeft]};
    border-bottom-right-radius: ${radiusBottomRight &&
    THEME_SPACE_DEFAULT[radiusBottomRight]};

    font-size: ${fontSize && THEME_SIZE_DEFAULT[fontSize]};
    padding: ${padding && THEME_SPACE_DEFAULT[padding]};
    margin: ${margin && THEME_SPACE_DEFAULT[margin]};
    gap: ${gap && THEME_SPACE_DEFAULT[gap]};
    flex-wrap: ${props.flexWrap && THEME_FLEX_DEFAULT[props.flexWrap]};
    flex-grow: ${props.flexGrow && props.flexGrow};
    align-self: ${props.alignSelf && THEME_FLEX_DEFAULT[props.alignSelf]};
    flex-basis: ${props.flexBasis && THEME_SPACE_DEFAULT[props.flexBasis]};

    ${isBorderDefault(isBorder ? isBorder : false)}
    ${isImgRadiusDefault(props.isImgRadius ? props.isImgRadius : false)}
    ${isBoxShadowDefault(props.isBoxShadow ? props.isBoxShadow : false)}
    ${props.gridColumnsDefault && props.gridColumnsDefault};
    ${props.gridRows && props.gridRows};
    z-index: ${props.zIndex && props.zIndex};

    ${props.isPar &&
    css`
      &:nth-child(2n + 1) {
        border-top: 1px solid ${theme.colors.grayLightHsl};
      }
    `}

    ${props.isImpar &&
    css`
      &:nth-child(2n) {
        border-bottom: 1px solid ${theme.colors.grayLightHsl};
      }
    `}

    ${props.paddingDynamicX &&
    props.paddingDynamicX(props.valueStatic || 1, props.valueDynamic || 2)}
    ${props.paddingDynamicY &&
    props.paddingDynamicY(props.valueStatic || 1, props.valueDynamic || 2)}
    ${props.paddingStaticY && props.paddingStaticY(props.valueStatic || 1)}
    ${props.paddingStaticX && props.paddingStaticX(props.valueStatic || 1)}

    ${props.paddingStatic &&
    props.paddingStatic(props.valueStaticH || 1, props.valueStaticW || 1)}
    ${props.paddingDynamic &&
    props.paddingDynamic(
      props.valueStaticH || 1,
      props.valueDynamiH || 1,
      props.valueStaticW || 1,
      props.valueDynamicW || 2
    )}

    ${props.paddingTop &&
    css`
      padding-top: ${props.paddingTop}rem;
    `}
    ${props.paddingBottom &&
    css`
      padding-bottom: ${props.paddingBottom}rem;
    `}
    ${props.paddingLeft &&
    css`
      padding-left: ${props.paddingLeft}rem;
    `}
    ${props.paddingRight &&
    css`
      padding-right: ${props.paddingRight}rem;
    `}

    /*MARGIN  */

    ${props.marginStatic &&
    props.marginStatic(props.valueStaticH || 1, props.valueStaticW || 1)}
    ${props.marginDynamic &&
    props.marginDynamic(
      props.valueStaticH || 1,
      props.valueDynamiH || 1,
      props.valueStaticW || 1,
      props.valueDynamicW || 2
    )}


    ${props.marginTop &&
    css`
      margin-top: ${props.marginTop}rem;
    `}
    ${props.marginBottom &&
    css`
      margin-bottom: ${props.marginBottom}rem;
    `}
    ${props.marginLeft &&
    css`
      margin-left: ${props.marginLeft}rem;
    `}
    ${props.marginRight &&
    css`
      margin-right: ${props.marginRight}rem;
    `}

    ${props.positionDefault &&
    props.positionDefault(
      props.position || 'absolute',
      props.zIndex || 1,
      props.top || '',
      props.bottom || '',
      props.left || '',
      props.right || '',
      props.width || '',
      props.height || '',
      props.backgroundImg || '',
      props.backgroundColor || 'transparent',
      props.clipPath || false
    )};

    ${props.beforeDefault &&
    props.beforeDefault(
      props.position || 'absolute',
      props.zIndex || 1,
      props.top || '',
      props.bottom || '',
      props.left || '',
      props.width || '',
      props.height || '',
      props.backgroundImg || '',
      props.backgroundColor || 'transparent',
      props.clipPath || false
    )};

    ${props.afterDefault &&
    props.afterDefault(
      props.position || 'absolute',
      props.zIndex || 1,
      props.top || '',
      props.bottom || '',
      props.left || '',
      props.width || '',
      props.height || '',
      props.backgroundImg || '',
      props.backgroundColor || 'transparent',
      props.clipPath || false
    )};

    ${props.pdx &&
    css`
      padding-top: calc(${props.psx}rem + ${props.pdx}vw);
    `}

    ${props.psx &&
    css`
      padding-top: ${props.pdx}rem;
    `}

     /*BORDER DEFAULT  */
     ${props.borderDefault &&
    props.borderDefault(
      props.borderWidth || 1,
      props.borderStyle || 'solid',
      props.borderColor || 'grayDarkHsl'
    )}

    ${props.borderDefaultTop &&
    props.borderDefaultTop(
      props.borderTopWidth || 1,
      props.borderTopStyle || 'solid',
      props.borderTopColor || 'grayDarkHsl'
    )}

    ${props.borderDefaultRight &&
    props.borderDefaultRight(
      props.borderRightWidth || 1,
      props.borderRightStyle || 'solid',
      props.borderRightColor || 'grayDarkHsl'
    )}

    ${props.borderDefaultBottom &&
    props.borderDefaultBottom(
      props.borderBottomWidth || 1,
      props.borderBottomStyle || 'solid',
      props.borderBottomColor || 'grayDarkHsl'
    )}

    ${props.borderDefaultLeft &&
    props.borderDefaultLeft(
      props.borderLeftWidth || 1,
      props.borderLeftStyle || 'solid',
      props.borderLeftColor || 'grayDarkHsl'
    )}


    /*FONT SIZE DYNAMIC */
    ${props.fontSizeDynamic &&
    props.fontSizeDynamic(props.valueStatic || 1, props.valueDynamic || 1)}
    /*FONT SIZE STATIC */
    ${props.fontSizeStatic &&
    css`
      font-size: ${props.fontSizeStatic * 1}rem;
    `}


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
        grid-template-rows: repeat(${props.gridTemplateRows}, min-content);
        background-color: green;
      }

      @media ${theme.media.small} {
        display: grid;
        grid-template-columns: repeat(${props.gridTemplateColumns}, 1fr);
        grid-template-rows: repeat(${props.gridTemplateRows}, min-content);
        background-color: red;
      }

      @media ${theme.media.medium} {
        display: grid;
        flex-wrap: wrap;
        grid-template-columns: repeat(${props.gridTemplateColumns}, 1fr);
        grid-template-rows: repeat(${props.gridTemplateRows}, min-content);
        background-color: blue;
      }
      @media ${theme.media.large} {
        display: grid;
        grid-template-columns: repeat(${props.gridTemplateColumns}, 1fr);
        grid-template-rows: repeat(${props.gridTemplateRows}, min-content);
        background-color: yellow;
      }
      @media ${theme.media.xlarge} {
        display: grid;
        grid-template-columns: repeat(${props.gridTemplateColumns}, 1fr);
        grid-template-rows: repeat(${props.gridTemplateRows}, min-content);
        background-color: rosybrown;
        /* justify-content: center; */
      }
      @media ${theme.media.xxlarge} {
        display: grid;
        grid-template-columns: repeat(${props.gridTemplateColumns}, 1fr);
        grid-template-rows: repeat(${props.gridTemplateRows}, min-content);
        background-color: pink;
      }
    `}

    ${props.isGridColumn &&
    css`
      @media ${theme.media.xsmall} {
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
