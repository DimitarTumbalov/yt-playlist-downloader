import styles from './SearchInput.module.css';

const SearchInput = ({value, setValue, onClick}) => {
  return (
    <div className={styles.container}>
      <input className={styles.input} onChange={(e) => setValue(e.target.value)} value={value}/>
      <button 
        className={styles.btn} 
        onClick={() => onClick()}
        disabled={value.length == 0}>
        Extract
      </button>
    </div>
  );
}

export default SearchInput;