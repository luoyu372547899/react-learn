/**
 * @author Leixm
 * 用户列表组件
 */
import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
    render() {
        const { users } = this.props;
        const { isFirst, isLoading, error } = this.props;
        return (
            <div className="list-container">
                {
                    isFirst ? <h2 style={{ textAlign: 'center' }}>欢迎使用，请输入关键词搜索用户</h2> :
                    isLoading ? <h2 style={{ textAlign: 'center' }}>正在加载中...</h2> :
                    error ? <h2 style={{ textAlign: 'center', color: 'red' }}>出现错误：{error}</h2> :
                    <table className="user-table">
                        <thead>
                            <tr>
                                <th>头像</th>
                                <th>用户名</th>
                                <th>GitHub 链接</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user) => (
                                    <tr key={user.id}>
                                        <td>
                                            <img src={user.avatar_url} alt={user.login} style={{ width: '50px', borderRadius: '50%' }} />
                                        </td>
                                        <td>{user.login}</td>
                                        <td>
                                            <a href={user.html_url} target="_blank" rel="noreferrer">访问主页</a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                }
            </div>
        )
    }
}
