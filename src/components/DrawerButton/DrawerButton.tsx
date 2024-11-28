import {
  DrawerContentComponentProps,
  DrawerItem,
} from '@react-navigation/drawer';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import {RootRouteParamList} from '../../customTypes/router';
import DrawerButtonStyle from './DrawerButton.style';

interface DrawerButtonProps extends DrawerContentComponentProps {
  label: string;
  keyRoute?: keyof RootRouteParamList;
  highlightedIcon?: ImageSourcePropType;
  unhighlightedIcon?: ImageSourcePropType;
  onPress?: () => void;
  unfocusable?: boolean;
  icon?: ImageSourcePropType;
}

function DrawerButton(props: DrawerButtonProps) {
  const {
    keyRoute,
    state,
    highlightedIcon,
    unhighlightedIcon,
    label,
    onPress = () => {},
    unfocusable = false,
    icon,
  } = props;
  const currRouteName = state.routeNames[state.index];

  return (
    <DrawerItem
      style={DrawerButtonStyle.container}
      focused={currRouteName === keyRoute}
      onPress={onPress}
      label={label}
      icon={({focused, size}) => (
        <Image
          style={[{width: size}, DrawerButtonStyle.drawerIcon]}
          source={
            unfocusable ? icon : focused ? highlightedIcon : unhighlightedIcon
          }
        />
      )}
    />
  );
}

export default DrawerButton;
