import * as actionTypes from "../actionTypes";

const initialState = { listings: [] };

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GETLISTINGS:
      return { ...state, listings: action.payload };
    case actionTypes.CREATELISTING:
      console.log('hit reducer')
      return { ...state, listings: [... state.listings, action.payload]}
    default:
      return state;
  }
}