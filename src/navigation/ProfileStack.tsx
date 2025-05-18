import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SCREEN_PROFILE_MAIN, SCREEN_EDIT_PROFILE} from '../res/routes';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import {ProfileStackParamList} from '../types/navigation';
import EditProfileScreen from '../screens/EditProfileScreen/EditProfileScreen';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName={SCREEN_PROFILE_MAIN}>
      <Stack.Screen
        component={ProfileScreen}
        name={SCREEN_PROFILE_MAIN}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        component={EditProfileScreen}
        name={SCREEN_EDIT_PROFILE}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
