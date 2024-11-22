import React, {useRef, useState} from 'react';
import {
  Animated,
  Image,
  ImageSourcePropType,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FloatingTitleInputStyle from './FloatingTitleInput.style';
import images from '../../assets/images';

interface FloatingTitleInputProps {
  title: string;
  imageLeftSource?: ImageSourcePropType;
  secureTextEntry?: boolean;
}

function FloatingTitleInput(props: FloatingTitleInputProps): React.JSX.Element {
  const {title, imageLeftSource, secureTextEntry} = props;
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
      outputRange: [20, -12],
    }),
    fontSize: floatingLabelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 16],
    }),
    left: floatingLabelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [imageLeftSource ? 45 : 10, imageLeftSource ? 45 : 10],
    }),
  };
  return (
    <View style={FloatingTitleInputStyle.container}>
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
          secureTextEntry={secureTextEntry && !hiddenTextVisible}
          style={FloatingTitleInputStyle.input}
          onChangeText={val => setText(val)}
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
  );
}

export default FloatingTitleInput;
