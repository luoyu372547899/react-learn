import React, { Component } from 'react'    
import {NavLink} from 'react-router-dom'
/**
 * @author Leixm
 * 自定义导航链接组件，封装了 NavLink 并设置默认激活样式
 */
export default class MyNavLink extends Component {
  render() {
    return (
      <NavLink activeStyle={{color:'red'}} {...this.props} />
    )
  }
}
