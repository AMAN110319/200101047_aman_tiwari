const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://amantiwari0505:Aman%402003@ac-cxjhcu1-shard-00-00.s3rcsnk.mongodb.net:27017,ac-cxjhcu1-shard-00-01.s3rcsnk.mongodb.net:27017,ac-cxjhcu1-shard-00-02.s3rcsnk.mongodb.net:27017/?ssl=true&replicaSet=atlas-rqn5f5-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB Atlas:', error);
  });