import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileStackParamList} from '../types/navigation';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen/EditProfileScreen';
import WalletSettingsScreen from '../screens/WalletSettingsScreen/WalletSettingsScreen';
import {
  SCREEN_PROFILE_MAIN,
  SCREEN_EDIT_PROFILE,
  SCREEN_WALLET_SETTINGS,
} from '../res/routes';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREEN_PROFILE_MAIN} component={ProfileScreen} />
      <Stack.Screen name={SCREEN_EDIT_PROFILE} component={EditProfileScreen} />
      <Stack.Screen
        name={SCREEN_WALLET_SETTINGS}
        component={WalletSettingsScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
