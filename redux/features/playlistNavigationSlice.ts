import { createSlice } from "@reduxjs/toolkit";

type PlaylistNavigationType = {
  test: string
}

const initialState: PlaylistNavigationType = {
  test: 'test'
};

export const playlistNavigationSlice = createSlice({
  name: 'playlistNavigation',
  initialState,
  reducers: {
    set: (state, action) => action.payload
  }
})

export const { set } = playlistNavigationSlice.actions;
export default playlistNavigationSlice.reducer;