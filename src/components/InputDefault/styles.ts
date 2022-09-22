import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import styled, { css } from 'styled-components';

export const InputDefaultContainer = styled.input<TypeDefault>`
  ${({ theme, as, ...props }) => css`
    border: 3px solid transparent;
    outline: none;
    background-color: transparent;
    color: ${theme.colors.grayLightHsl};

    /* Padding Static */
    ${props.paddingDefault && props.paddingDefault()};
    ${props.paddingStaticDefault && props.paddingStaticDefault()}
    ${props.paddingStaticXDefault && props.paddingStaticXDefault()}
    ${props.paddingStaticYDefault && props.paddingStaticYDefault()}
    ${props.paddingDynamicDefault && props.paddingDynamicDefault()}
    ${props.paddingDynamicXDefault && props.paddingDynamicXDefault()}
    ${props.paddingDynamicYDefault && props.paddingDynamicYDefault()}
    ${props.paddingTopDefault && props.paddingTopDefault()}
    ${props.paddingRightDefault && props.paddingRightDefault()}
    ${props.paddingBottomDefault && props.paddingBottomDefault()}
    ${props.paddingLeftDefault && props.paddingLeftDefault()}
    /* Padding Static */
    ${props.marginDefault && props.marginDefault()};
    ${props.marginStaticDefault && props.marginStaticDefault()}
    ${props.marginStaticXDefault && props.marginStaticXDefault()}
    ${props.marginStaticYDefault && props.marginStaticYDefault()}
    ${props.marginDynamicDefault && props.marginDynamicDefault()}
    ${props.marginDynamicXDefault && props.marginDynamicXDefault()}
    ${props.marginDynamicYDefault && props.marginDynamicYDefault()}
    ${props.marginTopDefault && props.marginTopDefault()}
    ${props.marginRightDefault && props.marginRightDefault()}
    ${props.marginBottomDefault && props.marginBottomDefault()}
    ${props.marginLeftDefault && props.marginLeftDefault()}
    /*BORDER RADIUS DEFAULT */
    ${props.borderRadiusDefault && props.borderRadiusDefault()};
    ${props.borderRadiusTopRightDefault && props.borderRadiusTopRightDefault()};
    ${props.borderRadiusTopLeftDefault && props.borderRadiusTopLeftDefault()};
    ${props.borderRadiusBottomRightDefault &&
    props.borderRadiusBottomRightDefault()};
    ${props.borderRadiusBottomLeftDefault &&
    props.borderRadiusBottomLeftDefault()};
    /*BORDER DEFAULT */
    ${props.borderDefault && props.borderDefault()};
    ${props.borderTopDefault && props.borderTopDefault()};
    ${props.borderRightDefault && props.borderRightDefault()};
    ${props.borderBottomDefault && props.borderBottomDefault()};
    ${props.borderLeftDefault && props.borderLeftDefault()};
    /*HEIGHT DEFAULT  */
    ${props.heightStaticDefault && props.heightStaticDefault()}
    ${props.heightDynamicDefault && props.heightDynamicDefault()}
    /*WIDTH DEFAULT  */
    ${props.widthStaticDefault && props.widthStaticDefault()}
    ${props.widthDynamicDefault && props.widthDynamicDefault()}
    /*AFTER DEFAULT  */
    ${props.afterDefault && props.afterDefault()};
    /*BEFORE DEFAULT  */
    ${props.beforeDefault && props.beforeDefault()};
    /*FONT DEFAULT  */
    ${props.textTransformDefault && props.textTransformDefault()};
    ${props.textDecoretionlineThrough && props.textDecoretionlineThrough()};
    ${props.fontSizeDefault && props.fontSizeDefault()};
    ${props.fontSizeDefaultDynamic && props.fontSizeDefaultDynamic()};
    ${props.textAlignDefault && props.textAlignDefault()};
    ${props.textColorDefault && props.textColorDefault()};
    ${props.backgroundColorDefault && props.backgroundColorDefault()};

    &:focus {
      border: 1px solid ${theme.colors.grayLightHsl};
      outline: none;
      /* border-color: red; */
    }

    &::placeholder {
      background-color: transparent;
      color: ${theme.colors.grayLightHsl};
    }

    &[type='text'],
    &[type='email'],
    &[type='password'],
    &[type='number'],
    &[type='submit'],
    &[type='reset']:focus {
      outline: none;
      padding: 1rem 2rem;
      border-radius: 1rem;
      color: ${theme.colors.grayLightHsl};
      border: none;
    }
  `}
`;

export const LabelDefaultContainer = styled.label<TypeDefault>`
  ${({ theme, ...props }) => css`
    font-size: 1.6rem;
    color: ${theme.colors.label};
    margin-bottom: 0.5rem;
  `}
`;
