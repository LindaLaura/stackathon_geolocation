import {LOAD_TICKETS, LOAD_TICKET, DELETE_TICKET, CREATE_TICKET, EDIT_TICKET} from '../actions/ticketAction';

const loadTickets = (tickets) => ({
    type: LOAD_TICKETS,
    tickets
});

const loadTicket = (ticket) => ({
    type: LOAD_TICKET,
    ticket
});

const createTicket = (ticket) => ({
    type: CREATE_TICKET,
    ticket
});

const deleteTicket = (ticket) => ({
    type: DELETE_TICKET,
    ticket
});

const editTicket = (ticket) => ({
    type: EDIT_TICKET,
    ticket
});

export{
    loadTicket, loadTickets, createTicket, deleteTicket, editTicket
}