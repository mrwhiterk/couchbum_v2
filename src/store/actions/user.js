import * as actionTypes from "../actionTypes";
import { getTravelers, getUser } from "../../axios";

export const GetTravelers = data => {
  return async dispatch => {
    try {
      let response = await getTravelers();

      dispatch({
        type: actionTypes.GETTRAVELERS,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const GetUser = data => {
  return async dispatch => {
    try {
      let response = await getUser();

      dispatch({
        type: actionTypes.GETUSER,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};