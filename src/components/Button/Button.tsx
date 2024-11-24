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
  disabled?: boolean;
}

function Button(props: ButtonProps) {
  const {text, onPress, style, textStyle, disabled} = props;

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        ButtonStyle.container,
        disabled ? ButtonStyle.disabledButton : ButtonStyle.enabledButton,
        style,
      ]}
      onPress={onPress}>
      <Text
        style={[
          ButtonStyle.buttonText,
          disabled ? ButtonStyle.disabledText : ButtonStyle.enabledText,
          ,
          textStyle,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;
