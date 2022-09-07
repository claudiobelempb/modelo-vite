import {
  THEME_COLORS_DEFAULT,
  THEME_FLEX_DEFAULT,
  THEME_SPACE_DEFAULT
} from '@assets/styles/themes/ThemeType';
import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import styled, { css } from 'styled-components';

export const ImgDefaultContainer = styled.img<TypeDefault>`
  ${({ ...props }) => css`
    position: ${props.position ? props.position : 'relative'};
    z-index: ${props.zIndex && props.zIndex};
    width: ${props.width ? THEME_SPACE_DEFAULT[props.width] : '100%'};
    height: ${props.height ? THEME_SPACE_DEFAULT[props.height] : '100%'};
    object-fit: cover;
    transition: all 0.6s ease-in-out;
    ${props.isTransform &&
    css`
      &:hover {
        transform: scale(0.95);

        background-color: red;
      }
    `}

    ${props.isPosition &&
    css`
     content: '';
      width: ${props.width && THEME_SPACE_DEFAULT[props.width]};
      height: ${props.height && THEME_SPACE_DEFAULT[props.height]};
      position: ${props.position && props.position};
      top: ${props.top && THEME_SPACE_DEFAULT[props.top]};
      bottom: ${props.bottom && THEME_SPACE_DEFAULT[props.bottom]};
      left ${props.left && THEME_SPACE_DEFAULT[props.left]};
      right: ${props.right && THEME_SPACE_DEFAULT[props.right]};
      z-index: ${props.zIndex && props.zIndex};
      transform: translateX(-50%);
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

    ${props.isRadius &&
    css`
      border-radius: ${props.radius && THEME_SPACE_DEFAULT[props.radius]};
    `}

    ${props.isRadiusTop &&
    css`
      border-top-left-radius: ${props.radius &&
      THEME_SPACE_DEFAULT[props.radius]};
      border-top-right-radius: ${props.radius &&
      THEME_SPACE_DEFAULT[props.radius]};
    `}

    ${props.isRadiusBottom &&
    css`
      border-bottom-left-radius: ${props.radius &&
      THEME_SPACE_DEFAULT[props.radius]};
      border-bottom-right-radius: ${props.radius &&
      THEME_SPACE_DEFAULT[props.radius]};
    `}
  `}
`;

export const FigureDefaultContainer = styled.figure<TypeDefault>`
  ${({ ...props }) => css`
    width: ${props.width ? THEME_SPACE_DEFAULT[props.width] : '100%'};
    height: ${props.height ? THEME_SPACE_DEFAULT[props.height] : '100%'};
    display: ${props.display && props.display};
    position: ${props.position ? props.position : 'relative'};
    grid-area: ${props.gridArea};
    gap: ${props.gap && THEME_SPACE_DEFAULT[props.gap]};
    flex-wrap: ${props.flexWrap && THEME_FLEX_DEFAULT[props.flexWrap]};
    flex-grow: ${props.flexGrow && props.flexGrow};
    align-self: ${props.alignSelf && THEME_FLEX_DEFAULT[props.alignSelf]};
    flex-basis: ${props.flexBasis && THEME_SPACE_DEFAULT[props.flexBasis]};

    ${props.isPosition &&
    css`
     content: '';
      width: ${props.width && THEME_SPACE_DEFAULT[props.width]};
      height: ${props.height && THEME_SPACE_DEFAULT[props.height]};
      position: ${props.position && props.position};
      top: ${props.top && THEME_SPACE_DEFAULT[props.top]};
      bottom: ${props.bottom && THEME_SPACE_DEFAULT[props.bottom]};
      left ${props.left && THEME_SPACE_DEFAULT[props.left]};
      right: ${props.right && THEME_SPACE_DEFAULT[props.right]};
      z-index: ${props.zIndex && props.zIndex};
      transform: translateX(-50%);
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


    ${props.isRadius &&
    css`
      border-radius: ${props.radius && THEME_SPACE_DEFAULT[props.radius]};
    `}

    ${props.isRadiusTop &&
    css`
      border-top-left-radius: ${props.radius &&
      THEME_SPACE_DEFAULT[props.radius]};
      border-top-right-radius: ${props.radius &&
      THEME_SPACE_DEFAULT[props.radius]};
    `}

    ${props.isRadiusBottom &&
    css`
      border-bottom-left-radius: ${props.radius &&
      THEME_SPACE_DEFAULT[props.radius]};
      border-bottom-right-radius: ${props.radius &&
      THEME_SPACE_DEFAULT[props.radius]};
    `}

    ${props.direction &&
    css`
      flex-direction: ${props.direction && THEME_FLEX_DEFAULT[props.direction]};
    `}

    ${props.aitems &&
    css`
      align-items: ${props.aitems && THEME_FLEX_DEFAULT[props.aitems]};
    `}

    ${props.jcontent &&
    css`
      justify-content: ${props.jcontent && THEME_FLEX_DEFAULT[props.jcontent]};
    `}
  `}
`;
