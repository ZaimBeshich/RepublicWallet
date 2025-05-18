import React from 'react';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList, MainTabParamList} from '../types/navigation';
import {colors} from '../res/colors';
import HomeStack from './HomeStack';
import {ROOT_MAIN, STACK_HOME, STACK_PROFILE} from '../res/routes';
import ProfileStack from './ProfileStack';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text.tertiary,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          backgroundColor: colors.background.secondary,
          borderTopColor: colors.border.primary,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: '600',
        },
        headerShown: false,
        tabBarIcon: () => null,
      }}>
      <Tab.Screen name={STACK_HOME} component={HomeStack} />
      <Tab.Screen name={STACK_PROFILE} component={ProfileStack} />
    </Tab.Navigator>
  );
};

export const Navigation = ({theme}: {theme: Theme}) => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROOT_MAIN} component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
