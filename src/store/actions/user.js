import * as actionTypes from "../actionTypes";
import { getTravelers } from "../../axios";

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