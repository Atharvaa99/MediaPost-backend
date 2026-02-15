const express = require('express');
const postRoutes = require('./api/posts.api');
const cors = require('cors');

const app = express();


app.use(cors({
    origin: process.env.FRONTEND_URL || '*',
    credentials: true
}));

app.use(express.json());

app.use('/api', postRoutes);

module.exports = app;


