import { legacy_createStore, applyMiddleware } from "redux";
import countReducer from "./count_reducer";
import { thunk } from 'redux-thunk'

const store = legacy_createStore(countReducer, applyMiddleware(thunk));
export default store;