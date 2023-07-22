// src/pages/AllTrains.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllTrains = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Fetch all trains from the backend API
    const fetchTrains = async () => {
      try {
        const response = await axios.get('/trains');
        setTrains(response.data);
      } catch (error) {
        console.error('Error fetching trains:', error.message);
      }
    };

    fetchTrains();
  }, []);

  return (
    <div>
      <h1>All Trains Schedule</h1>
      {trains.map((train) => (
        <div key={train.trainNumber}>
          <h2>{`Train Number: ${train.trainNumber}`}</h2>
          <p>{`Departure Time: ${train.departureTime}`}</p>
          <p>{`Delay (minutes): ${train.delayMinutes}`}</p>
          <p>{`Sleeper Seats Availability: ${train.seatsAvailability.sleeper}`}</p>
          <p>{`AC Seats Availability: ${train.seatsAvailability.AC}`}</p>
          <p>{`Sleeper Price: ${train.prices.sleeper}`}</p>
          <p>{`AC Price: ${train.prices.AC}`}</p>
          <Link to={`/trains/${train.trainNumber}`}>View Details</Link>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default AllTrains;
