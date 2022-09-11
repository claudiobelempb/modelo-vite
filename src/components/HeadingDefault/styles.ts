import {
  isTextDecoretionLineThroughDefault,
  textDecoration,
  THEME_COLORS_DEFAULT,
  THEME_FLEX_DEFAULT,
  THEME_FONT_FAMILY_DEFAULT,
  THEME_LINE_HEIGHT_DEFAULT,
  THEME_SPACE_DEFAULT,
  THEME_SPACE_DINAMIC_DEFAULT
} from '@assets/styles/themes/ThemeType';
import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import styled, { css } from 'styled-components';

export const HeadingDefaultContainer = styled.h1<TypeDefault>`
  ${({
    theme,
    bgtext,
    as,
    fontSize,
    isUppercase,
    fontFamily,
    fontWeight,
    fontStyle = 'normal',
    lineHeight = 'base130',
    padding,
    paddingX,
    paddingY,
    margin,
    marginX,
    marginY,
    radius,
    radiusTopLeft,
    radiusTopRight,
    radiusBottomLeft,
    radiusBottomRight,
    flexWrap,
    gap,
    direction,
    aitems,
    jcontent,
    ...props
  }) => css`
    width: ${props.width && props.width}%;
    height: ${props.height && props.height}%;
    position: ${props.position && props.position};

    font-style: ${fontStyle};
    font-family: ${fontFamily && THEME_FONT_FAMILY_DEFAULT[fontFamily]};
    line-height: ${lineHeight && THEME_LINE_HEIGHT_DEFAULT[lineHeight]};
    text-align: ${props.textAling && THEME_FLEX_DEFAULT[props.textAling]};
    font-weight: ${fontWeight};

    padding: ${padding && THEME_SPACE_DEFAULT[padding]};
    margin: ${margin && THEME_SPACE_DEFAULT[margin]};
    border-radius: ${radius && THEME_SPACE_DEFAULT[radius]};
    border-top-left-radius: ${radiusTopLeft &&
    THEME_SPACE_DEFAULT[radiusTopLeft]};
    border-top-right-radius: ${radiusTopRight &&
    THEME_SPACE_DEFAULT[radiusTopRight]};
    border-bottom-left-radius: ${radiusBottomLeft &&
    THEME_SPACE_DEFAULT[radiusBottomLeft]};
    border-bottom-right-radius: ${radiusBottomRight &&
    THEME_SPACE_DEFAULT[radiusBottomRight]};

    /* color: inherit; */

    padding: ${padding && THEME_SPACE_DEFAULT[padding]};
    margin: ${margin && THEME_SPACE_DEFAULT[margin]};
    gap: ${gap && THEME_SPACE_DEFAULT[gap]};
    flex-wrap: ${flexWrap && THEME_FLEX_DEFAULT[flexWrap]};
    ${textDecoration(isUppercase ? isUppercase : false)}
    ${isTextDecoretionLineThroughDefault(
      props.isTextDecoretionLineThrough
        ? props.isTextDecoretionLineThrough
        : false
    )}

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

    ${props.positionDefault && props.positionDefault()};
    ${props.afterDefault && props.afterDefault()};
    ${props.beforeDefault && props.beforeDefault()};

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

    ${props.fsd &&
    css`
      font-size: calc(${props.fsdcalc}rem + ${props.fsd}vw);
    `}

    ${props.fss &&
    css`
      font-size: ${props.fss}rem;
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

    @media ${theme.media.small} {
      /* text-align: center; */
      /* font-size: 2.8rem; */
    }

    @media ${theme.media.xsmall} {
      /* text-align: center;
      font-size: 2.8rem; */
    }

    @media ${theme.media.medium} {
      /* text-align: center;
      font-size: 2.8rem; */
    }
    @media ${theme.media.large} {
      /* text-align: center;
      font-size: 2.8rem; */
    }
    @media ${theme.media.xlarge} {
      /* text-align: center;
      font-size: 2.8rem; */
    }
    @media ${theme.media.xxlarge} {
      /* text-align: center;
      font-size: 2.8rem; */
    }
  `}
`;
