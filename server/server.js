require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const apiRouter = require('./routes/api.router');

let port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.static('server/public'));

app.use('/apiRoute', apiRouter);

app.listen(port, () => {
    console.log('server running on port: ', port);
    
})