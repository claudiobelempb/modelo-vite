import {
  ThemeFlexType,
  ThemeMediaType,
  ThemeSize
} from '@assets/styles/themes/ThemeType';
import 'styled-components';

import { themeDefault } from '@assets/styles/themes/themeDefault';

type TypeThemeDefault = typeof themeDefault;

declare module 'styled-components' {
  export interface DefaultTheme extends TypeThemeDefault {
    flexDirectionDefault?: () => FlattenSimpleInterpolation;
    alignSelfDefault?: () => FlattenSimpleInterpolation;
    flexGapDefault?: () => FlattenSimpleInterpolation;
    justifyContentDefault?: () => FlattenSimpleInterpolation;
    alignItemsDefault?: () => FlattenSimpleInterpolation;
    flexBasisDefault?: () => FlattenSimpleInterpolation;
    flexGrowDefault?: () => FlattenSimpleInterpolation;
    title: string;
    colors: {
      grayHsla: 'hsla(0, 0%, 11%, 0.4)';
      grayDarkHsl: 'hsl(0, 0%, 17%)';
      grayLightHsl: 'hsl(0, 1%, 50%)';
      whiteHsl: 'hsl(0, 0%, 11%)';
      blackHsl: 'hsl(0, 0%, 11%)';
      green: '#2f8f9d';
      greenDark: '#1d5c63';
      greenLight: '#3bacb6';
      blue: '#2155cd';
      blueDark: '#242f9b';
      blueLight: '#dbdffd';
      red: 'red';
      redDark: '#FFFFFF';
      redLight: '#eb5353';
      gray: '#FFFFFF';
      grayDark: '#251d3a';
      grayLight: '#FFFFFF';
      grayRgba: 'rgba(0 0 0 / 0.5)';
      white: '#FFFFFF';
      black: '#000000';
      yellow: '#DBAC2C';
      yellowDark: '#C47F17';
      yellowLight: '#F1E9C9';
      purple: '#8047F8';
      purpleDark: '#4B2995';
      purpleLight: '#EBE5F9';
      title: 'hsl(0, 0%, 100%)';
      subTitle: '#403937';
      text: '#574F4D';
      hover: '#D7D5D5';
      button: '#E6E5E5';
      input: '#EDEDED';
      background: '#FAFAFA';
      label: '#8D8686';
      card: '#F3F2F2';
      bgHover: '#FFFFFF';
      textHover: 'blue';
    };
    size: ThemeSize;
    flex: ThemeFlexType;
    fonts: {
      fontFamile: string;
      fontWeight: {
        regular: string;
        bold: string;
        extraBold: string;
      };
    };
    media: ThemeMediaType;
  }
}
