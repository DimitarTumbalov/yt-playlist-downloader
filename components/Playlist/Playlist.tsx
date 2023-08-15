import PlaylistItem from '../PlaylistItem/PlaylistItem';
import styles from './Playlist.module.scss';
import {Spinner} from '../Spinner/Spinner';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import PlaylistNavigation from '../PlaylistNavigation/PlaylistNavigation';

type PlaylistProps = {
    loading: boolean
}

const Playlist = ({loading}: PlaylistProps) => {
    const items = useSelector((state: RootState) => state.playlist);

    if(loading){
        return (
            <div className={styles.spinnerContainer}>
                <Spinner />
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.listContainer}>
                { items.length == 0 ? <div className={styles.emptyListContainer}>
                    <h1>Try with a Playlist!</h1>
                </div> 
                : items.map(item => <PlaylistItem key={item.videoId} item={item}/>)
                }
            </div>
        </div>
    )
}

export default Playlist;