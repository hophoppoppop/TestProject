/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';

import images from './src/assets/images';
import TabButton from './src/components/TabButton/TabButton';
import {ASYNCSTORAGE_KEY} from './src/constants/asyncstorage';
import {
  HOME_SCREEN,
  LOGIN_SCREEN,
  PROFILE_SCREEN,
  PROMOS_SCREEN,
  REGISTER_SCREEN,
  TAB_SCREEN,
  WELCOME_SCREEN,
} from './src/constants/router';
import {RootRouteParamList} from './src/customTypes/router';
import {initApps} from './src/helpers/initialize';
import {navigationRef} from './src/helpers/navigation';
import {useAppDispatch} from './src/hooks/redux';
import {setToken} from './src/redux/slices/user';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen/RegisterScreen';
import WelcomeScreen from './src/screens/WelcomeScreen/WelcomeScreen';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator<RootRouteParamList>();
  const Tab = createBottomTabNavigator<RootRouteParamList>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    initApps(dispatch);
  }, []);

  function RootTab() {
    return (
      <Tab.Navigator
        initialRouteName={HOME_SCREEN}
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name={HOME_SCREEN}
          options={{
            tabBarLabel: 'HOME',
            tabBarIcon: ({focused, size}) => {
              return (
                <TabButton
                  size={size}
                  focused={focused}
                  highlightedIcon={images.ICON_HOME_HIGHLIGHTED}
                  unhighlightedIcon={images.ICON_HOME_UNHIGHLIGHTED}
                />
              );
            },
          }}
          component={HomeScreen}
        />
        <Tab.Screen
          name={PROMOS_SCREEN}
          options={{
            tabBarLabel: 'PROMO',
            tabBarIcon: ({focused, size}) => {
              return (
                <TabButton
                  size={size}
                  focused={focused}
                  highlightedIcon={images.ICON_HOME_HIGHLIGHTED}
                  unhighlightedIcon={images.ICON_HOME_UNHIGHLIGHTED}
                />
              );
            },
          }}
          component={HomeScreen}
        />
        <Tab.Screen
          name={PROFILE_SCREEN}
          options={{
            tabBarLabel: 'PROFILE',
            tabBarIcon: ({focused, size}) => {
              return (
                <TabButton
                  size={size}
                  focused={focused}
                  highlightedIcon={images.ICON_HOME_HIGHLIGHTED}
                  unhighlightedIcon={images.ICON_HOME_UNHIGHLIGHTED}
                />
              );
            },
          }}
          component={HomeScreen}
        />
      </Tab.Navigator>
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
        <Stack.Screen name={TAB_SCREEN} component={RootTab} />
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
