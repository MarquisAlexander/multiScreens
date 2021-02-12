import { createStore, combineReducers } from 'redux';
import darkModeContextReducer from './reducers/darkModeContextReducer';

export default createStore(combineReducers({
    darkModeContext: darkModeContextReducer
}));