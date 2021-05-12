import {LOAD_TICKET, LOAD_TICKETS, DELETE_TICKET, EDIT_TICKET, CREATE_TICKET} from '../actions/ticketAction';

const initialState = {
    tickets:[],
    selectedTicket:{}
};

const ticketReducer = (state = initialState, action) => {
    switch (action.type){
        case LOAD_TICKETS:
            return {...state, tickets: action.tickets};
        case LOAD_TICKET:
            return {...state, selectedTicket: action.ticket};
        case CREATE_TICKET:
            return {
                ...state,
                tickets: [...state.tickets, action.ticket],
                selectedTicket: action.ticket
            };
        case EDIT_TICKET:
            const theTickets = state.tickets.filter((ticket) => ticket.id !== state.ticket.id) 
            return {...state, 
                tickets:[...theTickets, action.ticket],
            }
        case DELETE_TICKET:
            const leftoverTickets = state.tickets.filter((ticket) => {
                    ticket.id !== action.ticket.id
                })
            return {...state, tickets: leftoverTickets};
        default: 
            return state
    }
}

export default ticketReducer;