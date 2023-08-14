
import Image from "next/image";
import styles from './PlaylistItem.module.css';
import { download } from './../actions/YoutubeDL';

const PlaylistItem = ({item}) => {
  return (
    <div className={styles.container}>
      <Image width={160} height={90} src={item.thumbnailUrl} alt="Thumbnail"/>
      <div className={styles.innerContainer}>
        <h2 className={styles.title}>{item.title}</h2>
        <button 
          onClick={() => download(item.id)}
          className={styles.btnDownload}>
          Download
        </button>
      </div>
    </div>
  )
}

export default PlaylistItem;