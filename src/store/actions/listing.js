import * as actionTypes from "../actionTypes";
import { getListings } from "../../axios";

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


