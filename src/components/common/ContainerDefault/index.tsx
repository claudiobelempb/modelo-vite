import { TypeDefault } from '@assets/styles/themes/TypeDefault';

import * as Styles from './styles';

const ContainerDefault: React.FC<TypeDefault> = ({ children, ...props }) => {
  return (
    <Styles.ContainerDefaultStyle
      as={props.as}
      flexDefault={props.flexDefault}
      gridDefault={props.gridDefault}
      gridTemplateColumnsDefault={props.gridTemplateColumnsDefault}
      gridTemplateRowsDefault={props.gridTemplateRowsDefault}
      gridColumnDefault={props.gridColumnDefault}
      gridRowDefault={props.gridRowDefault}
      overallDefault={props.overallDefault}
      borderDefault={props.borderDefault}
      borderRadiusDefault={props.borderRadiusDefault}
      textHoverDefault={props.textHoverDefault}
      paddingDefault={props.paddingDefault}
      paddingStaticDefault={props.paddingStaticDefault}
      paddingStaticXDefault={props.paddingStaticXDefault}
      paddingStaticYDefault={props.paddingStaticYDefault}
      paddingDynamicDefault={props.paddingDynamicDefault}
      paddingDynamicXDefault={props.paddingDynamicXDefault}
      paddingDynamicYDefault={props.paddingDynamicYDefault}
      paddingTopDefault={props.paddingTopDefault}
      paddingRightDefault={props.paddingRightDefault}
      paddingBottomDefault={props.paddingBottomDefault}
      paddingLeftDefault={props.paddingLeftDefault}
      marginDefault={props.marginDefault}
      marginStaticDefault={props.marginStaticDefault}
      marginStaticXDefault={props.marginStaticXDefault}
      marginStaticYDefault={props.marginStaticYDefault}
      marginDynamicDefault={props.marginDynamicDefault}
      marginDynamicXDefault={props.marginDynamicXDefault}
      marginDynamicYDefault={props.marginDynamicYDefault}
      marginTopDefault={props.marginTopDefault}
      marginRightDefault={props.marginRightDefault}
      marginBottomDefault={props.marginBottomDefault}
      marginLeftDefault={props.marginLeftDefault}
      backgroundColorDefault={props.backgroundColorDefault}
      backgroundLinearGradientDefault={props.backgroundLinearGradientDefault}
      textColorDefault={props.textColorDefault}
      iconDefault={props.iconDefault}
      zIndexDefault={props.zIndexDefault}
      imparDefault={props.imparDefault}
      parDefault={props.parDefault}
      boxShadowDefault={props.boxShadowDefault}
    >
      {children}
    </Styles.ContainerDefaultStyle>
  );
};

export { ContainerDefault };
