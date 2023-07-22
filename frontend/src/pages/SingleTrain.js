// src/pages/SingleTrain.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleTrain = () => {
  const { trainNumber } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    // Fetch single train details from the backend API
    const fetchSingleTrain = async () => {
      try {
        const response = await axios.get(`/trains/${trainNumber}`);
        setTrain(response.data);
      } catch (error) {
        console.error('Error fetching single train:', error.message);
      }
    };

    fetchSingleTrain();
  }, [trainNumber]);

  if (!train) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Train Details - {train.trainNumber}</h1>
      <p>{`Departure Time: ${train.departureTime}`}</p>
      <p>{`Delay (minutes): ${train.delayMinutes}`}</p>
      <p>{`Sleeper Seats Availability: ${train.seatsAvailability.sleeper}`}</p>
      <p>{`AC Seats Availability: ${train.seatsAvailability.AC}`}</p>
      <p>{`Sleeper Price: ${train.prices.sleeper}`}</p>
      <p>{`AC Price: ${train.prices.AC}`}</p>
    </div>
  );
};

export default SingleTrain;
