import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Timer, Report} from '../screens';
const Stack = createStackNavigator();

export default function Router() {
  return (
    <>
      <Stack.Navigator initialRouteName={'Timer'}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Timer"
          component={Timer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Report"
          component={Report}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
}
