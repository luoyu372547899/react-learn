/**
 * @author Leixm
 * 搜索组件
 */
import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
    search = () => {
        const { value } = this.inputElement;
        console.log(`正在搜索关键词: ${value}`);
        // this.props.updateState({
        //     isFirst: false,
        //     isLoading: true,
        //     error: ''
        // })
        PubSub.publish('updateState', {
            isFirst: false,
            isLoading: true,
            error: ''
        })
        // 使用 GitHub 搜索接口
        axios.get(`https://api.github.com/search/users?q=${value}`)
            .then((response) => {
                // 搜索接口的结果在 response.data.items 中
                // this.props.updateState({
                //     isLoading: false,
                //     users: response.data.items
                // })
                PubSub.publish('updateState', {
                    isLoading: false,
                    users: response.data.items
                })
            })
            .catch((error) => {
                // this.props.updateState({
                //     isLoading: false,
                //     error: error.message
                // })
                PubSub.publish('updateState', {
                    isLoading: false,
                    error: error.message
                })
            })
    }
    render() {
        return (
            <div className="search-section">
                <input ref={(c) => this.inputElement = c} type="text" placeholder="输入用户名进行搜索" />
                <button onClick={this.search}>搜索 GitHub 用户</button>
            </div>
        )
    }
}