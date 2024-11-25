import {API_URL, BASIC_TOKEN} from '../constants/api';
import {store} from '../redux/store';
import {HTTP_METHOD} from '../types/api';

export async function apiCall(props: {
  method: HTTP_METHOD;
  endpoints: string;
  body?: any;
  isThirdParty?: boolean;
}) {
  const {endpoints, method, body, isThirdParty} = props;
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
  if (resp.status === 200) {
    return respJSON;
  } else {
    throw (
      respJSON || {
        error: resp.statusText,
      }
    );
  }
}
