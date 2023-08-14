'use client';

import axios from 'axios';
import { YOUTUBE_API_URL, YT_PLAYLIST_REGEX } from '../Constants';

import styles from './page.module.css'
import { useEffect, useState } from 'react';
import PlaylistItem from '../components/PlaylistItem';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [playlistId, setPlaylistId] = useState(null);
  const [playlistItems, setPlaylistItems] = useState([]);

  useEffect(() => {
    if(!playlistId) return;

    getPlaylistItems();
  }, [playlistId])

  const getPlaylistItems = async() => {
    if(!playlistId) return;

    await axios(`${YOUTUBE_API_URL}&playlistId=${playlistId}`).then(res => {
      setPlaylistItems(res.data.items.map(i => ({
        title: i.snippet.title,
        videoId: i.contentDetails.videoId,
        thumbnailUrl: i.snippet.thumbnails.default.url
      })))
    }).catch(err => console.log(err.message))
  } 

  const extractPlayListId = () => {
    const match =  YT_PLAYLIST_REGEX.exec(inputValue)

    if(match?.length > 1){
      setPlaylistId(match[1]);
    }
  }

  return (
    <main className={styles.main}>
      <input className={styles.input} onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
      <button className={styles.btn} onClick={() => extractPlayListId()}>Retrieve Playlist videos</button>
      {
        playlistItems.map(item => <PlaylistItem key={item.videoId} item={item}/>)
      }
    </main>
  )
}
