const express = require('express')
const router = express.Router()
const flightCtrl = require('../controllers/flight.js')
const destCtrl = require('../controllers/destinations')
const ticketCtrl = require('../controllers/tickets')

router.get('/', flightCtrl.index)
router.get('/new',flightCtrl.newFlight)
router.post('/', flightCtrl.create)
router.get('/:id', flightCtrl.show)
router.post('/:id/destinations', destCtrl.create)

router.get('/tickets/:id', ticketCtrl.new)
router.post('/:id/tickets', ticketCtrl.create)

module.exports = router