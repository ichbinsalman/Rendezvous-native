import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';

const AuthStack = createStackNavigator({
  Auth: LoginScreen
});

export default AuthStack;
