import * as actionTypes from "../actionTypes"

import { checkTokenAndReturn } from '../../axios'

const initialState = { isAuth: checkTokenAndReturn() }

export default function(state = initialState, action) {
    switch(action.type) {
        case actionTypes.REGISTER:
            return { ...state, isAuth: action.payload.user };
        case actionTypes.LOGIN:
            return { ...state, isAuth: action.payload.user };
        default:
            return state;
    }
}