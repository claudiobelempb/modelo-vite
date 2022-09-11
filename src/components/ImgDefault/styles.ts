import {
  THEME_FLEX_DEFAULT,
  THEME_SPACE_DEFAULT
} from '@assets/styles/themes/ThemeType';
import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import styled, { css } from 'styled-components';

export const ImgDefaultContainer = styled.img<TypeDefault>`
  ${({ ...props }) => css`
    position: ${props.position ? props.position : 'relative'};
    z-index: ${props.zIndex && props.zIndex};
    width: 100%;
    height: 100%;
    ${props.width &&
    css`
      width: calc(10 * ${props.width}%);
    `}
    ${props.height &&
    css`
      height: calc(10 * ${props.height}%);
    `}
    object-fit: cover;
    ${props.effectDefault && props.effectDefault()};

    ${props.isTransform &&
    css`
      &:hover {
        transform: scale(0.95);

        background-color: red;
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

    ${props.radius &&
    css`
      border-radius: ${props.radius && THEME_SPACE_DEFAULT[props.radius]};
    `}

    ${props.borderRadius &&
    css`
      border-radius: calc(
        ${props.borderRadius.valueStatic} ${props.borderRadius.opeation}
          ${props.borderRadius.valueDinamic}${props.borderRadius.unit}
      );
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
    width: 100%;
    height: 100%;
    ${
      props.width &&
      css`
        width: calc(10 * ${props.width}%);
      `
    }
    ${
      props.height &&
      css`
        height: calc(10 * ${props.height}%);
      `
    }
    display: ${props.display && props.display};
    position: ${props.position ? props.position : 'relative'};
    grid-area: ${props.gridArea};
    gap: ${props.gap && THEME_SPACE_DEFAULT[props.gap]};
    flex-wrap: ${props.flexWrap && THEME_FLEX_DEFAULT[props.flexWrap]};
    flex-grow: ${props.flexGrow && props.flexGrow};
    align-self: ${props.alignSelf && THEME_FLEX_DEFAULT[props.alignSelf]};
    flex-basis: ${props.flexBasis && THEME_SPACE_DEFAULT[props.flexBasis]};
    z-index: ${props.zIndex && props.zIndex};

    ${props.gridColumnsDefault && props.gridColumnsDefault};
    ${props.gridRows && props.gridRows};

    ${
      props.positionDefault &&
      props.positionDefault(
        props.position || 'absolute',
        props.zIndex || 1,
        props.top || 1,
        props.bottom || '',
        props.left || '',
        props.right || '',
        props.width || '',
        props.height || '',
        props.backgroundImg || '',
        props.backgroundColor || 'transparent',
        props.clipPath || false,
        props.transformX || false,
        props.transformY || false,
        props.translate || 0
      )
    };

    ${
      props.beforeDefault &&
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
      )
    };

    ${
      props.afterDefault &&
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
      )
    };

    transition: 0.25s ease;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      transition: all 0.25s ease;
      background: hsla(0, 0%, 11%, 0.4);
      cursor: pointer;
      transition: all 0.25s ease-in-out;
      z-index: 1;
    }

    &:hover::before {
      background: none;
    }

}

    ${
      props.radius &&
      css`
        border-radius: ${props.radius && THEME_SPACE_DEFAULT[props.radius]};
      `
    }

    ${
      props.isRadiusTop &&
      css`
        border-top-left-radius: ${props.radius &&
        THEME_SPACE_DEFAULT[props.radius]};
        border-top-right-radius: ${props.radius &&
        THEME_SPACE_DEFAULT[props.radius]};
      `
    }

    ${
      props.isRadiusBottom &&
      css`
        border-bottom-left-radius: ${props.radius &&
        THEME_SPACE_DEFAULT[props.radius]};
        border-bottom-right-radius: ${props.radius &&
        THEME_SPACE_DEFAULT[props.radius]};
      `
    }

    ${
      props.direction &&
      css`
        flex-direction: ${props.direction &&
        THEME_FLEX_DEFAULT[props.direction]};
      `
    }

    ${
      props.aitems &&
      css`
        align-items: ${props.aitems && THEME_FLEX_DEFAULT[props.aitems]};
      `
    }

    ${
      props.jcontent &&
      css`
        justify-content: ${props.jcontent &&
        THEME_FLEX_DEFAULT[props.jcontent]};
      `
    }
  `}
`;
