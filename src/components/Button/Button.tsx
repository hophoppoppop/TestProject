import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import ButtonStyle from './Button.style';

interface ButtonProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  text?: string;
  onPress?: () => void;
}

function Button(props: ButtonProps) {
  const {text, onPress, style, textStyle} = props;

  return (
    <TouchableOpacity style={[ButtonStyle.container, style]} onPress={onPress}>
      <Text style={[ButtonStyle.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}

export default Button;
