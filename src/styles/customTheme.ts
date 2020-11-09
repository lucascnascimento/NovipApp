import {DefaultTheme as PaperDefaultTheme} from 'react-native-paper';

export const combinedDefaultTheme = {
  ...PaperDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: '#F44802',
    accent: '#373435',
  },
};
