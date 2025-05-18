import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Navigation} from './src/navigation/Navigation';
import {theme} from './src/res/theme';
import {AppProvider, useApp} from './src/context/AppContext';

const AppContent = () => {
  const {init} = useApp();

  useEffect(() => {
    init();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <Navigation theme={theme} />;
};

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </SafeAreaProvider>
  );
}

export default App;
