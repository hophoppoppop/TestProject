import axios, { AxiosResponse } from 'axios';
import {MAX_RETRIES, RETRY_DELAY_MS} from '../constants/api';

export async function makeApiCall(
  endpoints:string,
  successCallback:(callback:AxiosResponse)=>void,
  errorCallback:(err:Error)=>void,
  retryCount = 0,
) {
  return axios
    .get(endpoints)
    .then(response => {
      if (successCallback) successCallback(response);
    })
    .catch(error => {
      // If the error is temporary, retry the call after a delay
      if (retryCount < MAX_RETRIES) {
        setTimeout(
          ()=>{
            makeApiCall(
              endpoints,
              successCallback,
              errorCallback,
              retryCount + 1,
            );
          },
          RETRY_DELAY_MS * Math.pow(2, retryCount),
        );
      } else {
        // Handle the error
        if (errorCallback) errorCallback(error);
      }
    });
}
