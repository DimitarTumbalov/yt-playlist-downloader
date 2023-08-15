import styles from './NavBar.module.scss';
import SearchInput from '../SearchInput/SearchInput';
import { IconDownload } from '../IconDownload/IconDownload';
import colors from '../../colors.module.scss'

type NavBarProps = {
  inputValue: string,
  setInputValue: (value: string) => void,
  extractPlaylistId: () => void
}

const NavBar = ({inputValue, setInputValue, extractPlaylistId}: NavBarProps) => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <IconDownload size={48} color={colors.colorPrimary} />
        <div className={styles.logo}>
          <h1 className={styles.logoText}>YT Playlist</h1>
          <h1 className={styles.logoText}>Downloader</h1>
        </div>
        <SearchInput value={inputValue} setValue={setInputValue} onClick={extractPlaylistId}/>
      </nav>
    </div>
  )
}

export default NavBar;