import {store} from '@redux/store';

import {userData} from './user';

export type userReducer = {
  token: string;
  id: string;
  userData?: userData;
};

export type appStateReducer = {
  isLoading: boolean;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
