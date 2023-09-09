const Flight = require('../models/flight')
const Ticket = require('../models/ticket')
module.exports = {
    index,
    newFlight,
    create,
    show
}

async function index(req, res, next) {
    console.log('trying...')
    const flights = await Flight.find()
    res.render('flights/index', {
        title: 'Flights',
        flights
    })
}

function newFlight(req, res, next) {
    res.render('flights/new', {
        title: 'New Flights'
    })
}

async function create(req, res, next) {
    console.log(req.body)
    req.body.flightNo = parseInt(req.body.flightNo)
    try {
        await Flight.create(req.body)
        res.redirect('/flights')
    } catch (err) {
        console.error(err)
        res.render('flights/new', {title: 'New Flight'})
    }  
}

async function show(req, res, next) {
    const flight = await Flight.findById(req.params.id)
    const tickets = await Ticket.find({flight: flight})
    res.render('flights/show', { title: 'Details', flight, tickets })
}