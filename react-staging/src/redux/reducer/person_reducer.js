import { ADD_PERSON } from "../constant"

const defaultState=[{'id':1,'name':'张三','age':20}]

export default function personReducer(preState=defaultState, action){
    const {type,data} = action
    switch(type){
        case ADD_PERSON:
            return [data,...preState]
        default:
            return preState
    }
}