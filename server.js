const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

const teamRouter = require('./controllers/teams');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

const cors = require('cors');

app.use(cors());

app.use(express.json());

app.use('/teams', teamRouter);



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});