const express = require('express');
var morgan = require('morgan');
import hospitalController from './controller/hospitalController';

const app = express();

app.get('/', (req, res) => res.send(200, 'Api is running'));

app.use('/doctor', hospitalController);
// app.use('/patients', patientController);

module.exports = app;
