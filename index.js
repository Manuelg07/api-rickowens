require('dotenv').config();
const express = require ('express');
const mongoose = require('mongoose');

const PORT = 6000;
const app = express();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('Error connecting to MongoDB', error.message);
});

app.listen(PORT, ()=> console.log(`listening on: http://localhost:${PORT}`));
