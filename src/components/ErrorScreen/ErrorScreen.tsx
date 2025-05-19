import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../Button/CustomButton';
import {colors} from '../../res/colors';
import {useApp} from '../../context/AppContext';

interface ErrorScreenProps {
  error: string;
  onRetry?: () => void;
}

export const ErrorScreen: React.FC<ErrorScreenProps> = ({error, onRetry}) => {
  const {isTransactionsLoading, isUserLoading} = useApp();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oops!</Text>
      <Text style={styles.message}>{error}</Text>
      {onRetry && (
        <CustomButton
          title="Try Again"
          onPress={onRetry}
          isLoading={isTransactionsLoading || isUserLoading}
          style={styles.button}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.state.error,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: colors.state.error,
  },
  button: {
    width: '100%',
  },
});
