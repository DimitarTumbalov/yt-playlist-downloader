'use client';

import { YOUTUBE_PLAYLIST_REGEX } from '../Constants';

import styles from './page.module.css'
import { useEffect, useState } from 'react';
import Playlist from '../components/Playlist/Playlist';

import { extractPlaylistItems } from './../services/YouTubeDataAPI';
import NavBar from '../components/NavBar/NavBar';
import SearchInput from './../components/SearchInput/SearchInput';

export default function Home() {
	const [inputValue, setInputValue] = useState('https://www.youtube.com/watch?v=XXYlFuWEuKI&list=RDQMgEzdN5RuCXE&start_radio=1');
	const [playlistId, setPlaylistId] = useState(null);
	const [playlistItems, setPlaylistItems] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if(!playlistId) return;

		getPlaylistItems();
	}, [playlistId])

	const getPlaylistItems = async() => {
		if(!playlistId) return;

		setLoading(true);

		await extractPlaylistItems(playlistId).then(res => {
			setPlaylistItems(res.data.items.map(i => ({
				title: i.snippet.title,
				videoId: i.contentDetails.videoId,
				thumbnailUrl: i.snippet.thumbnails.medium.url,
				channelId: i.snippet.videoOwnerChannelId,
				channelTitle: i.snippet.videoOwnerChannelTitle
			})))
		}).catch(() => setPlaylistItems(null))

		setLoading(false);
	} 

	const extractPlayListId = () => {
		const match =  YOUTUBE_PLAYLIST_REGEX.exec(inputValue)

		if(match?.length > 1){
			setPlaylistId(match[1]);
		}
	}

	return (
		<main className={styles.main}>
			<NavBar />
			<SearchInput value={inputValue} setValue={setInputValue} onClick={extractPlayListId}/>
			<Playlist items={playlistItems} loading={loading}/>
		</main>
	)
}
