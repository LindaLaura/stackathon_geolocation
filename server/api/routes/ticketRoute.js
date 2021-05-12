const router = require('express').Router();

const Product = require('../../db');
const Ticket = require('../../db/models/ticket');
const Company = require('../../db');

router.get('/', async(req, res, next) =>{
    try{
        const tickets = await Ticket.findAll();
        res.status(200).send(tickets);
    }
    catch(ex){
        next(ex)
    }
})

router.get('/:ticketId', async(req, res, next) =>{
    try{
        const ticket = Ticket.findByPk(req.params.ticketId, {
        });
        res.status(200).send(ticket);
    }
    catch(ex){
        next(ex)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const {title} = req.body;
        const ticket = await Ticket.create({title})
        res.status(201).send(ticket);
    
    } catch (err) { next(err) }
})
  
router.delete('/:ticketId', async (req, res, next) => {
    try {
        const {ticketId} = req.params;
        const ticket = await Ticket.findByPk(ticketId);
        await ticket.destroy();
        res.sendStatus(204);
    
    } 
    catch (err) {
         next(err) 
    }
})
  
router.put('/:ticketId', async (req, res, next) => {
    try {
        const {title} = req.body;
        const {ticketId} = req.params;
        const ticketToBeUpdated = await Ticket.findByPk(ticketId);
        const editedTicket = await ticketToBeUpdated.update({title})
        res.status(204).send(editedTicket); // editedTicket.dataValues
    
    } catch (err) { next(err) }
})
  
  
module.exports = router