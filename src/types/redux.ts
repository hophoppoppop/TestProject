import {store} from '../redux/store';

export type userReducer = {
  token: string;
};

export type appStateReducer = {
  isLoading: boolean;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
