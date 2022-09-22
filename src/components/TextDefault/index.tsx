import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import * as Styles from './styles';

const TextDefault: React.FC<TypeDefault> = ({ children, ...props }) => {
  return (
    <>
      <Styles.ContainerTextDefault
        as={props.as}
        beforeDefault={props.beforeDefault}
        afterDefault={props.afterDefault}
        effectDefault={props.effectDefault}
        heightStaticDefault={props.heightStaticDefault}
        heightDynamicDefault={props.heightDynamicDefault}
        widthStaticDefault={props.widthStaticDefault}
        widthDynamicDefault={props.widthDynamicDefault}
        fontSizeDefault={props.fontSizeDefault}
        fontLineHeightDefault={props.fontLineHeightDefault}
        textTransformDefault={props.textTransformDefault}
        textAlignDefault={props.textAlignDefault}
        textDecoretionlineThrough={props.textDecoretionlineThrough}
        textColorDefault={props.textColorDefault}
        backgroundColorDefault={props.backgroundColorDefault}
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
      </Styles.ContainerTextDefault>
    </>
  );
};

export { TextDefault };
