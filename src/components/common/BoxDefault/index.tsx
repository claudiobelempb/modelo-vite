import { TypeDefault } from '@assets/styles/themes/TypeDefault';

import * as Styles from './styles';

const BoxDefault: React.FC<TypeDefault> = ({ ...props }) => {
  return (
    <Styles.BoxDefaultStyle
      as={props.as}
      beforeDefault={props.beforeDefault}
      afterDefault={props.afterDefault}
      effectDefault={props.effectDefault}
      effectHoverDefault={props.effectHoverDefault}
      effectHoverBeforeDefault={props.effectHoverBeforeDefault}
      effectHoverAfterDefault={props.effectHoverAfterDefault}
      heightStaticDefault={props.heightStaticDefault}
      heightDynamicDefault={props.heightDynamicDefault}
      widthDynamicDefault={props.widthDynamicDefault}
      widthStaticDefault={props.widthStaticDefault}
      fontSizeStaticDefault={props.fontSizeStaticDefault}
      fontSizeDynamicDefault={props.fontSizeDynamicDefault}
      textTransformDefault={props.textTransformDefault}
      textAlignDefault={props.textAlignDefault}
      textDecoretionlineThrough={props.textDecoretionlineThrough}
      flexDefault={props.flexDefault}
      gridDefault={props.gridDefault}
      gridTemplateColumnsDefault={props.gridTemplateColumnsDefault}
      gridTemplateColumnsStaticDefault={props.gridTemplateColumnsStaticDefault}
      gridTemplateRowsDefault={props.gridTemplateRowsDefault}
      gridColumnDefault={props.gridColumnDefault}
      gridRowDefault={props.gridRowDefault}
      overallDefault={props.overallDefault}
      flexDirectionDefault={props.flexDirectionDefault}
      flexGapDefault={props.flexGapDefault}
      justifyContentDefault={props.justifyContentDefault}
      alignItemsDefault={props.alignItemsDefault}
      alignSelfDefault={props.alignSelfDefault}
      flexBasisDefault={props.flexBasisDefault}
      iconDefault={props.iconDefault}
      backgroundColorDefault={props.backgroundColorDefault}
      borderDefault={props.borderDefault}
      borderTopDefault={props.borderTopDefault}
      borderRightDefault={props.borderRightDefault}
      borderBottomDefault={props.borderBottomDefault}
      borderLeftDefault={props.borderLeftDefault}
      borderRadiusDefault={props.borderRadiusDefault}
      borderRadiusTopRightDefault={props.borderRadiusTopRightDefault}
      borderRadiusTopLeftDefault={props.borderRadiusTopLeftDefault}
      borderRadiusBottomRightDefault={props.borderRadiusBottomRightDefault}
      borderRadiusBottomLeftDefault={props.borderRadiusBottomLeftDefault}
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
      zIndexDefault={props.zIndexDefault}
      imparDefault={props.imparDefault}
      parDefault={props.parDefault}
      boxShadowDefault={props.boxShadowDefault}
      displayDefault={props.displayDefault}
      positionDefault={props.positionDefault}
      visibilityDefault={props.visibilityDefault}
    >
      {props.children}
    </Styles.BoxDefaultStyle>
  );
};

export { BoxDefault };
