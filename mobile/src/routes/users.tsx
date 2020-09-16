import React, { useLayoutEffect } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Home, Profile, Tweet } from '../pages';
import colors from '../styles';

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

const Tab = createBottomTabNavigator<UsersBottomParamList>();

export default function PrivateRoutes({ navigation, route }: any) {
  useLayoutEffect(() => {
    navigation.setOptions(getHeaderTitle(route));
  }, [navigation, route]);
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: `${colors.primary}`,
        showLabel: false,    
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='home' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Tweet'
        component={Tweet}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='message-circle' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='user' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}