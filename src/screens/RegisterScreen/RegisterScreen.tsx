import images from '@assets/images';
import FloatingTitleInput from '@components/FloatingTitleInput/FloatingTitleInput';
import KeyboardAvoidingComponent from '@components/KeyboardAvoidingComponent/KeyboardAvoidingComponent';
import {ENDPOINTS} from '@constants/api';
import {ASYNCSTORAGE_KEY} from '@constants/asyncstorage';
import {LOGIN_SCREEN, REGISTER_SCREEN, TAB_SCREEN} from '@constants/router';
import {HTTP_METHOD} from '@customTypes/api';
import {registerErrors} from '@customTypes/form';
import {RootRouteParamList} from '@customTypes/router';
import {apiCall} from '@helpers/api';
import {
  checkIsFormError,
  emailValidation,
  emptyValidation,
  initFormError,
  multipleValidation,
} from '@helpers/validation';
import useDidMountEffect from '@hooks/layout';
import {useAppDispatch} from '@hooks/redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {hideLoading, showLoading} from '@redux/slices/appState';
import {setId, setToken} from '@redux/slices/user';
import LoginScreenStyle from '@screens/LoginScreen/LoginScreen.style';
import AuthContainer from '@templates/AuthScreen/AuthContainer/AuthContainer';
import RootContainer from '@templates/Common/RootContainer/RootContainer';
import React, {useState} from 'react';
import {ToastAndroid} from 'react-native';

type ScreenProps = NativeStackScreenProps<
  RootRouteParamList,
  typeof REGISTER_SCREEN
>;

function RegisterScreen({navigation}: ScreenProps): React.JSX.Element {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<registerErrors>({});
  const dispatch = useAppDispatch();

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
    tempErrors.email = multipleValidation(
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
            //REQRES.IN TEST ID
            //EMAIL: eve.holt@reqres.in
            //PASSWORD: //YOU CAN PUT ANYTHING HERE
            //USERNAME: //YOU CAN PUT ANYTHING HERE
            dispatch(showLoading());
            apiCall({
              method: HTTP_METHOD.POST,
              endpoints: ENDPOINTS.REGISTER,
              body: {
                // username, //NOT USED BECAUSE MAKE REQRES API ERROR
                password,
                email: email.toLowerCase(),
              },
            })
              .then(callback => {
                const userID = callback.id.toString();
                dispatch(setToken(callback.token));
                dispatch(setId(userID));
                AsyncStorage.setItem(
                  ASYNCSTORAGE_KEY.USER_TOKEN,
                  callback.token,
                );
                AsyncStorage.setItem(ASYNCSTORAGE_KEY.USER_ID, userID);
                navigation.reset({
                  routes: [
                    {
                      name: TAB_SCREEN,
                    },
                  ],
                });
              })
              .catch(err => {
                console.log(err);
              })
              .finally(() => {
                dispatch(hideLoading());
              });
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
