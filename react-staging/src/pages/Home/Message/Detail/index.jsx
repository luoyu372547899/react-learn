import React, { Component } from 'react'

const DetailData = [
    {id:1,content:'DetailContent1'},
    {id:2,content:'DetailContent2'},
    {id:3,content:'DetailContent3'},
]
export default class Detail extends Component {
  render() {
    const {id,title} = this.props.match.params
    const detail = DetailData.find(item=>item.id===Number(id))
    return (
      <div>
        <h3>{title}</h3>
        <p>{detail.content}</p>
      </div>
    )
  }
}
