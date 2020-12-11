let express = require('express');
let route = express.Router();
const axios = require('axios');

route.get('/events/:lat/:lon', async (req, res) => {
    try {
        const { lat,lon } = req.params
        const latlon = `${lat},${lon}`
        const response = await axios.get( "http://app.ticketmaster.com/discovery/v2/events.json?apikey=pLOeuGq2JL05uEGrZG7DuGWu6sh2OnMz&latlong="+latlon)
    res.status(200).send(response.data._embedded.events)
    } catch (error) {
        console.log(error)
        res.status(500).send('oops')
    }
    
})

module.exports = route