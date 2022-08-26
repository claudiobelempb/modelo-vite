import {
  textDecoration,
  THEME_COLORS_DEFAULT,
  THEME_FLEX_DEFAULT,
  THEME_FONT_FAMILY_DEFAULT,
  THEME_LINE_HEIGHT_DEFAULT,
  THEME_SIZE_DEFAULT,
  THEME_SPACE_DEFAULT
} from '@assets/styles/themes/ThemeType';
import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import styled, { css } from 'styled-components';

export const ContainerNavLink = styled.div<TypeDefault>`
  ${({ theme, ...props }) => css`
    display: flex;
    width: ${props.width ? THEME_SPACE_DEFAULT[props.width] : '100%'};
    height: ${props.height && THEME_SPACE_DEFAULT[props.height]};
    background-color: ${props.bgcolor && THEME_COLORS_DEFAULT[props.bgcolor]};
    font-size: ${props.fontSize && THEME_SIZE_DEFAULT[props.fontSize]};
    font-style: ${props.fontStyle};
    font-family: ${props.fontFamily &&
    THEME_FONT_FAMILY_DEFAULT[props.fontFamily]};
    line-height: ${props.lineHeight &&
    THEME_LINE_HEIGHT_DEFAULT[props.lineHeight]};
    text-align: ${props.textAling && THEME_FLEX_DEFAULT[props.textAling]};
    font-weight: ${props.fontWeight};

    padding: ${props.padding && THEME_SPACE_DEFAULT[props.padding]};
    margin: ${props.margin && THEME_SPACE_DEFAULT[props.margin]};
    border-radius: ${props.radius && THEME_SPACE_DEFAULT[props.radius]};
    border-top-left-radius: ${props.radiusTopLeft &&
    THEME_SPACE_DEFAULT[props.radiusTopLeft]};
    border-top-right-radius: ${props.radiusTopRight &&
    THEME_SPACE_DEFAULT[props.radiusTopRight]};
    border-bottom-left-radius: ${props.radiusBottomLeft &&
    THEME_SPACE_DEFAULT[props.radiusBottomLeft]};
    border-bottom-right-radius: ${props.radiusBottomRight &&
    THEME_SPACE_DEFAULT[props.radiusBottomRight]};
    margin-top: ${props.marginTop && THEME_SPACE_DEFAULT[props.marginTop]};
    margin-bottom: ${props.marginBottom &&
    THEME_SPACE_DEFAULT[props.marginBottom]};
    gap: ${props.gap && THEME_SPACE_DEFAULT[props.gap]};
    flex-wrap: ${props.flexWrap && THEME_FLEX_DEFAULT[props.flexWrap]};
    ${textDecoration(props.isUppercase ? props.isUppercase : false)}

    transition: all 0.25s ease-in;

    &:hover {
      filter: brightness(0.9);
    }

    ${props.bgtext &&
    css`
      color: ${props.bgtext && THEME_COLORS_DEFAULT[props.bgtext]};
    `}
    ${props.textcolor &&
    css`
      color: ${props.textcolor && THEME_COLORS_DEFAULT[props.textcolor]};
    `}
    ${props.bgcolor &&
    css`
      background-color: ${props.bgcolor && THEME_COLORS_DEFAULT[props.bgcolor]};
    `}

    ${props.direction &&
    css`
      display: flex;
      flex-direction: ${props.direction && THEME_FLEX_DEFAULT[props.direction]};
    `}

    ${props.aitems &&
    css`
      display: flex;
      align-items: ${props.aitems && THEME_FLEX_DEFAULT[props.aitems]};
    `}

    ${props.jcontent &&
    css`
      display: flex;
      justify-content: ${props.jcontent && THEME_FLEX_DEFAULT[props.jcontent]};
    `}


    ${props.isHover &&
    css`
      &:hover {
        color: ${theme.colors.textHover};
        background-color: ${theme.colors.bgHover};
      }
    `}

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

    ${props.isAfter &&
    css`
      &:hover::after {
        left: 25%;
        width: 50%;
      }
    `}

    ${props.paddingX &&
    css`
      padding-left: ${THEME_SPACE_DEFAULT[props.paddingX]};
      padding-right: ${THEME_SPACE_DEFAULT[props.paddingX]};
    `}

    ${props.paddingY &&
    css`
      padding-top: ${THEME_SPACE_DEFAULT[props.paddingY]};
      padding-bottom: ${THEME_SPACE_DEFAULT[props.paddingY]};
    `}

    ${props.marginX &&
    css`
      margin-left: ${THEME_SPACE_DEFAULT[props.marginX]};
      margin-right: ${THEME_SPACE_DEFAULT[props.marginX]};
    `}

    ${props.marginY &&
    css`
      margin-top: ${THEME_SPACE_DEFAULT[props.marginY]};
      margin-bottom: ${THEME_SPACE_DEFAULT[props.marginY]};
    `}

    ${props.direction &&
    css`
      display: flex;
      flex-direction: ${props.direction && THEME_FLEX_DEFAULT[props.direction]};
    `}

    ${props.aitems &&
    css`
      display: flex;
      align-items: ${props.aitems && THEME_FLEX_DEFAULT[props.aitems]};
    `}

    ${props.jcontent &&
    css`
      display: flex;
      justify-content: ${props.jcontent && THEME_FLEX_DEFAULT[props.jcontent]};
    `}
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
