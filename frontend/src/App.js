// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Corrected import statement
import axios from 'axios';
import AllTrains from './pages/AllTrains';
import SingleTrain from './pages/SingleTrain';

const App = () => {
  const [allTrains, setAllTrains] = useState([]);

  useEffect(() => {
    // Fetch all trains from the backend API
    const fetchAllTrains = async () => {
      try {
        const response = await axios.get('http://localhost:5000/trains');
        setAllTrains(response.data);
      } catch (error) {
        console.error('Error fetching all trains:', error.message);
      }
    };

    fetchAllTrains();
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Trains</Link>
            </li>
          </ul>
        </nav>

        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<AllTrains trains={allTrains} />} />
          <Route path="/trains/:trainNumber" element={<SingleTrain />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
