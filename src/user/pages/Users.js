import React, { useEffect, useState } from 'react';

import UserList from '../components/UserList';
// import CobaUseCallback from './CobaUseCallback';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/https-hook';

export default function Users() {
  const [loadedUsers, setLoadedUsers] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await sendRequest('http://localhost:5000/api/users/');
        console.log(result);
        setLoadedUsers(result.users);
      } catch (error) {}
    };

    fetchUsers();
  }, [sendRequest]);

  const errorHandler = () => clearError(null);

  // const onClick = useCallback(() => {
  //   setCount((prev) => prev + 1);
  // }, []);

  return (
    <>
      {/* <p>{count}</p> */}
      {/* <CobaUseCallback onClick={onClick} count={count} /> */}
      <ErrorModal error={error} onClear={errorHandler} />
      {isLoading && (
        <div className='center'>
          <LoadingSpinner />
        </div>
      )}

      {!isLoading && loadedUsers && <UserList items={loadedUsers} />}
    </>
  );
}
