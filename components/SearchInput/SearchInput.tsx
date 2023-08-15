import styles from './SearchInput.module.scss';

type SearchInputProps = {
  value: string,
  setValue: (value: string) => void,
  onClick: () => void
}

const SearchInput = ({value, setValue, onClick}: SearchInputProps) => {
  return (
    <div className={styles.container}>
      <input className={styles.input} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} value={value}/>
      <button 
        className={styles.btn} 
        onClick={() => onClick()}
        disabled={value.length == 0}>
        Search
      </button>
    </div>
  );
}

export default SearchInput;