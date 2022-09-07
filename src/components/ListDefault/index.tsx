import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import * as Styles from './styles';

const ListDefault: React.FC<TypeDefault> = ({ ...props }) => {
  switch (props.model) {
    case 1: {
      return (
        <Styles.ListDefaultContainer
          as={props.as}
          iconBgcolor={props.iconBgcolor}
          iconColor={props.iconColor}
          iconSize={props.iconSize}
          display={props.display}
          jcontent={props.jcontent}
          aitems={props.aitems}
          direction={props.direction}
          padding={props.padding}
          paddingX={props.paddingX}
          paddingY={props.paddingY}
          margin={props.margin}
          marginTop={props.marginTop}
          marginBottom={props.marginBottom}
          marginX={props.marginX}
          marginY={props.marginY}
          isVisibility={props.isVisibility}
          isDisplay={props.isDisplay}
          gap={props.gap}
        >
          {props.children}
        </Styles.ListDefaultContainer>
      );
    }
    default: {
      return (
        <Styles.ListDefaultContainer
          as={props.as}
          iconBgcolor={props.iconBgcolor}
          iconColor={props.iconColor}
          iconSize={props.iconSize}
          display={props.display}
          jcontent={props.jcontent}
          aitems={props.aitems}
          direction={props.direction}
          padding={props.padding}
          paddingX={props.paddingX}
          paddingY={props.paddingY}
          margin={props.margin}
          marginTop={props.marginTop}
          marginBottom={props.marginBottom}
          marginX={props.marginX}
          marginY={props.marginY}
          isVisibility={props.isVisibility}
          isDisplay={props.isDisplay}
          gap={props.gap}
        >
          {props.children}
        </Styles.ListDefaultContainer>
      );
    }
  }
};

export { ListDefault };
