import {Alert, ToastAndroid} from 'react-native';
import {AppDispatch} from '../types/redux';
import {hideLoading, showLoading} from '../redux/slices/appState';
import {HTTP_METHOD} from '../types/api';
import {ENDPOINTS} from '../constants/api';
import {ASYNCSTORAGE_KEY} from '../constants/asyncstorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {reset} from './navigation';
import {LOGIN_SCREEN} from '../constants/router';
import {apiCall} from './api';

export function SignOut(dispatch: AppDispatch) {
  Alert.alert('SIGN OUT', 'Do you want to sign out?', [
    {
      text: 'Cancel',
      style: 'cancel',
    },
    {
      text: 'OK',
      onPress: () => {
        dispatch(showLoading());
        apiCall({method: HTTP_METHOD.POST, endpoints: ENDPOINTS.LOGOUT})
          .then(() => {
            AsyncStorage.removeItem(ASYNCSTORAGE_KEY.USER_TOKEN);
            reset(LOGIN_SCREEN);
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
      },
    },
  ]);
}
