import {
  THEME_COLORS_DEFAULT,
  THEME_FLEX_DEFAULT,
  THEME_SIZE_DEFAULT,
  THEME_SPACE_DEFAULT
} from '@assets/styles/themes/ThemeType';
import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import styled, { css } from 'styled-components';

export const ContainerDefaultStyle = styled.div<TypeDefault>`
  ${({
    theme,
    bgcolor,
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
    ...props
  }) => css`
    width: 100%;
    color: ${bgtext && THEME_COLORS_DEFAULT[bgtext]};
    background-color: ${bgcolor && THEME_COLORS_DEFAULT[bgcolor]};
    font-size: ${fontSize && THEME_SIZE_DEFAULT[fontSize]};

    padding: ${padding && THEME_SPACE_DEFAULT[padding]};
    margin: ${margin && THEME_SPACE_DEFAULT[margin]};

    ${props.isImgBackgroundGradient &&
    css`
      background: linear-gradient(
          to bottom,
          ${props.imgBgcolor && THEME_COLORS_DEFAULT[props.imgBgcolor]},
          ${props.imgBgcolor && THEME_COLORS_DEFAULT[props.imgBgcolor]}
        ),
        url(${props.url});
      background-size: ${props.imgBgSize &&
      THEME_FLEX_DEFAULT[props.imgBgSize]};
      background-position: ${props.imgBgPosition &&
      THEME_FLEX_DEFAULT[props.imgBgPosition]};
    `}

    ${props.isImgBackground &&
    css`
      background-image: url(${props.url});
      background-size: ${props.imgBgSize &&
      THEME_FLEX_DEFAULT[props.imgBgSize]};
      background-position: ${props.imgBgPosition &&
      THEME_FLEX_DEFAULT[props.imgBgPosition]};
    `}

    ${props.isAfter &&
    css`
      content: '';
      position: ${props.position ? props.position : ''};
      z-index: ${props.zIndex ? props.zIndex : ''};
      top: ${props.top ? THEME_SPACE_DEFAULT[props.top] : ''};
      left: ${props.left ? THEME_SPACE_DEFAULT[props.left] : ''};
      right: ${props.right ? THEME_SPACE_DEFAULT[props.right] : ''};
      width: ${props.width ? THEME_SPACE_DEFAULT[props.width] : ''};
      height: ${props.height ? THEME_SPACE_DEFAULT[props.height] : ''};
      background-image: url(${props.url});
    `}

    ${props.isBefore &&
    css`
      content: '';
      position: ${props.position ? props.position : ''};
      z-index: ${props.zIndex ? props.zIndex : ''};
      top: ${props.top ? THEME_SPACE_DEFAULT[props.top] : ''};
      left: ${props.left ? THEME_SPACE_DEFAULT[props.left] : ''};
      right: ${props.right ? THEME_SPACE_DEFAULT[props.right] : ''};
      width: ${props.width ? THEME_SPACE_DEFAULT[props.width] : ''};
      height: ${props.height ? THEME_SPACE_DEFAULT[props.height] : ''};
      background-image: url(${props.url});
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

    ${props.isGridTemplateColumns &&
    css`
      display: grid;
      grid-template-columns:
        [container-start] repeat(12, minmax(min-content, 12.5rem))
        [container-end];

      grid-template-rows: repeat(9, min-content);
      justify-content: center;
      /* background-color: green; */
    `}

    ${props.isOverall &&
    css`
      grid-column: container-start / container-end;
      background-color: blue;
    `}
  `}
`;
