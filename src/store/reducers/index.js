import { combineReducers } from 'redux';
import authReducer from './authReducer';
import listingReducer from './listingReducer';
import userReducer from './userReducer';

export default combineReducers({
    authReducer,
    listingReducer,
    userReducer
})
