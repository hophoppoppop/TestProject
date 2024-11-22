import React from 'react';
import {Image, Text, View} from 'react-native';
import RootContainer from '../../components/RootContainer/RootContainer';
import images from '../../assets/images';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/router';
import {LOGIN_SCREEN, REGISTER_SCREEN} from '../../constants/router';
import FloatingTitleInput from '../../components/FloatingTitleInput/FloatingTitleInput';
import KeyboardAvoidingComponent from '../../components/KeyboardAvoidingComponent/KeyboardAvoidingComponent';
import LoginScreenStyle from './RegisterScreen.style';
import AuthContainer from '../../templates/AuthScreen/AuthContainer/AuthContainer';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  typeof REGISTER_SCREEN
>;

function RegisterScreen({navigation}: ScreenProps): React.JSX.Element {
  return (
    <RootContainer>
      <KeyboardAvoidingComponent style={LoginScreenStyle.rootContainer}>
        <AuthContainer
          imageSource={images.LOGO_REGISTER}
          buttonText={'SIGN UP'}
          clickableText={'Sign In'}
          title={'Register'}
          subtitle={'Please Register to Login.'}
          helpText={'Already Have Account?'}
          onPressClickableText={() => {
            navigation.push(LOGIN_SCREEN);
          }}>
          <FloatingTitleInput
            imageLeftSource={images.ICON_USERNAME}
            title={'Username'}
          />
          <FloatingTitleInput
            secureTextEntry
            imageLeftSource={images.ICON_PASSWORD}
            title={'Password'}
          />
        </AuthContainer>
      </KeyboardAvoidingComponent>
    </RootContainer>
  );
}

export default RegisterScreen;
