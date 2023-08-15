'use client';

import { YOUTUBE_PLAYLIST_REGEX } from '../Constants';

import styles from './page.module.scss'
import { useEffect, useState } from 'react';
import Playlist from '../components/Playlist/Playlist';

import { extractPlaylistItems } from '../services/YouTubeDataAPI';
import NavBar from '../components/NavBar/NavBar';
import { useDispatch } from 'react-redux';
import { set } from '@/redux/features/playlistSlice';
import { AppDispatch } from '@/redux/store';

export default function Home() {
	const [inputValue, setInputValue] = useState('https://www.youtube.com/watch?v=XXYlFuWEuKI&list=RDQMgEzdN5RuCXE&start_radio=1');
	const [playlistId, setPlaylistId] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const dispatch: AppDispatch = useDispatch();

	useEffect(() => {
		if(!playlistId) return;

		getPlaylistItems();
	}, [playlistId])

	const getPlaylistItems = async() => {
		if(!playlistId) return;

		setLoading(true);

		await extractPlaylistItems(playlistId).then(res => {
			dispatch(set(res.data.items.map((item: any) => ({
				title: item.snippet.title,
				videoId: item.contentDetails.videoId,
				thumbnailUrl: item.snippet.thumbnails.medium.url,
				channelId: item.snippet.videoOwnerChannelId,
				channelTitle: item.snippet.videoOwnerChannelTitle
			}))))
		}).catch(() => dispatch(set([])))

		setLoading(false);
	} 

	const extractPlaylistId = () => {
		const match = YOUTUBE_PLAYLIST_REGEX.exec(inputValue)

		if(match && match.length > 1){
			setPlaylistId(match[1]);
		}
	}

	return (
		<main className={styles.main}>
			<NavBar inputValue={inputValue} setInputValue={setInputValue} extractPlaylistId={extractPlaylistId} />
			<Playlist loading={loading}/>
		</main>
	)
}
