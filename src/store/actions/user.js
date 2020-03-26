import * as actionTypes from "../actionTypes";
import { getTravelers, getUser, updateUser } from "../../axios";

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

export const GetUser = id => {
  return async dispatch => {
    try {
      let response = await getUser(id);
      console.log(response.data);

      dispatch({
        type: actionTypes.GETUSER,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const UpdateUser = (id, data) => {
  return async dispatch => {
    try {
      let response = await updateUser(id, data);
      console.log(response.data);

      dispatch({
        type: actionTypes.UPDATEUSER,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const RemoveUser = () => {
  return {
    type: actionTypes.REMOVEUSER
  };
};