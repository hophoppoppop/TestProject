/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  createStaticNavigation,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import WelcomeScreen from './src/screens/WelcomeScreen/WelcomeScreen';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  function RootStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
