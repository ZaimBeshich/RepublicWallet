import {Theme} from '@react-navigation/native';
import {colors} from './colors';

interface CustomTheme extends Theme {
  fonts: {
    regular: {
      fontFamily: string;
      fontWeight: string;
    };
    medium: {
      fontFamily: string;
      fontWeight: string;
    };
    bold: {
      fontFamily: string;
      fontWeight: string;
    };
    heavy: {
      fontFamily: string;
      fontWeight: string;
    };
  };
}

export const theme: CustomTheme = {
  dark: true,
  colors: {
    primary: colors.primary,
    background: colors.background.primary,
    card: colors.background.secondary,
    text: colors.text.primary,
    border: colors.border.primary,
    notification: colors.system.red,
  },
  fonts: {
    regular: {
      fontFamily: 'System',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'System',
      fontWeight: '500',
    },
    bold: {
      fontFamily: 'System',
      fontWeight: '700',
    },
    heavy: {
      fontFamily: 'System',
      fontWeight: '900',
    },
  },
};
