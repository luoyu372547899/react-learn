import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function News() {
    const [news] = useState([
        { id: 1, name: '新闻1', content: '新闻1的内容' },
        { id: 2, name: '新闻2', content: '新闻2的内容' },
        { id: 3, name: '新闻3', content: '新闻3的内容' },
    ])
    return (
        <div>
            <ul>
                {news.map(news => (
                    <li key={news.id}>
                        <Link to={`detail/${news.id}/${news.name}/${news.content}`}>{news.name}</Link>
                    </li>
                ))}
            </ul>
            <Outlet></Outlet>
        </div>
    )
}
