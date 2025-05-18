import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Navigation} from './src/navigation/Navigation';
import {theme} from './src/res/theme';
import {AppProvider, useApp} from './src/context/AppContext';
import {StyleSheet, View} from 'react-native';

const AppContent = () => {
  const {init} = useApp();

  useEffect(() => {
    init();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <Navigation theme={theme} />;
};

function App(): React.JSX.Element {
  return (
    <View testID="app-container" style={styles.container}>
      <SafeAreaProvider>
        <AppProvider>
          <AppContent />
        </AppProvider>
      </SafeAreaProvider>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
