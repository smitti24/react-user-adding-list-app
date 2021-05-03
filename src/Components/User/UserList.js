import React, { useState } from "react";
import classes from "./UserList.module.css";
import UserListItem from "./UserListItem";
import Card from "../UI/Card/Card";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.items.map((user) => (
          <UserListItem
            key={user.id}
            id={user.id}
            username={user.username}
            age={user.age}
            onDelete={props.onDeleteItem}
          ></UserListItem>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
