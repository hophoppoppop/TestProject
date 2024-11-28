import AsyncStorage from '@react-native-async-storage/async-storage';
import {ASYNCSTORAGE_KEY} from '../constants/asyncstorage';
import {setId, setToken, setUserData} from '../redux/slices/user';
import {reset} from './navigation';
import {LOGIN_SCREEN, TAB_SCREEN} from '../constants/router';
import BootSplash from 'react-native-bootsplash';
import {AppDispatch} from '../types/redux';
import {apiCall} from './api';
import {ENDPOINTS} from '../constants/api';
import {HTTP_METHOD} from '../types/api';
import {ToastAndroid} from 'react-native';
import {store} from '../redux/store';

export async function initApps(dispatch: AppDispatch) {
  const isFirstTime = await AsyncStorage.getItem(
    ASYNCSTORAGE_KEY.FIRST_TIME_INSTALL,
  );
  const isLogin = await AsyncStorage.getItem(ASYNCSTORAGE_KEY.USER_TOKEN);
  if (isFirstTime) {
    if (isLogin) {
      const userId = await AsyncStorage.getItem(ASYNCSTORAGE_KEY.USER_ID);
      dispatch(setToken(isLogin));
      dispatch(setId(userId || ''));
      reset(TAB_SCREEN);
    } else reset(LOGIN_SCREEN);
  } else {
    AsyncStorage.setItem(ASYNCSTORAGE_KEY.FIRST_TIME_INSTALL, 'notFirstTime');
  }
  BootSplash.hide({fade: true});
}

export async function initLogin(dispatch: AppDispatch) {
  const DUMMY_REQRES_ID = 4;
  const userID = store.getState().user.id || DUMMY_REQRES_ID;
  apiCall({
    method: HTTP_METHOD.GET,
    endpoints: `${ENDPOINTS.USER}/${userID}`,
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
