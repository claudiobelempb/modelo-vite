import {
  THEME_COLORS_DEFAULT,
  THEME_FLEX_DEFAULT,
  THEME_SIZE_DEFAULT,
  THEME_SPACE_DEFAULT,
  THEME_SPACE_DINAMIC_DEFAULT
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
    isGridRepeat,
    isVisibility,
    isDisplay,
    media,
    radius,
    radiusTopLeft,
    radiusTopRight,
    radiusBottomLeft,
    radiusBottomRight,
    flexWrap,
    ...props
  }) => css`
    display: ${props.display ? props.display : ''};
    position: ${props.position && props.position};
    grid-area: ${props.gridArea};
    width: 100%;
    height: 100%;
    ${props.width &&
    css`
      width: ${props.width && props.width};
    `}
    ${props.height &&
    css`
      height: ${props.height && props.height};
    `}
    border-radius: ${radius && THEME_SPACE_DEFAULT[radius]};
    border-top-left-radius: ${radiusTopLeft &&
    THEME_SPACE_DEFAULT[radiusTopLeft]};
    border-top-right-radius: ${radiusTopRight &&
    THEME_SPACE_DEFAULT[radiusTopRight]};
    border-bottom-left-radius: ${radiusBottomLeft &&
    THEME_SPACE_DEFAULT[radiusBottomLeft]};
    border-bottom-right-radius: ${radiusBottomRight &&
    THEME_SPACE_DEFAULT[radiusBottomRight]};
    margin: 0 auto;
    color: ${bgtext && THEME_COLORS_DEFAULT[bgtext]};
    background-color: ${bgcolor && THEME_COLORS_DEFAULT[bgcolor]};
    font-size: ${fontSize && THEME_SIZE_DEFAULT[fontSize]};
    margin: ${margin && THEME_SPACE_DEFAULT[margin]};
    gap: ${gap && THEME_SPACE_DEFAULT[gap]};
    flex-wrap: ${flexWrap && THEME_FLEX_DEFAULT[flexWrap]};
    row-gap: ${props.rowGap && THEME_SPACE_DEFAULT[props.rowGap]};
    column-gap: ${props.columnGap
      ? THEME_SPACE_DEFAULT[props.columnGap]
      : '1rem'};
    /* grid-column-start: ${props.gridColumnStart};
    grid-column-end: ${props.gridColumnEnd};
    grid-row-start: ${props.gridRowStart};
    grid-row-end: span ${props.gridRowEnd}; */
    ${props.effectDefault && props.effectDefault()};
    ${props.gridColumnsDefault && props.gridColumnsDefault};
    ${props.gridRows && props.gridRows};

    ${props.positionDefault && props.positionDefault()};
    ${props.effectDefault && props.effectDefault()};
    ${props.afterDefault && props.afterDefault()};
    ${props.beforeDefault && props.beforeDefault()};
    ${props.backgroundImgDefault && props.backgroundImgDefault()};

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
      padding-top: ${props.paddingTop};
    `}
    ${props.paddingBottom &&
    css`
      padding-bottom: ${props.paddingBottom};
    `}
    ${props.paddingLeft &&
    css`
      padding-left: ${props.paddingLeft};
    `}
    ${props.paddingRight &&
    css`
      padding-right: ${props.paddingRight};
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
      margin-top: ${props.marginTop};
    `}
    ${props.marginBottom &&
    css`
      margin-bottom: ${props.marginBottom};
    `}
    ${props.marginLeft &&
    css`
      margin-left: ${props.marginLeft};
    `}
    ${props.marginRight &&
    css`
      margin-right: ${props.marginRight};
    `}
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


    ${props.isMarginCustom &&
    css`
      margin-left: calc(
        ${props.marginStaticX && THEME_SPACE_DEFAULT[props.marginStaticX]} +
          ${props.marginDynamicX &&
          THEME_SPACE_DINAMIC_DEFAULT[props.marginDynamicX]}
      );
      margin-right: calc(
        ${props.marginStaticX && THEME_SPACE_DEFAULT[props.marginStaticX]} +
          ${props.marginDynamicX &&
          THEME_SPACE_DINAMIC_DEFAULT[props.marginDynamicX]}
      );
      margin-top: calc(
        ${props.marginStaticY && THEME_SPACE_DEFAULT[props.marginStaticY]} +
          ${props.marginDynamicY &&
          THEME_SPACE_DINAMIC_DEFAULT[props.marginDynamicY]}
      );
      margin-bottom: calc(
        ${props.marginStaticY && THEME_SPACE_DEFAULT[props.marginStaticY]} +
          ${props.marginDynamicY &&
          THEME_SPACE_DINAMIC_DEFAULT[props.marginDynamicY]}
      );
    `}


    ${props.isImgBackgroundGradient &&
    css`
      background: linear-gradient(
          to bottom,
          ${props.imgBgcolor && THEME_COLORS_DEFAULT[props.imgBgcolor]},
          hsla(0, 0%, 11%, 0.4)
        ),
        url(${props.imgBgUrl});
      background-size: ${props.imgBgSize &&
      THEME_FLEX_DEFAULT[props.imgBgSize]};
      background-position: ${props.imgBgPosition &&
      THEME_FLEX_DEFAULT[props.imgBgPosition]};
    `}

    ${props.isImgBackground &&
    css`
      background-image: url(${props.imgBgUrl});
      background-size: ${props.imgBgSize &&
      THEME_FLEX_DEFAULT[props.imgBgSize]};
      background-position: ${props.imgBgPosition &&
      THEME_FLEX_DEFAULT[props.imgBgPosition]};
    `}

    ${props.isBefore &&
    css`
      &::before {
        content: '';
        position: ${props.beforePosition && props.beforePosition};
        z-index: ${props.beforeZindex ? props.beforeZindex : ''};
        top: ${props.beforeTop && props.beforeTop + '%'};
        bottom: ${props.beforeBottom && props.beforeBottom + '%'};
        left: ${props.beforeLeft && props.beforeLeft + '%'};
        right: ${props.beforeRight && props.beforeRight + '%'};
        width: ${props.beforeWidth
          ? THEME_SPACE_DEFAULT[props.beforeWidth]
          : ''};
        height: ${props.beforeHeight
          ? THEME_SPACE_DEFAULT[props.beforeHeight]
          : ''};
        background-image: url(${props.beforeBackgroundImg});
        background-color: ${props.beforeBackgroundColor &&
        THEME_COLORS_DEFAULT[props.beforeBackgroundColor]};
        ${props.beforeClipPath &&
        css`
          clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 100%, 0% 0%);
        `}
      }
    `}

    ${props.isAfter &&
    css`
      &::after {
        content: '';
        position: ${props.afterPosition ? props.afterPosition : ''};
        z-index: ${props.afterZindex ? props.afterZindex : ''};
        top: ${props.afterTop && props.afterTop + '%'};
        bottom: ${props.afterBottom && props.afterBottom + '%'};
        left: ${props.afterLeft && props.afterLeft + '%'};
        right: ${props.afterRight && props.afterRight + '%'};
        width: ${props.afterWidth ? THEME_SPACE_DEFAULT[props.afterWidth] : ''};
        height: ${props.afterHeight
          ? THEME_SPACE_DEFAULT[props.afterHeight]
          : ''};
        background-image: url(${props.afterBackgroundImg});
        background-color: ${props.afterBackgroundColor &&
        THEME_COLORS_DEFAULT[props.afterBackgroundColor]};
        ${props.afterClipPath &&
        css`
          clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 100%, 0% 0%);
        `}
      }
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

    ${props.isGridTemplateColumns &&
    css`
      display: grid;
      grid-template-columns:
        [container-start] repeat(12, minmax(min-content, 12.5rem))
        [container-end];

      grid-template-rows: repeat(9, min-content);
      justify-content: center;
    `}

    ${props.isOverall &&
    css`
      /* background-color: red; */
      grid-column: container-start / container-end;
    `}

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
        /* background-color: red; */
        justify-content: center;
      }

      @media ${theme.media.medium} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        flex-wrap: wrap;
        justify-content: center;
        /* background-color: blue; */
      }
      @media ${theme.media.large} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        flex-wrap: nowrap;
        justify-content: center;
        /* background-color: yellow; */
      }
      @media ${theme.media.xlarge} {
        display: grid;
        flex-wrap: wrap;
        grid-template-columns: repeat(4, 1fr);
        /* grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr)); */
        justify-content: space-between;
        /* background-color: rosybrown; */
      }
      @media ${theme.media.xxlarge} {
        display: grid;
        flex-wrap: wrap;
        grid-template-columns: repeat(4, 1fr);
        /* grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr)); */
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
  `}
`;
