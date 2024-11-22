import React from 'react';
import RootContainer from '../../components/RootContainer/RootContainer';
import images from '../../assets/images';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/router';
import {LOGIN_SCREEN, REGISTER_SCREEN} from '../../constants/router';
import FloatingTitleInput from '../../components/FloatingTitleInput/FloatingTitleInput';
import KeyboardAvoidingComponent from '../../components/KeyboardAvoidingComponent/KeyboardAvoidingComponent';
import LoginScreenStyle from './LoginScreen.style';
import AuthContainer from '../../templates/AuthScreen/AuthContainer/AuthContainer';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  typeof LOGIN_SCREEN
>;

function LoginScreen({navigation}: ScreenProps): React.JSX.Element {
  return (
    <RootContainer>
      <KeyboardAvoidingComponent style={LoginScreenStyle.rootContainer}>
        <AuthContainer
          imageSource={images.LOGO_LOGIN}
          buttonText={'SIGN IN'}
          clickableText={'Sign Up'}
          title={'Login'}
          subtitle={'Please Sign in to continue.'}
          helpText={"Don't Have Account?"}
          onPressClickableText={() => {
            navigation.push(REGISTER_SCREEN);
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

export default LoginScreen;
