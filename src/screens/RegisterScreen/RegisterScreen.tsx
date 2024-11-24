import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import RootContainer from '../../templates/Common/RootContainer/RootContainer';
import images from '../../assets/images';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootRouteParamList} from '../../types/router';
import {LOGIN_SCREEN, REGISTER_SCREEN} from '../../constants/router';
import FloatingTitleInput from '../../components/FloatingTitleInput/FloatingTitleInput';
import KeyboardAvoidingComponent from '../../components/KeyboardAvoidingComponent/KeyboardAvoidingComponent';
import LoginScreenStyle from './RegisterScreen.style';
import AuthContainer from '../../templates/AuthScreen/AuthContainer/AuthContainer';
import {apiCall} from '../../helpers/api';
import {HTTP_METHOD} from '../../types/api';
import {API_URL, ENDPOINTS} from '../../constants/api';
import {
  checkIsFormError,
  emailValidation,
  emptyValidation,
  initFormError,
  multipleValidation,
} from '../../helpers/validation';
import {registerErrors} from '../../types/form';
import useDidMountEffect from '../../hooks/layout';

type ScreenProps = NativeStackScreenProps<
  RootRouteParamList,
  typeof REGISTER_SCREEN
>;

function RegisterScreen({navigation}: ScreenProps): React.JSX.Element {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<registerErrors>({});

  useDidMountEffect(() => {
    let tempErrors = initFormError<registerErrors>(errors, 'username');
    tempErrors.username = multipleValidation(
      [emptyValidation(username)],
      ['Username Cannot Empty!'],
    );
    setErrors(tempErrors);
  }, [username]);

  useDidMountEffect(() => {
    let tempErrors = initFormError<registerErrors>(errors, 'email');
    tempErrors.password = multipleValidation(
      [emptyValidation(email), emailValidation(email)],
      ['Email Cannot Empty!', 'Email not Valid!'],
    );
    setErrors(tempErrors);
  }, [email]);

  useDidMountEffect(() => {
    let tempErrors = initFormError<registerErrors>(errors, 'password');
    tempErrors.password = multipleValidation(
      [emptyValidation(password)],
      ['Password Cannot Empty!'],
    );
    setErrors(tempErrors);
  }, [password]);

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
          }}
          isSubmitDisabled={checkIsFormError(errors)}
          onSubmitPress={() => {
            // apiCall(
            //   HTTP_METHOD.POST,
            //   ENDPOINTS.REGISTER,
            //   {
            //     username,
            //     password,
            //     email,
            //   },
            //   {
            //     headers: {
            //       'Content-Type': 'application/json',
            //     },
            //   },
            // )
            //   .then(callback => {
            //     console.log(callback.data);
            //   })
            //   .catch(reason => {
            //     console.log(reason);
            //   });
          }}>
          <FloatingTitleInput
            imageLeftSource={images.ICON_USERNAME}
            title={'Username'}
            onChangeText={setUsername}
            errorText={errors.username}
          />
          <FloatingTitleInput
            imageLeftSource={images.ICON_EMAIL}
            title={'Email'}
            keyboardType={'email-address'}
            onChangeText={setEmail}
            errorText={errors.email}
          />
          <FloatingTitleInput
            secureTextEntry
            imageLeftSource={images.ICON_PASSWORD}
            title={'Password'}
            onChangeText={setPassword}
            errorText={errors.password}
          />
        </AuthContainer>
      </KeyboardAvoidingComponent>
    </RootContainer>
  );
}

export default RegisterScreen;
