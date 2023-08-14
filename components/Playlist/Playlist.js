import PlaylistItem from '../PlaylistItem/PlaylistItem';
import styles from './Playlist.module.css';
import {Spinner} from '../Spinner/Spinner';

const Playlist = ({items, loading}) => {
    return (
        <div className={styles.container}>
            { loading ? 
                <Spinner /> 
                : items?.map(item => <PlaylistItem key={item.videoId} item={item}/>)
            }
        </div>
    )
}

export default Playlist;