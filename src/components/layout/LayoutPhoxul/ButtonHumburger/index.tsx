import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import * as style from './style';

type ButtonHumburgerContainerProps = {
  handleOpenHumburger?: () => void;
  isOpenHumburger?: boolean;
};

type ButtonHumburgerType = TypeDefault & ButtonHumburgerContainerProps;

const ButtonHumburger: React.FC<ButtonHumburgerType> = ({ ...props }) => {
  return (
    <style.ButtonHumburgerContainer
      isOpenHumburger={props.isOpenHumburger}
      onClick={props.handleOpenHumburger}
    >
      <div></div>
      <div></div>
      <div></div>
    </style.ButtonHumburgerContainer>
  );
};

export { ButtonHumburger };
