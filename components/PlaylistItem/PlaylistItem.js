
import Image from "next/image";
import styles from './PlaylistItem.module.css';
import iconDownload from '../../public/icon_download.svg'

const PlaylistItem = ({item}) => {
  return (
    <div className={styles.container}>
      <Image width={160} height={90} src={item.thumbnailUrl} alt="Thumbnail"/>
      <div className={styles.innerContainer}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.channel}>{item.channelTitle}</p>
      </div>
      <button 
          onClick={() => {}}
          className={styles.btnDownload}>
          <Image width={30} height={30} src={iconDownload} alt="Download Icon"/>
        </button>
    </div>
  )
}

export default PlaylistItem;