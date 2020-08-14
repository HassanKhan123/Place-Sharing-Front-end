import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 1,
      name: "Hassan",
      image:
        "https://images.pexels.com/photos/2884866/pexels-photo-2884866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
