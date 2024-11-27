import {createSlice} from '@reduxjs/toolkit';

import {appStateReducer, RootState} from '../../customTypes/redux';

const initialState: appStateReducer = {
  isLoading: false,
};

const appStateSlicer = createSlice({
  name: 'appState',
  initialState: initialState,
  reducers: {
    showLoading: state => {
      state.isLoading = true;
    },
    hideLoading: state => {
      state.isLoading = false;
    },
  },
});

export const {hideLoading, showLoading} = appStateSlicer.actions;

export const getIsLoading = (state: RootState) => state.appState.isLoading;

export default appStateSlicer.reducer;
