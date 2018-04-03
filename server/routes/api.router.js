const express = require('express');
const axios = require('axios');
const router = express.Router();

let apiRes;

router.get('/', (req, res) => {
    axios({
        method: 'get',
        url: 'https://api.foursquare.com/v2/venues/explore',
        params: {
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            ll: '40.7243,-74.0018',
            query: 'coffee',
            v: '20180323',
            limit: 1
        }
    }).then((response) => {
        console.log('Response from get', response);
        apiRes = response.data;
        res.send(apiRes);
    }).catch((error) => {
        console.log('There was an error', error);
        
    })
})



module.exports = router;