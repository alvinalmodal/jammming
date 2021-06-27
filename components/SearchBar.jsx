import styles from "../styles/SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Enter A Song, Album or Artist"></input>
      <a>SEARCH</a>
    </div>
  );
};

export default SearchBar;
