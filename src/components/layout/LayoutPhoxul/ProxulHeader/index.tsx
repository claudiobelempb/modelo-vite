import {
  backgroundColorDefault,
  textColorDefault
} from '@assets/styles/themes/functions/colorDefault';
import { alignSelfDefault } from '@assets/styles/themes/functions/flexDefault';
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
import { useState } from 'react';

import { Link } from 'react-router-dom';
import { ButtonHumburger } from '../ButtonHumburger';
import { NavigationDesktopDefault } from '../NavigationDesktopDefault/';
import { NavigationMobileDefault } from '../NavigationMobileDefault';

const ProxulHeader: React.FC = () => {
  const [isOpenHumburger, setIsOpenHumburger] = useState<boolean>(false);
  const [isOpenNavigation, setIsOpenNavigation] = useState<boolean>(false);

  const handleOpenHumburger = () => {
    console.log('CLick');
    setIsOpenHumburger(!isOpenHumburger);
    setIsOpenNavigation(!isOpenNavigation);
  };

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
      <BoxDefault
        alignSelfDefault={() => alignSelfDefault('flex-start')}
        displayDefault={() => displayDefault('flex')}
      >
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
      <NavigationDesktopDefault />
      <NavigationMobileDefault isDisplay={isOpenHumburger} />
      <ButtonHumburger
        isOpenHumburger={isOpenHumburger}
        handleOpenHumburger={handleOpenHumburger}
      />
    </ContentDefault>
  );
};

export { ProxulHeader };
