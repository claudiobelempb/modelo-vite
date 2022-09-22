import {
  backgroundColorDefault,
  textColorDefault
} from '@assets/styles/themes/functions/colorDefault';
import { effectHoverDefault } from '@assets/styles/themes/functions/effectDefaults';
import {
  flexGapDefault,
  justifyContentDefault
} from '@assets/styles/themes/functions/flexDefault';
import { fontSizeStaticDefault } from '@assets/styles/themes/functions/fontDefault';
import { overallDefault } from '@assets/styles/themes/functions/gridDefault';
import {
  paddingDynamicXDefault,
  paddingDynamicYDefault
} from '@assets/styles/themes/functions/paddingDefault';
import { displayDefault } from '@assets/styles/themes/functions/utilsDefault';
import { BoxDefault } from '@componets/common/BoxDefault';
import { ContentDefault } from '@componets/common/ContentDefault';
import { HeadingDefault } from '@componets/common/HeadingDefault';
import { TextDefault } from '@componets/common/TextDefault';
import { Link, NavLink } from 'react-router-dom';

const ProxulHeader: React.FC = () => {
  return (
    <ContentDefault
      as='header'
      overallDefault={() => overallDefault()}
      backgroundColorDefault={() => backgroundColorDefault('grayHsl')}
      paddingDynamicXDefault={() =>
        paddingDynamicXDefault({ vstatic: 2, vdynamic: 12 })
      }
      paddingDynamicYDefault={() =>
        paddingDynamicYDefault({ vstatic: 1, vdynamic: 2 })
      }
      fontSizeStaticDefault={() => fontSizeStaticDefault({ vstatic: 2 })}
    >
      <BoxDefault>
        <Link to={'/'}>
          <HeadingDefault
            fontSizeStaticDefault={() => fontSizeStaticDefault({ vstatic: 2 })}
            textColorDefault={() => textColorDefault({ color: 'whiteHsl' })}
            as='h1'
          >
            Proxul
          </HeadingDefault>
        </Link>
      </BoxDefault>
      <BoxDefault
        as='ul'
        displayDefault={() => displayDefault('flex')}
        justifyContentDefault={() => justifyContentDefault('flex-end')}
        flexGapDefault={() => flexGapDefault({ column: 3 })}
      >
        <NavLink to={'/'}>
          <TextDefault
            textColorDefault={() => textColorDefault({ color: 'whiteHsl' })}
          >
            Home
          </TextDefault>
        </NavLink>

        <NavLink to={'/'}>
          <TextDefault
            effectHoverDefault={() =>
              effectHoverDefault({
                color: 'whiteHsl',
                backgroundColor: 'transparent'
              })
            }
            textColorDefault={() => textColorDefault({ color: 'grayLightHsl' })}
          >
            Services
          </TextDefault>
        </NavLink>
        <NavLink to={'/'}>
          <TextDefault
            effectHoverDefault={() =>
              effectHoverDefault({
                color: 'whiteHsl',
                backgroundColor: 'transparent'
              })
            }
            textColorDefault={() => textColorDefault({ color: 'grayLightHsl' })}
          >
            Works
          </TextDefault>
        </NavLink>
        <NavLink to={'/'}>
          <TextDefault
            effectHoverDefault={() =>
              effectHoverDefault({
                color: 'whiteHsl',
                backgroundColor: 'transparent'
              })
            }
            textColorDefault={() => textColorDefault({ color: 'grayLightHsl' })}
          >
            Gallery
          </TextDefault>
        </NavLink>
        <NavLink to={'/'}>
          <TextDefault
            effectHoverDefault={() =>
              effectHoverDefault({
                color: 'whiteHsl',
                backgroundColor: 'transparent'
              })
            }
            textColorDefault={() => textColorDefault({ color: 'grayLightHsl' })}
          >
            Blog
          </TextDefault>
        </NavLink>
        <NavLink to={'/'}>
          <TextDefault
            effectHoverDefault={() =>
              effectHoverDefault({
                color: 'whiteHsl',
                backgroundColor: 'transparent'
              })
            }
            textColorDefault={() => textColorDefault({ color: 'grayLightHsl' })}
          >
            Contact
          </TextDefault>
        </NavLink>
      </BoxDefault>
    </ContentDefault>
  );
};

export { ProxulHeader };
