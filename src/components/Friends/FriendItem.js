import PropTypes from "prop-types";
import styles from "./Friends.module.css";

export const FriendItem = ({ name, avatar, isOnline }) => {
  const statusClassName = isOnline ? styles.online : styles.offline;

  return (
    <li className={styles.item}>
      <span className={`${styles.status} ${statusClassName}`}>{isOnline}</span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
