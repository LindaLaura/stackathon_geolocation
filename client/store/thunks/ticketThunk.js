import axios from 'axios';

import {
    loadTickets,
    loadTicket,
    createTicket,
    editTicket,
    deleteTicket,
  } from '../actionsCreators/ticketActionCreator';
  
  const fetchTickets = () => {
      return async (dispatch) => {
        const { data: tickets } = await axios.get("/api/tickets");
        dispatch(loadTickets(tickets));
      };
  };
  
  const fetchTicket = (ticketId) => {
      return async (dispatch) => {
        const { data: ticket } = await axios.get(`/api/tickets/${ticketId}`);
        dispatch(loadTicket(ticket));
      };
  };
  
  const addTicket= (newTicket, {history}) => {
      return async (dispatch) => {
        const { data: ticket } = await axios.post(
          `/api/tickets/`,
          newTicket,
        );
        dispatch(createTicket(ticket));
        history.push('/SingleProduct');
      };
  };
  
  const destroyTicket = (ticket) => {
      return async (dispatch) => {
        await axios.delete(`/api/tickets/${ticket.id}`);
        dispatch(deleteTicket(ticket));
      };
  };
  
  const updateTicket = (ticket, history) => {
      return async (dispatch) => {
        const { data: updatedTicket } = await axios.put(
          `/api/tickets/${ticket.id}`,
          ticket
        );
        dispatch(editTicket(updatedTicket));
        history.push(`/tickets/${updatedTicket.id}`);
      };
  };
  
  export{fetchTickets, fetchTicket, updateTicket, destroyTicket, addTicket}