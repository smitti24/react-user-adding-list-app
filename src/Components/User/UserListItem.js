import React, { useState } from "react";
import styles from "./UserList.module.css";

const UserListItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li class={styles["user-item"]} onClick={deleteHandler}>
      {props.username} ({props.age} years old)
    </li>
  );
};

export default UserListItem;
