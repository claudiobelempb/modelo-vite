import { css } from 'styled-components';
import { THEME_SPACE_DEFAULT } from '../ThemeType';
import { TypeDefault } from '../TypeDefault';

export const isPositionDefault = ({ ...props }: TypeDefault) => css`
  content: '';
  width: ${props.width && THEME_SPACE_DEFAULT[props.width]};
  height: ${props.height && THEME_SPACE_DEFAULT[props.height]};
  position: ${props.position && props.position};
  top: ${props.top && THEME_SPACE_DEFAULT[props.top]};
  bottom: ${props.bottom && THEME_SPACE_DEFAULT[props.bottom]};
  left: ${props.left && THEME_SPACE_DEFAULT[props.left]};
  right: ${props.right && THEME_SPACE_DEFAULT[props.right]};
  z-index: ${props.zIndex && props.zIndex};
  transform: translateX(-50%);
`;
