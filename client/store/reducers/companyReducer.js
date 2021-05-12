import {LOAD_COMPANY, LOAD_COMPANIES, DELETE_COMPANY, EDIT_COMPANY, CREATE_COMPANY} from '../actions/companyAction';

const initialState = {
    companies:[],
    selectedCompany:{}
};

const companyReducer = (state = initialState, action) => {
    switch (action.type){
        case LOAD_COMPANIES:
            return {...state, companies: action.companies};
        case LOAD_COMPANY:
            return {...state, selectedCompany: action.company};
        case CREATE_COMPANY:
            return {
                ...state,
                companies: [...state.companies, action.companies],
                selectedCompany: action.company
            };
        case EDIT_COMPANY:
            const theCompanies = state.companies.filter((company) => company.id !== state.company.id) 
            return {...state, 
                companies:[...theCompanies, action.company],
            }
        case DELETE_COMPANY:
            const leftoverCompanies = state.companies.filter((company) => {
                    company.id !== action.company.id
                })
            return {...state, companies: leftoverCompanies};
        default: 
            return state
    }
}

export default companyReducer;