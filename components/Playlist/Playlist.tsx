import PlaylistItem from '../PlaylistItem/PlaylistItem';
import styles from './Playlist.module.scss';
import {Spinner} from '../Spinner/Spinner';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

type PlaylistProps = {
    loading: boolean
}

const Playlist = ({loading}: PlaylistProps) => {
    const items = useSelector((state: RootState) => state.playlist);

    return (
        <div className={styles.container}>
            <div className={styles.listContainer}>
            { loading ? 
                <Spinner /> 
                : items?.map(item => <PlaylistItem key={item.videoId} item={item}/>)
            }
            </div>
            <div className={styles.listNavigation}>
                <p>x of y</p>
                <select></select>
                <button>Prev</button>
                <button>Next</button>
            </div>
        </div>
    )
}

export default Playlist;