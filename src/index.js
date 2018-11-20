require('./knexfile');
import express from 'express';
// const express = require('express');
import router from './routes';
// const router = require('./routes');
var morgan = require('morgan');

const app = express();
// Default port for the application.
const port = 8080;

// Get logger for all the http request inside the application.
app.use(morgan('combined'));

app.use('/api', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
