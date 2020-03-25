import * as actionTypes from "../actionTypes";

const initialState = { travelers: null };

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GETTRAVELERS:
      return { ...state, travelers: action.payload };
    default:
      return state;
  }
}
