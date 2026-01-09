import { Outlet, NavLink } from "react-router-dom"

export default function Home() {
  return (
    <div>
      <h3>HomeContent</h3>
      <NavLink to="message">消息</NavLink>
      <NavLink to="news">新闻</NavLink>
      <Outlet></Outlet>
    </div>
  )
}
