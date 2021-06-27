import styles from "../styles/Playlist.module.css";

const Playlist = () => {
  return (
    <div className={styles.playlist}>
      <input type="text" value="New Playlist" />
      <a>SAVE TO SPOTIFY</a>
    </div>
  );
};

export default Playlist;
