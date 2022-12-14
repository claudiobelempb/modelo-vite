import { TypeDefault } from '@assets/styles/themes/TypeDefault';

import * as Styles from './styles';

const ContentDefault: React.FC<TypeDefault> = ({ children, as, ...props }) => {
  return (
    <Styles.ContentDefaultStyle
      as={as}
      effectDefault={props.effectDefault}
      beforeDefault={props.beforeDefault}
      afterDefault={props.afterDefault}
      positionDefault={props.positionDefault}
      backgroundImgDefault={props.backgroundImgDefault}
      heightStaticDefault={props.heightStaticDefault}
      heightDynamicDefault={props.heightDynamicDefault}
      widthStaticDefault={props.widthStaticDefault}
      widthDynamicDefault={props.widthDynamicDefault}
      gridDefault={props.gridDefault}
      gridTemplateColumnsDefault={props.gridTemplateColumnsDefault}
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
      backgroundLinearGradientDefault={props.backgroundLinearGradientDefault}
      borderDefault={props.borderDefault}
      borderRadiusDefault={props.borderRadiusDefault}
      textColorDefault={props.textColorDefault}
      textHoverDefault={props.textHoverDefault}
      backgroundColorDefault={props.backgroundColorDefault}
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
    >
      {children}
    </Styles.ContentDefaultStyle>
  );
};

export { ContentDefault };
