import React, { useLayoutEffect } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, Profile, Tweet } from '../pages';

function getHeaderTitle(route: any) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return {
        headerTitle: 'Home',
        headerShown: true,
        headerTitleAlign: 'center'
      }
    case 'Tweet':
      return {
        headerTitle: 'Criar Tweet',
        headerShown: true,
        headerTitleAlign: 'center'
      }
    case 'Profile':
      return {
        headerShown: false
      }
  }
}

const Tab = createBottomTabNavigator();

export default function PrivateRoutes({ navigation, route }: any) {
  useLayoutEffect(() => {
    navigation.setOptions(getHeaderTitle(route));
  }, [navigation, route]);
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Tweet' component={Tweet} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  );
}