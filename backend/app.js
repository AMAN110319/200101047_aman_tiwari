// app.js
const express = require('express');
const axios = require('axios');
require('./src/db/conn');
const cors = require('cors');
const mongoose = require('mongoose');
const Train = require('./src/models/train');
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());



  app.get('/',(req,res)=>{
    res.send("welcome to the train reservation site");
  })

const JOHN_DOE_BASE_URL = 'http://20.244.56.144/train';

// Register with John Doe Railway Server (POST /register)
app.post('/register', async (req, res) => {

  try {
    const response = await axios.post(`${JOHN_DOE_BASE_URL}/register`, {
      companyName: 'Train Central',
      ownerName: 'Ram',
      rollNo: '1',
      ownerEmail: 'ram@abc.edu',
      accessCode: 'FKOLje',
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Failed to register with the server' });
  }
});

app.get('/trains', async (req, res) => {
  try {
    const tokenResponse = await axios.post(`${JOHN_DOE_BASE_URL}/auth`, {
      companyName: 'Train Central',
      clientID: '646128a0-fbde-4c16-a4b1-6ae6ad718e27',
      ownerName: 'Ram',
      ownerEmail: 'ram@abc.edu',
      rollNo: '1',
      clientSecret: 'Xoyo10RPayK80dAN',
    });

    const accessToken = tokenResponse.data.access_token;

    // Implement API call to fetch train data from John Doe Railway Server
    const trainsResponse = await axios.get(`${JOHN_DOE_BASE_URL}/trains`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // Process and filter the data
    const filteredTrains = processAndFilterTrains(trainsResponse.data);

    // Save the fetched and processed train data to the database
    await saveTrainsToDatabase(filteredTrains);

    res.status(200).json(filteredTrains);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch train data' });
  }
});

// Process and Filter Train Data Function
function processAndFilterTrains(trainsData) {

  // Sample implementation:
  return trainsData.filter(train => train.departureTime > Date.now());
}

// Save Train Data to Database Function
async function saveTrainsToDatabase(trains) {
  try {
    await Train.deleteMany(); // Clear the existing data
    await Train.insertMany(trains); // Insert the new data
    console.log('Train data saved to MongoDB Atlas');
  } catch (error) {
    console.error('Failed to save train data to MongoDB Atlas:', error);
  }
}


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
