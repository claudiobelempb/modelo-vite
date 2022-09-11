import {
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

export const ContainerNavLink = styled.div<TypeDefault>`
  ${({ theme, ...props }) => css`
    ${
      props.display &&
      css`
        display: ${props.display};
      `
    }
    ${
      props.width &&
      css`
        width: ${props.width};
      `
    }
    ${
      props.height &&
      css`
        height: ${props.height};
      `
    }
    width: 'max-content'};
    background-color: ${props.bgcolor && THEME_COLORS_DEFAULT[props.bgcolor]};
    font-size: ${props.fontSize && THEME_SIZE_DEFAULT[props.fontSize]};
    font-style: ${props.fontStyle};
    font-family: ${
      props.fontFamily && THEME_FONT_FAMILY_DEFAULT[props.fontFamily]
    };
    line-height: ${
      props.lineHeight && THEME_LINE_HEIGHT_DEFAULT[props.lineHeight]
    };
    text-align: ${props.textAling && THEME_FLEX_DEFAULT[props.textAling]};
    font-weight: ${props.fontWeight};

    padding: ${props.padding && THEME_SPACE_DEFAULT[props.padding]};
    margin: ${props.margin && THEME_SPACE_DEFAULT[props.margin]};
    border-radius: ${props.radius && THEME_SPACE_DEFAULT[props.radius]};
    border-top-left-radius: ${
      props.radiusTopLeft && THEME_SPACE_DEFAULT[props.radiusTopLeft]
    };
    border-top-right-radius: ${
      props.radiusTopRight && THEME_SPACE_DEFAULT[props.radiusTopRight]
    };
    border-bottom-left-radius: ${
      props.radiusBottomLeft && THEME_SPACE_DEFAULT[props.radiusBottomLeft]
    };
    border-bottom-right-radius: ${
      props.radiusBottomRight && THEME_SPACE_DEFAULT[props.radiusBottomRight]
    };

    gap: ${props.gap && THEME_SPACE_DEFAULT[props.gap]};
    flex-wrap: ${props.flexWrap && THEME_FLEX_DEFAULT[props.flexWrap]};
    ${textDecoration(props.isUppercase ? props.isUppercase : false)}
    ${props.positionDefault && props.positionDefault()};
    ${props.effectDefault && props.effectDefault()};
    ${props.afterDefault && props.afterDefault()};
    ${props.beforeDefault && props.beforeDefault()};
    ${props.backgroundImgDefault && props.backgroundImgDefault()};

    transition: all 0.25s ease-in;

    ${
      props.paddingDynamicX &&
      props.paddingDynamicX(props.valueStatic || 1, props.valueDynamic || 2)
    }
    ${
      props.paddingDynamicY &&
      props.paddingDynamicY(props.valueStatic || 1, props.valueDynamic || 2)
    }
    ${props.paddingStaticY && props.paddingStaticY(props.valueStatic || 1)}
    ${props.paddingStaticX && props.paddingStaticX(props.valueStatic || 1)}

    ${
      props.paddingStatic &&
      props.paddingStatic(props.valueStaticH || 1, props.valueStaticW || 1)
    }
    ${
      props.paddingDynamic &&
      props.paddingDynamic(
        props.valueStaticH || 1,
        props.valueDynamiH || 1,
        props.valueStaticW || 1,
        props.valueDynamicW || 2
      )
    }
    ${
      props.paddingTop &&
      css`
        padding-top: ${props.paddingTop};
      `
    }
    ${
      props.paddingBottom &&
      css`
        padding-bottom: ${props.paddingBottom};
      `
    }
    ${
      props.paddingLeft &&
      css`
        padding-left: ${props.paddingLeft};
      `
    }
    ${
      props.paddingRight &&
      css`
        padding-right: ${props.paddingRight};
      `
    }

    /*MARGIN  */

    ${
      props.marginStatic &&
      props.marginStatic(props.valueStaticH || 1, props.valueStaticW || 1)
    }
    ${
      props.marginDynamic &&
      props.marginDynamic(
        props.valueStaticH || 1,
        props.valueDynamiH || 1,
        props.valueStaticW || 1,
        props.valueDynamicW || 2
      )
    }


    ${
      props.marginTop &&
      css`
        margin-top: ${props.marginTop};
      `
    }
    ${
      props.marginBottom &&
      css`
        margin-bottom: ${props.marginBottom};
      `
    }
    ${
      props.marginLeft &&
      css`
        margin-left: ${props.marginLeft};
      `
    }
    ${
      props.marginRight &&
      css`
        margin-right: ${props.marginRight};
      `
    }

    /*FONT SIZE DYNAMIC */
    ${
      props.fontSizeDynamic &&
      props.fontSizeDynamic(props.valueStatic || 1, props.valueDynamic || 1)
    }
    /*FONT SIZE STATIC */
    ${
      props.fontSizeStatic &&
      css`
        font-size: ${props.fontSizeStatic * 1}rem;
      `
    }

    & svg {
      background-color: ${
        props.iconBgcolor && THEME_COLORS_DEFAULT[props.iconBgcolor]
      };
      color: ${props.iconColor && THEME_COLORS_DEFAULT[props.iconColor]};
      font-size: ${props.iconSize && THEME_SPACE_DEFAULT[props.iconSize]};
    }

    /* props isBorderDefault */
    ${
      props.isBorderDefault &&
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
      `
    }
    /* props isWidth */
    ${
      props.isWidth === 'isWidthR' &&
      css`
        width: calc(${props.widthCalc} * ${props.widthR + 'rem'});
      `
    }
    ${
      props.isWidth === 'isWidthP' &&
      css`
        width: calc(${props.widthCalc} * ${props.widthP + '%'});
      `
    }
    ${
      props.isWidth === 'isWidthPX' &&
      css`
        width: calc(${props.widthCalc} * ${props.widthPX + 'px'});
      `
    }
    ${
      props.isWidth === 'isWidthVW' &&
      css`
        width: calc(${props.widthCalc} * ${props.widthVW + 'vw'});
      `
    }
    ${
      props.isWidth === 'isWidthVH' &&
      css`
        width: calc(${props.widthCalc} * ${props.widthVH + 'vh'});
      `
    }

     /* props isHeight */
    ${
      props.isHeight === 'isHeightR' &&
      css`
        height: calc(${props.heightCalc} * ${props.heightR + 'rem'});
      `
    }
    ${
      props.isHeight === 'isHeightP' &&
      css`
        height: calc(${props.heightCalc} * ${props.heightP + '%'});
      `
    }
    ${
      props.isHeight === 'isHeightPX' &&
      css`
        height: calc(${props.heightCalc} * ${props.heightPX + 'px'});
      `
    }
    ${
      props.isHeight === 'isHeightVW' &&
      css`
        height: calc(${props.heightCalc} * ${props.heightVW + 'vw'});
      `
    }
    ${
      props.isHeight === 'isHeightVH' &&
      css`
        height: calc(${props.heightCalc} * ${props.heightVH + 'vh'});
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
      props.isActive &&
      css`
        color: white !important;
        font-weight: bold;
      `
    }

    &:hover {
      /* filter: brightness(0.9); */
      color: ${props.textHover && THEME_COLORS_DEFAULT[props.textHover]};
      background-color: ${props.bgHover && THEME_COLORS_DEFAULT[props.bgHover]};
      cursor: pointer;
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
      props.direction &&
      css`
        display: flex;
        flex-direction: ${props.direction &&
        THEME_FLEX_DEFAULT[props.direction]};
      `
    }

    ${
      props.aitems &&
      css`
        display: flex;
        align-items: ${props.aitems && THEME_FLEX_DEFAULT[props.aitems]};
      `
    }

    ${
      props.jcontent &&
      css`
        display: flex;
        justify-content: ${props.jcontent &&
        THEME_FLEX_DEFAULT[props.jcontent]};
      `
    }


    ${
      props.isHover &&
      css`
        &:hover {
          color: ${theme.colors.textHover};
          background-color: ${theme.colors.bgHover};
        }
      `
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0%;
      height: 0.2rem;
      background-color: ${theme.colors.red};
      transition: all 300ms ease-in-out;
    }

    ${
      props.isAfter &&
      css`
        &:hover::after {
          left: 25%;
          width: 50%;
        }
      `
    }

    ${
      props.paddingX &&
      css`
        padding-left: ${THEME_SPACE_DEFAULT[props.paddingX]};
        padding-right: ${THEME_SPACE_DEFAULT[props.paddingX]};
      `
    }

    ${
      props.paddingY &&
      css`
        padding-top: ${THEME_SPACE_DEFAULT[props.paddingY]};
        padding-bottom: ${THEME_SPACE_DEFAULT[props.paddingY]};
      `
    }

    ${
      props.marginX &&
      css`
        margin-left: ${THEME_SPACE_DEFAULT[props.marginX]};
        margin-right: ${THEME_SPACE_DEFAULT[props.marginX]};
      `
    }

    ${
      props.marginY &&
      css`
        margin-top: ${THEME_SPACE_DEFAULT[props.marginY]};
        margin-bottom: ${THEME_SPACE_DEFAULT[props.marginY]};
      `
    }

    ${
      props.direction &&
      css`
        display: flex;
        flex-direction: ${props.direction &&
        THEME_FLEX_DEFAULT[props.direction]};
      `
    }

    ${
      props.aitems &&
      css`
        display: flex;
        align-items: ${props.aitems && THEME_FLEX_DEFAULT[props.aitems]};
      `
    }

    ${
      props.jcontent &&
      css`
        display: flex;
        justify-content: ${props.jcontent &&
        THEME_FLEX_DEFAULT[props.jcontent]};
      `
    }
    @media ${theme.media.xsmall} {
      width: 100%;
      /* text-align: center;
      font-size: 2.8rem; */
    }

    @media ${theme.media.small} {
      width: 100%;
      /* text-align: center; */
      /* font-size: 2.8rem; */
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
