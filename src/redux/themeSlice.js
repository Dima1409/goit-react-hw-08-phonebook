import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const themeState = {
  darkTheme: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: themeState,
  reducers: {
    setTheme(state) {
      state.darkTheme = !state.darkTheme;
    },
  },
});

const persistConfig = {
  key: 'theme',
  storage,
};

export const themeReducer = persistReducer(persistConfig, themeSlice.reducer);
export const { setTheme } = themeSlice.actions;
