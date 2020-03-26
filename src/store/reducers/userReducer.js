import * as actionTypes from "../actionTypes";

const initialState = { travelers: null, user: null };

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GETTRAVELERS:
      return { ...state, travelers: action.payload };
    case actionTypes.GETUSER:
      return { ...state, user: action.payload };
    case actionTypes.REMOVEUSER:
      return { ...state, user: null}
    case actionTypes.UPDATEUSER:
      return { ...state, user: action.payload};
    default:
      return state;
  }
}
