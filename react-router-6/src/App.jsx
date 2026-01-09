import React from 'react';
import { NavLink, useRoutes } from 'react-router-dom'
import routes from './routes'

export default function App() {
  const element = useRoutes(routes)
  return (
    <div>
      <div id='head'>ReactRouteDemo</div>
      <div id='menu'>
        {/* React Router 6 中使用 className 函数，返回类名字符串 */}
        <NavLink 
          className={({ isActive }) => isActive ? 'active-link' : ''} 
          style={({ isActive }) => ({ color: isActive ? 'red' : '', backgroundColor: isActive ? 'yellow' : '' })}
          to="/home"
        >
          Home
        </NavLink>
        <br />
        <NavLink 
          className={({ isActive }) => isActive ? 'active-link' : ''} 
          style={({ isActive }) => ({ color: isActive ? 'red' : '', backgroundColor: isActive ? 'yellow' : '' })}
          to="/about"
        >
          About
        </NavLink>
      </div>
      <div id='content'>
        {element}
      </div>
    </div>
  )
}
