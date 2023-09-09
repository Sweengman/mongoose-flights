Ticket = require('../models/ticket')

module.exports = {
    create,
    new: newTicket
}

function newTicket(req, res, next) {
    res.render('tickets/new', {
        title: 'Generate Ticket',
        flightId: req.params.id
    })
}

async function create(req, res, next) {
    req.body.price = parseInt(req.body.price)
    let ticketBody = {}
    seatArray = [req.body.letter, req.body.number, req.body.section]
    ticketBody.seat = seatArray.join('')
    ticketBody.price = req.body.price
    ticketBody.flight = req.body.flight
    console.log(ticketBody)
    try {
        await Ticket.create(ticketBody)
        res.redirect(`/flights/${req.params.id}`)
    } catch(err) {
        console.error(err)
        res.redirect('/flights')
    }
}