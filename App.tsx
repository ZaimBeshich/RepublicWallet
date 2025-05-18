import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Navigation} from './src/navigation/Navigation';
import {theme} from './src/res/theme';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <Navigation theme={theme} />
    </SafeAreaProvider>
  );
}

export default App;
