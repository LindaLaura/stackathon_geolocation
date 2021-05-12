import{LOAD_COMPANIES, LOAD_COMPANY, DELETE_COMPANY, CREATE_COMPANY, EDIT_COMPANY} from '../actions/companyAction';

const loadCompanies = (companies) => {
    type: LOAD_COMPANIES,
    companies
};

const loadCompany = (company) => {
    type: LOAD_COMPANY,
    company
};

const createCompany = (company) => {
    type: CREATE_COMPANY,
    company
};

const deleteCompany = (company) => {
    type: DELETE_COMPANY,
    company
};

const editCompany = (company) => {
    type: EDIT_COMPANY,
    company
};

export{
    loadCompanies, loadCompany, editCompany, createCompany, deleteCompany
}