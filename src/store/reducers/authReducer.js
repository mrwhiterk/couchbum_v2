import * as actionTypes from "../actionTypes"
const initialState = { isAuth: null }

export default function(state = initialState, action) {
    switch(action.type) {
        case actionTypes.REGISTER:
            return { ...state, isAuth: action.payload.user };
        default:
            return state;
    }
}