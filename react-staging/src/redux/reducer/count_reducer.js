import { INCREMENT, DECREMENT } from "../constant";
const initialState = 0
export default function countReducer(preState = initialState, action) {
    const{type,data}=action
    switch (type) {
        case INCREMENT:
            console.log(preState,data);
            
            return preState + data*1
        case DECREMENT:
            return preState - data*1
        default:
            return preState
    }
    
}