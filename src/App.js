import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/train';

function App() {
  const [trainSchedules, setTrainSchedules] = useState([]);

  useEffect(() => {
    fetchTrainSchedules();
  }, []);

  const fetchTrainSchedules = async () => {
    try {
      // Replace 'YOUR_AUTH_TOKEN' with the actual authorization token you received from the server
      const authToken = 'YOUR_AUTH_TOKEN';
      const headers = { Authorization: `Bearer ${authToken}` };

      const response = await axios.get(`${API_BASE_URL}/trains`, { headers });
      setTrainSchedules(response.data);
    } catch (error) {
      console.error('Failed to fetch train schedules:', error);
    }
  };

  return (
    <div>
      <h1>Train Schedules</h1>
      <ul>
        {trainSchedules.map((train) => (
          <li key={train.trainNumber}>
            {train.trainName} - Departure: {train.departureTime.hours}:
            {train.departureTime.minutes}:{train.departureTime.seconds} |
            Sleeper Seats: {train.seatsAvailable.sleeper} | AC Seats: {train.seatsAvailable.AC} | Price: ${train.price.sleeper} (Sleeper) ${train.price.AC} (AC)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
