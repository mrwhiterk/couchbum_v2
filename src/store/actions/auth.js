import * as actionTypes from "../actionTypes";
import { register } from "../../axios";

export const Register = data => {
  return async dispatch => {
    try {
      let response = await register(data);
      localStorage.setItem("token", response.data.token);

      dispatch({
        type: actionTypes.REGISTER,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};