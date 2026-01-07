import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import countReducer from "./reducer/count_reducer";
import personReducer from "./reducer/person_reducer";
import { thunk } from 'redux-thunk'

const rootReducer = combineReducers({
    count: countReducer,
    person: personReducer
})

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export default store;