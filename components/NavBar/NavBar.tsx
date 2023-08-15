import Image from 'next/image';
import styles from './NavBar.module.css';

import iconDownload from '../../public/icon_download.svg'

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Image className={styles.logoImg} src={iconDownload} alt='logo'/>
      <h1 className={styles.logoText}>YouTube Playlist Downloader</h1>
    </nav>
  )
}

export default NavBar;