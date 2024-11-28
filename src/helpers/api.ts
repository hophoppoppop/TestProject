import {API_URL, BASIC_TOKEN} from '@constants/api';
import {HTTP_METHOD} from '@customTypes/api';
import {store} from '@redux/store';
import {ToastAndroid} from 'react-native';

export async function apiCall(props: {
  method: HTTP_METHOD;
  endpoints: string;
  body?: any;
  isThirdParty?: boolean;
  defaultErrorText?: string;
}) {
  const {
    endpoints,
    method,
    body,
    isThirdParty,
    defaultErrorText = 'Connection error, please try again later!',
  } = props;
  try {
    const config: RequestInit = {
      method,
    };
    const token = store.getState().user.token;
    let url = (!isThirdParty ? API_URL : '') + endpoints;
    config.headers = {
      Authorization: token ? `Bearer ${token}` : `Basic ${BASIC_TOKEN}`,
    };
    if (body) {
      if (!body?.query) {
        config.headers = {
          ...config.headers,
          'Content-Type': 'application/json',
        };
        config.body = JSON.stringify(body);
      }
      if (body.query) {
        url += '?';
        for (let key in body.query) {
          if (body.query.hasOwnProperty(key)) {
            url += `${key}=${body.query[key]}&`;
          }
        }
      }
    }
    const resp = await fetch(url, config);
    const respJSON = await resp.json();
    console.log(resp.status);
    if (resp.status === 200) {
      return respJSON;
    } else {
      throw (
        respJSON || {
          error: resp.statusText,
        }
      );
    }
  } catch (reason: any) {
    const errorText = reason.error || defaultErrorText;
    ToastAndroid.showWithGravity(errorText, ToastAndroid.LONG, 20);
    throw reason;
  }
}
