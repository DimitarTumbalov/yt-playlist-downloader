import axios from 'axios';
import { YOUTUBE_API_URL } from './../Constants';

export const extractPlaylistItems = async(playlistId) => {
  return axios(`${YOUTUBE_API_URL}&playlistId=${playlistId}`);
} 