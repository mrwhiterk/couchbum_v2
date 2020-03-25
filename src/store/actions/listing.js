import * as actionTypes from "../actionTypes";
import { getListings, createListing } from "../../axios";

export const GetListings = data => {
  
  return async dispatch => {
    try {
      let response = await getListings();
     
      dispatch({
        type: actionTypes.GETLISTINGS,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const CreateListing = data => {
  
  return async dispatch => {
    try {
      let response = await createListing(data);
     
      dispatch({
        type: actionTypes.CREATELISTING,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};


