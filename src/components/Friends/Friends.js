import React from "react";
import PropTypes from "prop-types";
import { FriendItem } from "./FriendItem";
import styles from "./Friends.module.css";

export const Friends = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ id, name, avatar, isOnline }) => (
      <FriendItem key={id} name={name} avatar={avatar} isOnline={isOnline} />
    ))}
  </ul>
);

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
