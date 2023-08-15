import PlaylistItem from '../PlaylistItem/PlaylistItem';
import styles from './Playlist.module.css';
import {Spinner} from '../Spinner/Spinner';
import { PlaylistItemType } from '@/app/globalTypes';

type PlaylistProps = {
    items: PlaylistItemType[],
    loading: boolean
}

const Playlist = ({items, loading}: PlaylistProps) => {
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