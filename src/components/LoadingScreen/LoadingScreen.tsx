import {View, ActivityIndicator} from 'react-native';
import {colors} from '../../res/colors';
import React from 'react';

interface ILoadingScreenProps {
  isLoading: boolean;
  children: React.ReactNode;
}

const LoadingScreen = ({isLoading, children}: ILoadingScreenProps) => {
  return (
    <View style={styles.flex}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      ) : (
        children
      )}
    </View>
  );
};

export default LoadingScreen;

import {ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  flex: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
