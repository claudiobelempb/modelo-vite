import { TypeDefault } from '@assets/styles/themes/TypeDefault';

import * as Styles from './styles';

const ButtonDefault: React.FC<TypeDefault> = ({
  children,
  title,
  isIconLeft = true,
  isIconRight,
  fontSize,
  onClick,
  bgtext,
  bgcolor,
  direction,
  aitems,
  jcontent,
  isPosition,
  left,
  right,
  top,
  bottom,
  padding,
  paddingX,
  paddingY,
  margin,
  marginX,
  marginY,
  width,
  height,
  gap,
  isUppercase,
  ...props
}) => {
  return (
    <Styles.ButtonDefaultContainer
      beforeDefault={props.beforeDefault}
      afterDefault={props.afterDefault}
      effectDefault={props.effectDefault}
      heightStaticDefault={props.heightStaticDefault}
      heightDynamicDefault={props.heightDynamicDefault}
      widthDynamicDefault={props.widthDynamicDefault}
      widthStaticDefault={props.widthStaticDefault}
      fontSizeDefault={props.fontSizeDefault}
      textTransformDefault={props.textTransformDefault}
      textAlignDefault={props.textAlignDefault}
      textDecoretionlineThrough={props.textDecoretionlineThrough}
      flexDefault={props.flexDefault}
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
      flexGrowDefault={props.flexGrowDefault}
      iconDefault={props.iconDefault}
      paddingDefault={props.paddingDefault}
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
    >
      {isIconLeft && children}
      {title ? title : ''}
      {isIconRight && children}
    </Styles.ButtonDefaultContainer>
  );
};

export { ButtonDefault };
