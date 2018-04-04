const express = require('express');
const axios = require('axios');
const router = express.Router();

let apiRes = {};

router.get('/', (req, res) => {
    axios({
        method: 'get',
        url: 'https://api.foursquare.com/v2/venues/explore',
        params: {
            near: 'Minneapolis, MN',
            section: req.query.section,
            radius: '80000',
            limit: 50,
            v:'20180323',
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET
        }
    }).then((response) => {
        apiRes = response.data;
        res.send(apiRes);
    }).catch((error) => {
        console.log('There was an error', error);
        res.sendStatus(500);
    })
})



module.exports = router;