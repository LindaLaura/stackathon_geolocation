import { combineReducers } from "redux";

import companyReducer from './companyReducer';
import productReducer from "./productReducer";
import ticketReducer from "./ticketReducer";


const rootReducer = combineReducers({
  companyReducer,
  productReducer,
  ticketReducer
});

export default rootReducer;