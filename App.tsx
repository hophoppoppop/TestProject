import images from '@assets/images';
import TabButton from '@components/TabButton/TabButton';
import {
  HOME_SCREEN,
  LOGIN_SCREEN,
  PROFILE_SCREEN,
  PROMOS_SCREEN,
  REGISTER_SCREEN,
  TAB_SCREEN,
  WELCOME_SCREEN,
} from '@constants/router';
import {RootRouteParamList} from '@customTypes/router';
import {initApps} from '@helpers/initialize';
import {navigationRef} from '@helpers/navigation';
import {useAppDispatch} from '@hooks/redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import LoginScreen from '@screens/LoginScreen/LoginScreen';
import ProfileScreen from '@screens/ProfileScreen/ProfileScreen';
import PromosScreen from '@screens/PromosScreen/PromosScreen';
import RegisterScreen from '@screens/RegisterScreen/RegisterScreen';
import WelcomeScreen from '@screens/WelcomeScreen/WelcomeScreen';
import React, {useEffect} from 'react';

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
