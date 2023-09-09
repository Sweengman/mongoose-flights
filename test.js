require('dotenv').config()
require('./config/database')

const Flight = require('./models/flight')

Flight.create({
    airline: 'Delta',
    airport: 'NYC',
    flightNo: 255,
    departs: Date()
}).then(console.log)