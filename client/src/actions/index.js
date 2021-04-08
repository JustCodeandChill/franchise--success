import axios from "axios";
import {
  FETCH_ALL_FRANCHISE,
  FETCH_TOP_FRANCHISES,
  FETCH_FRANCHISE_BY_CATEGORY,
  MENU_CLICK,
  REDIRECT,
  SUBMIT_FORM,
  FETCH_FRANCHISE_BY_NAME,
  CLEAR_STATE
} from "./type";

import history from '../utils/history';

export const fetchAllFranchises = () => async (dispatch) => {
  const franchise = await axios.get("/api/franchise/tat-ca");
  dispatch({ type: FETCH_ALL_FRANCHISE, payload: franchise.data });
};

export const fetchFranchiseByCategory = (category) => async (dispatch) => {
  console.log("In fetchcategory");
  const franchise = await axios.get(`/api/franchise/${category}`);
  //  console.log('Between fetchcategory', franchise.data)
  dispatch({ type: FETCH_FRANCHISE_BY_CATEGORY, payload: franchise.data });
  //  console.log('After fetchcategory')
};

export const fetchTopFranchises = () => async dispatch => {
  console.log('In fimages');
  const franchises = await axios.get('/api/franchise/tat-ca');
  dispatch({type : FETCH_TOP_FRANCHISES, payload : franchises.data})
  
}

export const fetchFranchiseByName = (name) => async (dispatch) => {
  const franchise = await axios.get(`/api${name}`);
  dispatch({type : FETCH_FRANCHISE_BY_NAME, payload : franchise.data});
}

export const redirect = (url) => async(dispatch) => {
  console.log(`In redirect: /franchise/${url}`);
  const franchises = await axios.get(`/api/franchise/${url}`);
  dispatch({type : REDIRECT, payload : franchises.data});
  console.log("between redirect", history);
  history.push(`/franchise/${url}`);
  console.log("after redirect");
};

export const clickMenu = () => {
  return { type: MENU_CLICK };
};

export const clearState = () => {
  return { type: CLEAR_STATE };
};

export const submitForm = (formValues) => async (dispatch) => {
  console.log('in submit form, formvalues: ', formValues);
  await axios.post('/api/form', formValues)
  return {type : SUBMIT_FORM, payload : formValues}
} 
