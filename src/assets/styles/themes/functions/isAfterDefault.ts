import { css } from 'styled-components';
import { THEME_COLORS_DEFAULT, THEME_SPACE_DEFAULT } from '../ThemeType';
import { TypeDefault } from '../TypeDefault';

export const isAfterDefault = ({ ...props }: TypeDefault) => css`
  ${props.isAfter &&
  css`
    &::after {
      content: '';
      position: ${props.afterPosition && props.afterPosition};
      z-index: ${props.afterZindex && props.afterZindex};
      top: ${props.afterTop && props.afterTop + '%'};
      bottom: ${props.afterBottom && props.afterBottom + '%'};
      left: ${props.afterLeft && props.afterLeft + '%'};
      width: ${props.afterWidth ? THEME_SPACE_DEFAULT[props.afterWidth] : ''};
      height: ${props.afterHeight && THEME_SPACE_DEFAULT[props.afterHeight]};
      background-image: url(${props.afterBackgroundImg});
      background-color: ${props.afterBackgroundColor &&
      THEME_COLORS_DEFAULT[props.afterBackgroundColor]};
      ${props.afterClipPath &&
      css`
        clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 100%, 0% 0%);
      `}
    }
  `}
`;
