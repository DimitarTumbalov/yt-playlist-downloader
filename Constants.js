const YOUTUBE_API_KEY = 'AIzaSyB1bjyquivB-ETV_VWZ1w-KAFKMuE70uu0';
export const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails,snippet&key=${YOUTUBE_API_KEY}`;

export const YOUTUBE_PLAYLIST_REGEX = /list=([a-zA-Z\d]+)/