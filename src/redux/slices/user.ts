import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState, userReducer} from '../../types/redux';
import {userData} from '../../types/user';

const initialState: userReducer = {
  token: '',
  id: '',
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
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
  },
});

export const {setToken, setUserData, setId} = userSlice.actions;

export const getToken = (state: RootState) => state.user.token;

export const getUserData = (state: RootState) => state.user.userData;

export const getId = (state: RootState) => state.user.id;

export default userSlice.reducer;
