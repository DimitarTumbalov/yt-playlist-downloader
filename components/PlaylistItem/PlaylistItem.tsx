
import Image from "next/image";
import styles from './PlaylistItem.module.scss';
import { IconDownload } from "../IconDownload/IconDownload";
import { PlaylistItemType } from '@/app/globalTypes';
import colors from '../../colors.module.scss';

type PlaylistItemProps = {
  item: PlaylistItemType
}

const PlaylistItem = ({item}: PlaylistItemProps) => {
  const onClick = () => {
    window.open(`https://www.youtube.com/watch?v=${item.videoId}`)
  }

  return (
    <div className={styles.container}>
      <div className={styles.info} onClick={onClick}>
        <Image width={160} height={90} src={item.thumbnailUrl} alt="Thumbnail"/>
        <div className={styles.innerContainer}>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.channel}>{item.channelTitle}</p>
        </div>
      </div>
      <div className={styles.actions}>
        <button 
            onClick={() => {}}
            className={styles.btnDownload}>
            <IconDownload size={28} color={colors.colorBackground} />
        </button>
        <select className={styles.select} name="Quality" id="quality">
          <option>M4A 48000</option>
          <option>48000</option>
          <option>48000</option>
        </select>
      </div>
    </div>
  )
}

export default PlaylistItem;