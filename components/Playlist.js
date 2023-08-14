import PlaylistItem from './PlaylistItem';
import styles from './Playlist.module.css';

export default ({items}) => {
    return (
        <div className={styles.container}>
            {
                items.map(item => <PlaylistItem key={item.videoId} item={item}/>)
            }
        </div>
    )
}