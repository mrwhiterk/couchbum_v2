import * as actionTypes from "../actionTypes";
import { getTravelers, getUser, updateUser, addSkill, removeSkill } from "../../axios";

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

export const AddSkill = (id, data) => {
    return async dispatch => {
        try {
            let response = await addSkill(id, data)
   

            dispatch({
                type: actionTypes.ADDSKILL,
                payload: response.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const RemoveSkill = (id, data) => {
    return async dispatch => {
        try {
            let response = await removeSkill(id, data);
       
            dispatch({
                type: actionTypes.REMOVESKILL,
                payload: response.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const RemoveUser = () => {
  return {
    type: actionTypes.REMOVEUSER
  };
};