import React, { useEffect, useState } from "react";
import Train from "../components/Train";
import axios from 'axios';

const Home = () => {
  const [trains, setTrains] = useState([]);

  const loadTrainData = async () => {
    try {
      const result = await axios.get("http://localhost:5000/trains/AC");
      setTrains(result.data);
    } catch (error) {
      console.error("Error fetching train data:", error);
    }
  }

  useEffect(() => {
    loadTrainData();
  }, []); 

  return (
    <div>
      {trains.map(train => {
        return <Train key={train.trainNumber} props={train} />
      })}
    </div>
  );
};

export default Home;