import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';
import Button from '../../../components/Button/Button';
import AuthContainerStyle from './AuthContainer.style';

interface AuthContainerProps {
  imageSource: ImageSourcePropType;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  buttonText: string;
  helpText: string;
  clickableText: string;
  onPressClickableText?: () => void;
  onSubmitPress?: () => void;
  isSubmitDisabled?: boolean;
}

function AuthContainer(props: AuthContainerProps): React.JSX.Element {
  const {
    imageSource,
    children,
    subtitle,
    title,
    buttonText,
    clickableText,
    helpText,
    onPressClickableText,
    onSubmitPress,
    isSubmitDisabled,
  } = props;
  return (
    <View style={AuthContainerStyle.rootContainer}>
      <View style={AuthContainerStyle.logoContainer}>
        <Image
          style={AuthContainerStyle.logoImage}
          resizeMode={'contain'}
          source={imageSource}
        />
      </View>
      <View style={AuthContainerStyle.inputContainer}>
        <Text style={AuthContainerStyle.authTitle}>{title}</Text>
        <Text style={AuthContainerStyle.authSubTitle}>{subtitle}</Text>
        <View style={AuthContainerStyle.authInputContainer}>{children}</View>
      </View>
      <View style={AuthContainerStyle.buttonContainer}>
        <Button
          onPress={onSubmitPress}
          text={buttonText}
          disabled={isSubmitDisabled}
        />
        <Text style={AuthContainerStyle.helpText}>
          {helpText}{' '}
          <Text
            style={AuthContainerStyle.redirectText}
            onPress={onPressClickableText}>
            {clickableText}
          </Text>
        </Text>
      </View>
    </View>
  );
}

export default AuthContainer;
