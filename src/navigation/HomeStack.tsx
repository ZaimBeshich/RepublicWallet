import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SCREEN_HOME, SCREEN_TRANSACTION_DETAILS} from '../res/routes';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import {HomeStackParamList} from '../types/navigation';
import TransactionDetails from '../screens/TransactionDetails/TransactionDetails';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={SCREEN_HOME}>
      <Stack.Screen
        component={HomeScreen}
        name={SCREEN_HOME}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        component={TransactionDetails}
        name={SCREEN_TRANSACTION_DETAILS}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
