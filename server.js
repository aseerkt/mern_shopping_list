const express = require('express');
const mongoose = require('mongoose');

// Make environmental variables visible
require('dotenv').config();

// Import Item Router
const items = require('./routes/api/items');

const app = express();

// body-parser middleware
app.use(express.json());

// DB Config
const db = process.env.MONGO_URI;

// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connect to MongoDB server'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on http://localhost/${port}`));