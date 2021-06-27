import styles from "../styles/SearchResults.module.css";

const SearchResults = () => {
  return (
    <div className={styles.searchResults}>
      <h2>Results</h2>
      <div className={styles.trackList}></div>
    </div>
  );
};

export default SearchResults;
