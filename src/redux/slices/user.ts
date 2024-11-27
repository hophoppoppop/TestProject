import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState, userReducer} from '../../customTypes/redux';
import {userData} from '../../customTypes/user';

const initialState: userReducer = {
  token: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUserData: (state, action: PayloadAction<userData>) => {
      state.userData = action.payload;
    },
  },
});

export const {setToken, setUserData} = userSlice.actions;

export const getToken = (state: RootState) => state.user.token;

export const getUserData = (state: RootState) => state.user.userData;

export default userSlice.reducer;
