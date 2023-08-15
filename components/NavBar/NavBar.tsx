import Image from 'next/image';
import styles from './NavBar.module.scss';

import iconDownload from '../../public/icon_download.svg'
import SearchInput from '../SearchInput/SearchInput';

type NavBarProps = {
  inputValue: string,
  setInputValue: (value: string) => void,
  extractPlaylistId: () => void
}

const NavBar = ({inputValue, setInputValue, extractPlaylistId}: NavBarProps) => {
  return (
    <nav className={styles.nav}>
      <Image src={iconDownload} alt='logo'/>
      <div className={styles.logo}>
        <h1 className={styles.logoText}>YT Playlist</h1>
        <h1 className={styles.logoText}>Downloader</h1>
      </div>
      <SearchInput value={inputValue} setValue={setInputValue} onClick={extractPlaylistId}/>
    </nav>
  )
}

export default NavBar;