import {
  textDecoration,
  THEME_COLORS_DEFAULT,
  THEME_FLEX_DEFAULT,
  THEME_SIZE_DEFAULT,
  THEME_SPACE_DEFAULT
} from '@assets/styles/themes/ThemeType';
import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import styled, { css } from 'styled-components';

export const ButtonDefaultContainer = styled.button<TypeDefault>`
  ${({
    theme,
    bgtext,
    fontSize = 'base16',
    isAfter,
    bgcolor,
    direction,
    aitems,
    jcontent,
    isPosition,
    left,
    right,
    top,
    bottom,
    padding,
    paddingX,
    paddingY,
    margin,
    marginX,
    marginY,
    width = 'base100p',
    height,
    gap,
    isUppercase,
    ...props
  }) => css`
    width: ${width && THEME_SPACE_DEFAULT[width]};
    height: ${height && THEME_SPACE_DEFAULT[height]};
    position: ${props.position ? props.position : 'relative'};
    left: ${left && THEME_SPACE_DEFAULT[left]};
    right: ${right && THEME_SPACE_DEFAULT[right]};
    top: ${top && THEME_SPACE_DEFAULT[top]};
    bottom: ${bottom && THEME_SPACE_DEFAULT[bottom]};
    margin: ${margin && THEME_SPACE_DEFAULT[margin]};
    padding: ${padding && THEME_SPACE_DEFAULT[padding]};
    gap: ${gap && THEME_SPACE_DEFAULT[gap]};
    ${textDecoration(isUppercase ? isUppercase : false)}
    border-radius: 0.6rem;
    display: flex;
    border: 0;
    cursor: pointer;
    justify-content: center;
    /* flex-flow: row wrap; */
    font-size: ${fontSize && THEME_SIZE_DEFAULT[fontSize]};
    /* padding: ${theme.size.base16}; */
    font-weight: ${props.fontWeight
      ? props.fontWeight
      : theme.fonts.fontWeight.regular};

    /* color: inherit;
    background-color: inherit; */

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

    & svg {
      background-color: ${props.iconBgcolor &&
      THEME_COLORS_DEFAULT[props.iconBgcolor]};
      color: ${props.iconColor && THEME_COLORS_DEFAULT[props.iconColor]};
      font-size: ${props.iconSize && THEME_SPACE_DEFAULT[props.iconSize]};
    }

    ${bgtext &&
    css`
      color: ${bgtext && THEME_COLORS_DEFAULT[bgtext]};
    `}

    ${props.textcolor &&
    css`
      color: ${props.textcolor && THEME_COLORS_DEFAULT[props.textcolor]};
    `}
    ${bgcolor &&
    css`
      background-color: ${bgcolor && THEME_COLORS_DEFAULT[bgcolor]};
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

    /* &:hover {
      color: ${theme.colors.hover};
    } */

    &:hover {
      filter: brightness(0.9);
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

    ${isAfter &&
    css`
      &:hover::after {
        left: 25%;
        width: 50%;
      }
    `}

    @media ${theme.media.small} {
      /* flex-flow: column wrap; */
      /* flex-direction: column;
      align-content: center; */
    }
  `}
`;
