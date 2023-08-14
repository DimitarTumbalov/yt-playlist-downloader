import Image from "next/image";
import styles from './PlaylistItem.module.css';

const PlaylistItem = ({item}) => {
  console.log(item)
  return (
    <div className={styles.container}>
      <Image width={120} height={90} className={styles.img} src={item.thumbnailUrl} alt="Thumbnail"/>
      <h3 className={styles.title}>{item.title}</h3>
    </div>
  )
}

export default PlaylistItem;