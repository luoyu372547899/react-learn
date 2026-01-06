/**
 * @author Leixm
 * 计数器组件：演示 Redux 基础用法
 */
import React, { Component } from 'react'
import store from '../redux/store'
import { createIncrementAction, createDecrementAction,createIncrementAsyncAction } from '../redux/count_action'


export default class Count extends Component {

    increment = () => {
        const { value } = this.selectNumber
        console.log(value);
        store.dispatch(createIncrementAction(value))

    }
    decrement = () => {
        const { value } = this.selectNumber
        store.dispatch(createDecrementAction(value))
    }
    addIfOdd = () => {
        const { value } = this.selectNumber
        if (value % 2 !== 0) {
            store.dispatch(createIncrementAction(value))
        }
    }
    addAsync = () => {
        const { value } = this.selectNumber
        store.dispatch(createIncrementAsyncAction(value,1000))
    }
    render() {
        return (
            <div >
                <h1>当前求和为:{store.getState()}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.addIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.addAsync}>异步加</button>&nbsp;
            </div>
        )
    }
}
