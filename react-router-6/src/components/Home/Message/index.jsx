import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function Message() {
    const [messages] = useState([
        { id: 1, name: '消息1', content: '消息1的内容' },
        { id: 2, name: '消息2', content: '消息2的内容' },
        { id: 3, name: '消息3', content: '消息3的内容' },
    ])
    return (
        <div>
            <ul>
                {messages.map(message => (
                    <li key={message.id}>
                        <Link to={`detail/${message.id}/${message.name}/${message.content}`}>{message.name}</Link>
                    </li>
                ))}
            </ul>
            <Outlet></Outlet>
        </div>
    )
}
