import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import styled, { css } from 'styled-components';

export const ContentDefaultStyle = styled.div<TypeDefault>`
  ${({ theme, as, ...props }) => css`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    /* z-index: -30; */
    /* background-color: green; */

    /*UTILS DEFAULT */
    ${props.zIndexDefault && props.zIndexDefault()}
    ${props.imparDefault && props.imparDefault()}
    ${props.parDefault && props.parDefault()}
    ${props.boxShadowDefault && props.boxShadowDefault()}

    /*POSITION DEFAULT  */
    ${props.positionDefault && props.positionDefault()};
    /*EFFECT DEFAULT  */
    ${props.effectDefault && props.effectDefault()};
    /*AFTER DEFAULT  */
    ${props.afterDefault && props.afterDefault()};
    /*BEFORE DEFAULT  */
    ${props.beforeDefault && props.beforeDefault()};
    /*BACKGROUND IMG DEFAULT  */
    ${props.backgroundImgDefault && props.backgroundImgDefault()};
    /*BORDER DEFAULT  */
    ${props.borderDefault && props.borderDefault()}
    /*COLOR DEFAULT  */
    ${props.backgroundColorDefault && props.backgroundColorDefault()}
    ${props.backgroundLinearGradientDefault &&
    props.backgroundLinearGradientDefault()}
    ${props.textColorDefault && props.textColorDefault()}
    ${props.iconDefault && props.iconDefault()}

    /*HEIGHT DEFAULT  */
    ${props.heightStaticDefault && props.heightStaticDefault()}
    ${props.heightDynamicDefault && props.heightDynamicDefault()}
    ${props.widthStaticDefault && props.widthStaticDefault()}
    ${props.widthDynamicDefault && props.widthDynamicDefault()}

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

    ${props.gridTemplateColumnsDefault && props.gridTemplateColumnsDefault()}
    ${props.gridTemplateColumnsStaticDefault &&
    props.gridTemplateColumnsStaticDefault()}
    ${props.gridTemplateRowsDefault && props.gridTemplateRowsDefault()}
    ${props.gridColumnDefault && props.gridColumnDefault()}
    ${props.gridRowDefault && props.gridRowDefault()}
    ${props.overallDefault && props.overallDefault()}
    /* FLEX DEFAULT */
    ${props.flexDirectionDefault && props.flexDirectionDefault()}
    ${props.alignSelfDefault && props.alignSelfDefault()}
    ${props.justifyContentDefault && props.justifyContentDefault()}
    ${props.flexGapDefault && props.flexGapDefault()}
    ${props.alignItemsDefault && props.alignItemsDefault()}
    ${props.flexBasisDefault && props.flexBasisDefault()}
    ${props.flexGrowDefault && props.flexGrowDefault()}
    ${props.flexWrapDefault && props.flexWrapDefault()}
    ${props.backgroundLinearGradientDefault &&
    props.backgroundLinearGradientDefault()};

    /* UTILS DEFAULT */
    ${props.zIndexDefault && props.zIndexDefault()}
    ${props.imparDefault && props.imparDefault()}
    ${props.parDefault && props.parDefault()}
    ${props.boxShadowDefault && props.boxShadowDefault()}
  `}
`;
