import { connect } from 'react-redux'
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../redux/action/count_action'
import React, { Component } from 'react'


class Count extends Component {

    increment = () => {
        const { value } = this.selectNumber
        this.props.increment(value)
    }
    decrement = () => {
        const { value } = this.selectNumber
        this.props.decrement(value)
    }
    addIfOdd = () => {
        const { value } = this.selectNumber
        if (this.props.count % 2 !== 0) {
            this.props.increment(value)
        }
    }
    addAsync = () => {
        const { value } = this.selectNumber
        this.props.incrementAsync(value,1000)
    }
    render() {
        console.log(this.props)
        return (
            <div >
                <h1>当前求和为:{this.props.count}, 下方Person组件求和:{this.props.person.length}</h1>
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
function mapStateToProps(state) {
    return {
        count: state.count,
        person: state.person
    }
}
// function mapDispatchToProps(dispatch) {
//     return {
//         increment: (value) => {
//             dispatch(createIncrementAction(value))
//         },
//         decrement: (value) => {
//             dispatch(createDecrementAction(value))
//         },
//         incrementAsync: (value,time) => {
//             dispatch(createIncrementAsyncAction(value,time))
//         }
//     }
// }
const mapDispatchToProps = {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementAsync: createIncrementAsyncAction
}
const CountContainer = connect(mapStateToProps, mapDispatchToProps)(Count)
export default CountContainer