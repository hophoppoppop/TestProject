import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/user';
import appStateReducer from './slices/appState';

export const store = configureStore({
  reducer: {
    user: userReducer,
    appState: appStateReducer,
  },
});
