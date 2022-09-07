import {
  isBorderDefault,
  isTextDecoretionLineThroughDefault,
  textDecoration,
  THEME_COLORS_DEFAULT,
  THEME_FLEX_DEFAULT,
  THEME_FONT_FAMILY_DEFAULT,
  THEME_LINE_HEIGHT_DEFAULT,
  THEME_SIZE_DEFAULT,
  THEME_SPACE_DEFAULT,
  THEME_SPACE_DINAMIC_DEFAULT
} from '@assets/styles/themes/ThemeType';
import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import styled, { css } from 'styled-components';

export const ContainerTextDefault = styled.p<TypeDefault>`
  ${({
    theme,
    bgtext,
    as,
    fontSize = 'base16',
    fontWeight,
    isUppercase,
    padding,
    paddingX,
    paddingY,
    margin,
    marginTop,
    marginBottom,
    marginX,
    marginY,
    fontFamily = 'roboto',
    lineHeight = 'base130',
    width = 'base100',
    height,
    jcontent,
    aitems,
    direction,
    textAling,
    radius,
    radiusTopLeft,
    radiusTopRight,
    radiusBottomLeft,
    radiusBottomRight,
    flexWrap,
    gap,
    isDisplay,
    isBorder,
    fontStyle = 'normal',
    isPosition,
    top,
    bottom,
    left,
    right,
    border,
    ...props
  }) => css`

    top: ${top && THEME_SPACE_DEFAULT[top]};
    bottom: ${bottom && THEME_SPACE_DEFAULT[bottom]};
    left ${left && THEME_SPACE_DEFAULT[left]};
    right: ${right && THEME_SPACE_DEFAULT[right]};
    font-family: ${fontFamily && THEME_FONT_FAMILY_DEFAULT[fontFamily]};
    font-style: ${fontStyle};
    line-height: ${lineHeight && THEME_LINE_HEIGHT_DEFAULT[lineHeight]};

    padding: ${padding && THEME_SPACE_DEFAULT[padding]};
    margin: ${margin && THEME_SPACE_DEFAULT[margin]};
    margin-top: ${marginTop && THEME_SPACE_DEFAULT[marginTop]};
    margin-bottom: ${marginBottom && THEME_SPACE_DEFAULT[marginBottom]};

    font-size: ${
      props.fontSizeStatic && THEME_SPACE_DEFAULT[props.fontSizeStatic]
    };
    font-weight: ${fontWeight ? fontWeight : '400'};
    width: ${width && THEME_SPACE_DEFAULT[width]};
    height: ${height && THEME_SPACE_DEFAULT[height]};
    border-radius: ${radius && THEME_SPACE_DEFAULT[radius]};
    justify-content: ${jcontent && THEME_FLEX_DEFAULT[jcontent]};
    align-items: ${aitems && THEME_FLEX_DEFAULT[aitems]};
    flex-direction: ${direction && THEME_FLEX_DEFAULT[direction]};
    text-align: ${textAling && THEME_FLEX_DEFAULT[textAling]};
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
    font-size: ${fontSize && THEME_SIZE_DEFAULT[fontSize]};
    padding: ${padding && THEME_SPACE_DEFAULT[padding]};
    margin: ${margin && THEME_SPACE_DEFAULT[margin]};
    gap: ${gap && THEME_SPACE_DEFAULT[gap]};
    flex-wrap: ${flexWrap && THEME_FLEX_DEFAULT[flexWrap]};
    flex-grow: ${props.flexGrow && props.flexGrow};
    flex-shrink: ${props.flexShrink && THEME_FLEX_DEFAULT[props.flexShrink]};
    align-self: ${props.alignSelf && THEME_FLEX_DEFAULT[props.alignSelf]};

    ${textDecoration(isUppercase ? isUppercase : false)}
    ${isBorderDefault(isBorder ? isBorder : false)}
    ${isTextDecoretionLineThroughDefault(
      props.isTextDecoretionLineThrough
        ? props.isTextDecoretionLineThrough
        : false
    )}

    ${
      props.fontSizeDynamic === '1' &&
      css`
        font-size: calc(1rem + 1vw);
      `
    }
    ${
      props.fontSizeDynamic === '1.5' &&
      css`
        font-size: calc(1rem + 1.5vw);
      `
    }
    ${
      props.fontSizeDynamic === '2' &&
      css`
        font-size: calc(1rem + 2vw);
      `
    }
    ${
      props.fontSizeDynamic === '2.5' &&
      css`
        font-size: calc(2rem + 2.5vw);
      `
    }

    ${
      props.fontSizeDynamic === '3' &&
      css`
        font-size: calc(2rem + 3vw);
      `
    }

    ${
      props.fontSizeDynamic === '3.5' &&
      css`
        font-size: calc(3rem + 3.5vw);
      `
    }

    ${
      props.isPaddingCustom &&
      css`
        padding-left: calc(
          ${props.paddingStaticX && THEME_SPACE_DEFAULT[props.paddingStaticX]} +
            ${props.paddingDynamicX &&
            THEME_SPACE_DINAMIC_DEFAULT[props.paddingDynamicX]}
        );
        padding-right: calc(
          ${props.paddingStaticX && THEME_SPACE_DEFAULT[props.paddingStaticX]} +
            ${props.paddingDynamicX &&
            THEME_SPACE_DINAMIC_DEFAULT[props.paddingDynamicX]}
        );
        padding-top: calc(
          ${props.paddingStaticY && THEME_SPACE_DEFAULT[props.paddingStaticY]} +
            ${props.paddingDynamicY &&
            THEME_SPACE_DINAMIC_DEFAULT[props.paddingDynamicY]}
        );
        padding-bottom: calc(
          ${props.paddingStaticY && THEME_SPACE_DEFAULT[props.paddingStaticY]} +
            ${props.paddingDynamicY &&
            THEME_SPACE_DINAMIC_DEFAULT[props.paddingDynamicY]}
        );
      `
    }

    ${
      props.isMarginCustom &&
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
      `
    }

    ${
      props.isGridRow &&
      css`
        grid-row: ${props.gridRowStartSpan} ${props.gridRowStart} /
          ${props.gridRowEndSpan} ${props.gridRowEnd};
      `
    }

    ${
      props.isGridColumn &&
      css`
        grid-column: ${props.gridColumnStartSpan} ${props.gridColumnStart} /
          ${props.gridColumnEndSpan} ${props.gridColumnEnd};
      `
    }

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

    & strong {
      font-weight: bold;
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
        display: flex;
        flex-direction: ${direction && THEME_FLEX_DEFAULT[direction]};
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
