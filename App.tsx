/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import WelcomeScreen from './src/screens/WelcomeScreen/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import {RootRouteParamList} from './src/types/router';
import {
  DRAWER_SCREEN,
  HOME_SCREEN,
  LOGIN_SCREEN,
  REGISTER_SCREEN,
  WELCOME_SCREEN,
} from './src/constants/router';
import RegisterScreen from './src/screens/RegisterScreen/RegisterScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import {navigationRef, reset} from './src/helpers/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ASYNCSTORAGE_KEY} from './src/constants/asyncstorage';
import {useAppDispatch} from './src/hooks/redux';
import {setToken} from './src/redux/slices/user';
import DrawerScreen from './src/screens/DrawerScreen/DrawerScreen';
import {initApps} from './src/helpers/initialize';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator<RootRouteParamList>();
  const Drawer = createDrawerNavigator<RootRouteParamList>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    initApps(dispatch);
  }, []);

  function RootDrawer() {
    return (
      <Drawer.Navigator
        initialRouteName={HOME_SCREEN}
        drawerContent={props => <DrawerScreen {...props} />}
        screenOptions={{
          headerShown: false,
        }}>
        <Drawer.Screen name={HOME_SCREEN} component={HomeScreen} />
      </Drawer.Navigator>
    );
  }

  function RootStack() {
    return (
      <Stack.Navigator
        initialRouteName={WELCOME_SCREEN}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={WELCOME_SCREEN} component={WelcomeScreen} />
        <Stack.Screen
          name={LOGIN_SCREEN}
          component={LoginScreen}
          options={{
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name={REGISTER_SCREEN}
          component={RegisterScreen}
          options={{
            animation: 'fade',
          }}
        />
        <Stack.Screen name={DRAWER_SCREEN} component={RootDrawer} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
