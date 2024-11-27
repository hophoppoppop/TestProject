import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastAndroid} from 'react-native';
import BootSplash from 'react-native-bootsplash';

import {ENDPOINTS} from '../constants/api';
import {ASYNCSTORAGE_KEY} from '../constants/asyncstorage';
import {LOGIN_SCREEN, TAB_SCREEN} from '../constants/router';
import {HTTP_METHOD} from '../customTypes/api';
import {AppDispatch} from '../customTypes/redux';
import {setToken, setUserData} from '../redux/slices/user';
import {apiCall} from './api';
import {reset} from './navigation';

export async function initApps(dispatch: AppDispatch) {
  const isFirstTime = await AsyncStorage.getItem(
    ASYNCSTORAGE_KEY.FIRST_TIME_INSTALL,
  );
  const isLogin = await AsyncStorage.getItem(ASYNCSTORAGE_KEY.USER_TOKEN);
  if (isFirstTime) {
    if (isLogin) {
      dispatch(setToken(isLogin));
      reset(TAB_SCREEN);
    } else reset(LOGIN_SCREEN);
  } else {
    AsyncStorage.setItem(ASYNCSTORAGE_KEY.FIRST_TIME_INSTALL, 'notFirstTime');
  }
  BootSplash.hide({fade: true});
}

export async function initLogin(dispatch: AppDispatch) {
  const DUMMY_REQRES_ID = 4;
  apiCall({
    method: HTTP_METHOD.GET,
    endpoints: `${ENDPOINTS.USER}/${DUMMY_REQRES_ID}`,
  })
    .then(callback => {
      dispatch(setUserData(callback.data));
    })
    .catch(reason => {
      ToastAndroid.showWithGravity(
        reason.error ||
          'User data cannot be retrieved, please try again later!',
        ToastAndroid.LONG,
        20,
      );
    });
}
