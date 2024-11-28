import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import WelcomeScreen from './src/screens/WelcomeScreen/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import {RootRouteParamList} from './src/types/router';
import {
  HOME_SCREEN,
  LOGIN_SCREEN,
  PROFILE_SCREEN,
  PROMOS_SCREEN,
  REGISTER_SCREEN,
  TAB_SCREEN,
  WELCOME_SCREEN,
} from './src/constants/router';
import RegisterScreen from './src/screens/RegisterScreen/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import {navigationRef} from './src/helpers/navigation';
import {useAppDispatch} from './src/hooks/redux';
import {initApps} from './src/helpers/initialize';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabButton from './src/components/TabButton/TabButton';
import images from './src/assets/images';
import PromosScreen from './src/screens/PromosScreen/PromosScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';

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
                  highlightedIcon={images.ICON_PROMO_HIGHLIGHTED}
                  unhighlightedIcon={images.ICON_PROMO_UNHIGHLIGHTED}
                />
              );
            },
          }}
          component={PromosScreen}
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
                  highlightedIcon={images.ICON_PROFILE_HIGHLIGHTED}
                  unhighlightedIcon={images.ICON_PROFILE_UNHIGHLIGHTED}
                />
              );
            },
          }}
          component={ProfileScreen}
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
