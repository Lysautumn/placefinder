const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

let port = 5000;

app.use(bodyParser.json());
app.use(express.static('server/public'));

app.listen(port, () => {
    console.log('server running on port: ', port);
    
})