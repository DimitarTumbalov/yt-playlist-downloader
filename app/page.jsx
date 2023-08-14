'use client';

import { YOUTUBE_PLAYLIST_REGEX } from '../Constants';

import styles from './page.module.css'
import { useEffect, useState } from 'react';
import Playlist from '../components/Playlist';

import iconDownload from '../public/icon_download.svg'
import Image from 'next/image';
import { extractPlaylistItems } from './../services/YouTubeDataAPI';

export default function Home() {
	const [inputValue, setInputValue] = useState('');
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
				thumbnailUrl: i.snippet.thumbnails.medium.url
			})))
		}).catch(err => console.log(err.message))

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
			<nav>
				<Image className={styles.logoImg} src={iconDownload} alt='logo'/>
				<h1 className={styles.logoText}>YouTube Playlist Downloader</h1>
			</nav>
			<input className={styles.input} onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
			<button 
				className={styles.btn} 
				onClick={() => extractPlayListId()}
				disabled={inputValue.length == 0}>
				Retrieve Playlist videos
			</button>
			{loading && <div className={styles.loader} />}
			<Playlist items={playlistItems}/>
		</main>
	)
}
