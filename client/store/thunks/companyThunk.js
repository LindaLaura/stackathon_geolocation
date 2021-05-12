import axios from 'axios';

import {
    loadCompanies,
    loadCompany,
    createCompany,
    editCompany,
    deleteCompany,
  } from '../actionsCreators/companyActionCreator';
  
  const fetchCompanies = () => {
      return async (dispatch) => {
        const { data: companies } = await axios.get("/api/companies");
        dispatch(loadCompanies(companies));
      };
  };
  
  const fetchCompany = (companyId) => {
      return async (dispatch) => {
        const { data: company } = await axios.get(`/api/companies/${companyId}`);
        dispatch(loadCompany(company));
      };
  };
  
  const addCompany = (newCompany, history) => {
      return async (dispatch) => {
      //   const headerToken = {
      //     headers: { authorization: window.localStorage.getItem("token") },
      //   }; per la sicurezza della api
        const { data: company } = await axios.post(
          `/api/companies/`,
          newCompany,
        );
        dispatch(createCompany(company));
        history.push(`/companies/${company.id}`);
      };
  };
  
  const destroyCompany = (company) => {
      return async (dispatch) => {
        await axios.delete(`/api/companies/${company.id}`);
        dispatch(deleteCompany(company));
      };
  };
  
  const updateCompany = (company, history) => {
      return async (dispatch) => {
        const { data: updatedCompany } = await axios.put(
          `/api/companies/${company.id}`,
          company
        );
        dispatch(editCompany(updatedCompany));
        history.push(`/companies/${updatedCompany.id}`);
      };
  };
  
  export{fetchCompanies, fetchCompany, updateCompany, destroyCompany, addCompany}