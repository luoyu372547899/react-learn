/**
 * @author Leixm
 * App 根组件：仅保留 minimal 代码以验证 antd 安装
 */
import React, { Component } from 'react';
import { Button, DatePicker   } from 'antd';
import { WechatOutlined, SearchOutlined } from '@ant-design/icons';
const {RangePicker} = DatePicker;

export default class App extends Component {
  render() {
    return (
      <div >
        <button>原生按钮</button>
        <Button type="primary">Ant Design 按钮</Button>
        <Button type="default">Ant Design 按钮</Button>
        <Button type="dashed">Ant Design 按钮</Button>
        <Button type="link">Ant Design 按钮</Button>
        <Button type="text">Ant Design 按钮</Button>
        <Button type="ghost">Ant Design 按钮</Button>
        <Button type="primary" icon={<SearchOutlined />}>Ant Design 按钮</Button>
        <WechatOutlined />

      <DatePicker />
      <RangePicker />
      </div>
    )
  }
}
