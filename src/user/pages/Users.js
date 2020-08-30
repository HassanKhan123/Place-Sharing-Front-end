import React, { useEffect, useState } from "react";

import UsersList from "../components/UsersList";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import {useHttpClient} from '../../shared/hooks/http-hook'

const Users = () => {
 
  const [loadedUsers, setLoadedUsers] = useState([]);
  const {isLoading,clearError,error,sendRequest} = useHttpClient()

  useEffect(() => {
    const fetchUsers = async () => {
     
      try {
        const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/users`);
      
        setLoadedUsers(responseData.users);
       
      } catch (error) {
       
      }
    };
    fetchUsers();
  }, [sendRequest]);
  
  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner asOverlay />
        </div>
      )}
      {!isLoading && <UsersList items={loadedUsers} />}
    </>
  );
};

export default Users;
