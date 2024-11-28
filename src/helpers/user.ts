import {ENDPOINTS} from '@constants/api';
import {ASYNCSTORAGE_KEY} from '@constants/asyncstorage';
import {LOGIN_SCREEN} from '@constants/router';
import {HTTP_METHOD} from '@customTypes/api';
import {AppDispatch} from '@customTypes/redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {hideLoading, showLoading} from '@redux/slices/appState';
import {Alert, ToastAndroid} from 'react-native';

import {apiCall} from './api';
import {reset} from './navigation';

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
          .catch(err => {
            console.log(err);
          })
          .finally(() => {
            dispatch(hideLoading());
          });
      },
    },
  ]);
}
