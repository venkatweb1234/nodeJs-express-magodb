require('dotenv').config()
const express = require('express');
const app = express()
const mongoose = require("mongoose");
mongoose.connect(
 process.env.DATABASE_URL,
  { useUnifiedTopology: true, useNewUrlParser: true }
);
app.use(express.json());
const subscribersRouter = require('./routes/subscribers')
const usersRouter = require('./routes/apidata')
app.use('/api', usersRouter)
app.listen(3000, () => console.log('Server Started'))