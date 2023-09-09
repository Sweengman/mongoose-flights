const Flight = require('../models/flight')

module.exports = {
    create
}

async function create(req, res, next) {
    const flight = await Flight.findById(req.params.id)
    console.log(req.body)
    flight.destinations.push(req.body)
    console.log(flight.destinations)
    try {
        await flight.save()
    } catch (err) {
        console.log(err)
    }
    res.redirect(`/flights/${flight._id}`)
}