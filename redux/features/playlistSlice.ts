import { createSlice } from "@reduxjs/toolkit";
import { PlaylistItemType } from '@/app/globalTypes';

const initialState: PlaylistItemType[] = [];

export const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    set: (state, action) => action.payload
  }
})

export const { set } = playlistSlice.actions;
export default playlistSlice.reducer;