import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import HeaderStyle from './Header.style';

interface ButtonProps {
  leftButtonComponent?: React.ReactNode;
  titleComponent?: React.ReactNode;
  title?: string;
  rightButtonComponent?: React.ReactNode;
}

function Header(props: ButtonProps) {
  const {leftButtonComponent, title, titleComponent, rightButtonComponent} =
    props;

  return (
    <View style={HeaderStyle.container}>
      <View style={HeaderStyle.leftContainer}>{leftButtonComponent}</View>
      <View style={HeaderStyle.middleContainer}>{titleComponent || title}</View>
      {rightButtonComponent ? (
        <View style={HeaderStyle.rightContainer}>{rightButtonComponent}</View>
      ) : null}
    </View>
  );
}

export default Header;
