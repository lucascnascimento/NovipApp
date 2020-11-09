import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {combinedDefaultTheme} from './styles/customTheme';

declare const global: {HermesInternal: null | {}};

import Navigator from './Navigator';

const App = () => {
  return (
    <PaperProvider theme={combinedDefaultTheme}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
