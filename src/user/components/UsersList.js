import React from "react";

import UserItem from "./UserItem";
import "./UsersList.css";

const UsersList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="center">
        <p>No Users found.</p>
      </div>
    );
  }

  return (
    <ul>
      {items.map((user) => (
        <UserItem key={user.id} user={user}/>
      ))}
    </ul>
  );
};

export default UsersList;
