import React, {useState} from 'react';
import RootContainer from '../../templates/Common/RootContainer/RootContainer';
import images from '../../assets/images';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootRouteParamList} from '../../types/router';
import {
  TAB_SCREEN,
  LOGIN_SCREEN,
  REGISTER_SCREEN,
} from '../../constants/router';
import FloatingTitleInput from '../../components/FloatingTitleInput/FloatingTitleInput';
import KeyboardAvoidingComponent from '../../components/KeyboardAvoidingComponent/KeyboardAvoidingComponent';
import LoginScreenStyle from './LoginScreen.style';
import AuthContainer from '../../templates/AuthScreen/AuthContainer/AuthContainer';
import {loginErrors} from '../../types/form';
import useDidMountEffect from '../../hooks/layout';
import {
  checkIsFormError,
  emailValidation,
  emptyValidation,
  initFormError,
  multipleValidation,
} from '../../helpers/validation';
import {ENDPOINTS} from '../../constants/api';
import {HTTP_METHOD} from '../../types/api';
import {apiCall} from '../../helpers/api';
import {useAppDispatch} from '../../hooks/redux';
import {setToken} from '../../redux/slices/user';
import {ToastAndroid} from 'react-native';
import {hideLoading, showLoading} from '../../redux/slices/appState';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ASYNCSTORAGE_KEY} from '../../constants/asyncstorage';

type ScreenProps = NativeStackScreenProps<
  RootRouteParamList,
  typeof LOGIN_SCREEN
>;

function LoginScreen({navigation}: ScreenProps): React.JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<loginErrors>({});

  const dispatch = useAppDispatch();

  useDidMountEffect(() => {
    let tempErrors = initFormError<loginErrors>(errors, 'email');
    tempErrors.email = multipleValidation(
      [emptyValidation(email), emailValidation(email)],
      ['Email Cannot Empty!', 'Email not Valid!'],
    );
    setErrors(tempErrors);
  }, [email]);

  useDidMountEffect(() => {
    let tempErrors = initFormError<loginErrors>(errors, 'password');
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
          imageSource={images.LOGO_LOGIN}
          buttonText={'SIGN IN'}
          clickableText={'Sign Up'}
          title={'Login'}
          subtitle={'Please Sign in to continue.'}
          helpText={"Don't Have Account?"}
          onPressClickableText={() => {
            navigation.push(REGISTER_SCREEN);
          }}
          isSubmitDisabled={checkIsFormError(errors)}
          onSubmitPress={() => {
            //REQRES.IN TEST ID
            //EMAIL: eve.holt@reqres.in
            //PASSWORD: //YOU CAN PUT ANYTHING HERE
            dispatch(showLoading());
            apiCall({
              method: HTTP_METHOD.POST,
              endpoints: ENDPOINTS.LOGIN,
              body: {
                password,
                email: email.toLowerCase(),
              },
            })
              .then(callback => {
                dispatch(setToken(callback.token));
                AsyncStorage.setItem(
                  ASYNCSTORAGE_KEY.USER_TOKEN,
                  callback.token,
                );
                navigation.reset({
                  routes: [
                    {
                      name: TAB_SCREEN,
                    },
                  ],
                });
              })
              .catch(reason => {
                ToastAndroid.showWithGravity(
                  reason.error || 'Connection error, please try again later!',
                  ToastAndroid.LONG,
                  20,
                );
              })
              .finally(() => {
                dispatch(hideLoading());
              });
          }}>
          <FloatingTitleInput
            imageLeftSource={images.ICON_USERNAME}
            title={'Email'}
            keyboardType={'email-address'}
            onChangeText={setEmail}
            errorText={errors.email}
            value={email}
          />
          <FloatingTitleInput
            secureTextEntry
            imageLeftSource={images.ICON_PASSWORD}
            title={'Password'}
            onChangeText={setPassword}
            errorText={errors.password}
            value={password}
          />
        </AuthContainer>
      </KeyboardAvoidingComponent>
    </RootContainer>
  );
}

export default LoginScreen;
