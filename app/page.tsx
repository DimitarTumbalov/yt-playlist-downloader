'use client';

import { YOUTUBE_PLAYLIST_REGEX } from '../Constants';

import styles from './page.module.css'
import { useEffect, useState } from 'react';
import Playlist from '../components/Playlist/Playlist';

import { extractPlaylistItems } from '../services/YouTubeDataAPI';
import NavBar from '../components/NavBar/NavBar';
import SearchInput from '../components/SearchInput/SearchInput';
import { PlaylistItemType } from './globalTypes';

export default function Home() {
	const [inputValue, setInputValue] = useState('https://www.youtube.com/watch?v=XXYlFuWEuKI&list=RDQMgEzdN5RuCXE&start_radio=1');
	const [playlistId, setPlaylistId] = useState<string | null>(null);
	const [playlistItems, setPlaylistItems] = useState<PlaylistItemType[] | null>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if(!playlistId) return;

		getPlaylistItems();
	}, [playlistId])

	const getPlaylistItems = async() => {
		if(!playlistId) return;

		setLoading(true);

		await extractPlaylistItems(playlistId).then(res => {
			setPlaylistItems(res.data.items.map((item: any) => ({
				title: item.snippet.title,
				videoId: item.contentDetails.videoId,
				thumbnailUrl: item.snippet.thumbnails.medium.url,
				channelId: item.snippet.videoOwnerChannelId,
				channelTitle: item.snippet.videoOwnerChannelTitle
			})))
		}).catch(() => setPlaylistItems(null))

		setLoading(false);
	} 

	const extractPlayListId = () => {
		const match = YOUTUBE_PLAYLIST_REGEX.exec(inputValue)

		if(match && match.length > 1){
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
