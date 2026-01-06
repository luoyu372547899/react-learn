/**
 * @author Leixm
 * 为 Count 组件生成 action 对象
 */
import { INCREMENT, DECREMENT } from "./constant";

export const createIncrementAction = (data) => {
    return { type: INCREMENT, data }
}

export const createDecrementAction = (data) => {
    return { type: DECREMENT, data }
}

// 异步 action，指返回值为函数的 action
export const createIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time)
    }
}
