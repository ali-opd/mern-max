import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHttpClient } from '../../shared/hooks/https-hook';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

import PlaceList from '../components/PlaceList';

export default function UserPlaces() {
  const { userId } = useParams();
  const [places, setPlaces] = useState(null);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchUserPlaces = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/places/user/${userId}`
        );
        console.log(responseData);
        setPlaces(responseData.places);
      } catch (error) {}
    };

    fetchUserPlaces();
  }, [userId, sendRequest]);

  const placeDeleteHandler = (id) => {
    setPlaces((prevState) => prevState.filter((place) => place.id !== id));
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className='center'>
          <LoadingSpinner />
        </div>
      )}

      {!isLoading && places && (
        <PlaceList items={places} onDelete={placeDeleteHandler} />
      )}
    </>
  );
}
