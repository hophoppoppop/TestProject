import {API_URL, MAX_RETRIES, RETRY_DELAY_MS} from '../constants/api';
import {HTTP_METHOD} from '../types/api';

export async function apiCall(
  method: HTTP_METHOD,
  endpoints: string,
  body?: any,
) {
  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }
  const resp = await fetch(API_URL + endpoints, config);
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
