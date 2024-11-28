import images from '@assets/images';
import React, {useRef, useState} from 'react';
import {
  Animated,
  Image,
  ImageSourcePropType,
  KeyboardTypeOptions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import FloatingTitleInputStyle from './FloatingTitleInput.style';

interface FloatingTitleInputProps {
  title: string;
  imageLeftSource?: ImageSourcePropType;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  onChangeText?: (text: string) => void;
  errorText?: string;
  value?: string;
}

function FloatingTitleInput(props: FloatingTitleInputProps): React.JSX.Element {
  const {
    title,
    imageLeftSource,
    secureTextEntry,
    keyboardType,
    onChangeText,
    errorText,
    value,
  } = props;
  const [text, setText] = useState('');
  const [hiddenTextVisible, setHiddenTextVisible] = useState(false);

  const floatingLabelAnimation = useRef(
    new Animated.Value(text ? 1 : 0),
  ).current;

  const handleFocus = () => {
    Animated.timing(floatingLabelAnimation, {
      toValue: 1,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    if (!text) {
      Animated.timing(floatingLabelAnimation, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  };

  const floatingLabelStyle = {
    top: floatingLabelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [14, -12],
    }),
    fontSize: floatingLabelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    left: imageLeftSource ? 50 : 15,
  };

  return (
    <View>
      <View
        style={[
          FloatingTitleInputStyle.container,
          errorText ? FloatingTitleInputStyle.containerError : null,
        ]}>
        <Animated.Text
          style={[FloatingTitleInputStyle.title, floatingLabelStyle]}>
          {title}
        </Animated.Text>
        <View style={FloatingTitleInputStyle.inputContainer}>
          {imageLeftSource ? (
            <Image
              style={FloatingTitleInputStyle.imageLeft}
              source={imageLeftSource}
            />
          ) : null}
          <TextInput
            value={value}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry && !hiddenTextVisible}
            style={FloatingTitleInputStyle.input}
            onChangeText={val => {
              setText(val);
              if (onChangeText) onChangeText(val);
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {secureTextEntry ? (
            <TouchableOpacity
              onPress={() => {
                setHiddenTextVisible(!hiddenTextVisible);
              }}>
              <Image
                style={FloatingTitleInputStyle.secureImage}
                source={
                  hiddenTextVisible
                    ? images.ICON_HIDE_PASSWORD
                    : images.ICON_SHOW_PASSWORD
                }
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
      <Text style={FloatingTitleInputStyle.errorText}>{errorText}</Text>
    </View>
  );
}

export default FloatingTitleInput;
