import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import * as Styles from './styles';

const ImgDefault: React.FC<TypeDefault> = ({ ...props }) => {
  return (
    <Styles.FigureDefaultContainer
      src={props.src}
      alt={props.alt}
      zIndexDefault={props.zIndexDefault}
      imparDefault={props.imparDefault}
      parDefault={props.parDefault}
      boxShadowDefault={props.boxShadowDefault}
      positionDefault={props.positionDefault}
      afterDefault={props.afterDefault}
      beforeDefault={props.beforeDefault}
      flexDefault={props.flexDefault}
      gridDefault={props.gridDefault}
      gridTemplateColumnsDefault={props.gridTemplateColumnsDefault}
      gridTemplateRowsDefault={props.gridTemplateRowsDefault}
      gridColumnDefault={props.gridColumnDefault}
      gridRowDefault={props.gridRowDefault}
      overallDefault={props.overallDefault}
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
      <Styles.ImgDefaultContainer
        loading='lazy'
        src={props.src}
        alt={props.alt}
        heightStaticDefault={props.heightStaticDefault}
        heightDynamicDefault={props.heightDynamicDefault}
        widthStaticDefault={props.widthStaticDefault}
        widthDynamicDefault={props.widthDynamicDefault}
        effectDefault={props.effectDefault}
        borderDefault={props.borderDefault}
        borderTopDefault={props.borderTopDefault}
        borderRightDefault={props.borderTopDefault}
        borderBottomDefault={props.borderBottomDefault}
        borderLeftDefault={props.borderLeftDefault}
        borderRadiusDefault={props.borderRadiusDefault}
        borderRadiusTopRightDefault={props.borderRadiusTopRightDefault}
        borderRadiusTopLeftDefault={props.borderRadiusTopLeftDefault}
        borderRadiusBottomRightDefault={props.borderRadiusBottomRightDefault}
        borderRadiusBottomLeftDefault={props.borderRadiusBottomLeftDefault}
      />
    </Styles.FigureDefaultContainer>
  );
};

export { ImgDefault };
