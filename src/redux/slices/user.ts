import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState, userReducer} from '../../types/redux';

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
  },
});

export const {setToken} = userSlice.actions;

export const getToken = (state: RootState) => state.user.token;

export default userSlice.reducer;
