import { RootState } from '@/redux/store';
import styles from './PlaylistNavigation.module.scss';
import { useSelector } from 'react-redux';

const PlaylistNavigation = () => {
  const playlistNavigation = useSelector((state: RootState) => state.playlistNavigation.test)

  if(playlistNavigation == 'test')
    return null;

  return (
    <div className={styles.container}>
      <div className={styles.listNavigation}>
        <select>
            <option>items per page</option>
        </select>
        <button>Prev</button>
        <button>Next</button>
        <p>x of y</p>
        <div className={styles.rightContainer}>
          <select>
              <option>Choose Quality</option>
          </select>
          <button className={styles.downloadAllBtn}>Download All</button>
        </div>
      </div>
    </div>
  )
}

export default PlaylistNavigation;