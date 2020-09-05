import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Preload, Login, Register } from '../pages';

const MainStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName='Preload'
        screenOptions={{
          headerShown: false
        }}
      >
        <MainStack.Screen name='Preload' component={Preload} />
        <MainStack.Screen name='Login' component={Login} />
        <MainStack.Screen name='Register' component={Register} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}