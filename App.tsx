import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Navigation} from './src/navigation/Navigation';
import {theme} from './src/res/theme';
import {AppProvider, useApp} from './src/context/AppContext';
import {StyleSheet, View} from 'react-native';
import {ErrorScreen} from './src/components/ErrorScreen/ErrorScreen';
import Toast from 'react-native-toast-message';

const AppContent = () => {
  const {init, error, networkError, setNetworkError} = useApp();

  useEffect(() => {
    const showToast = () => {
      Toast.show({
        text1: networkError || 'Something went wrong',
        type: 'error',
        visibilityTime: 6000,
        position: 'top',
        topOffset: 150,
      });
      setNetworkError(null);
    };
    if (networkError) {
      showToast();
    }
  }, [networkError, setNetworkError]);

  if (error) {
    return <ErrorScreen error={error} onRetry={init} />;
  }

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
      <Toast />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
