
import Image from "next/image";
import styles from './PlaylistItem.module.scss';
import iconDownload from '../../public/icon_download.svg'
import { PlaylistItemType } from '@/app/globalTypes';

type PlaylistItemProps = {
  item: PlaylistItemType
}

const PlaylistItem = ({item}: PlaylistItemProps) => {
  return (
    <div className={styles.container}>
      <Image width={160} height={90} src={item.thumbnailUrl} alt="Thumbnail"/>
      <div className={styles.innerContainer}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.channel}>{item.channelTitle}</p>
      </div>
      <select className={styles.select} name="Quality" id="quality">
        <option>M4A 48000</option>
        <option>48000</option>
        <option>48000</option>
      </select>
      <button 
          onClick={() => {}}
          className={styles.btnDownload}>
          <Image width={30} height={30} src={iconDownload} alt="Download Icon"/>
        </button>
    </div>
  )
}

export default PlaylistItem;