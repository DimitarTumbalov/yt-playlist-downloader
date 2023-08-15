'use client';
import { configureStore } from '@reduxjs/toolkit';
import playlistReducer from './features/playlistSlice';
import playlistNavigationReducer from './features/playlistNavigationSlice';

export const store = configureStore({
  reducer: {
    playlist: playlistReducer,
    playlistNavigation: playlistNavigationReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;