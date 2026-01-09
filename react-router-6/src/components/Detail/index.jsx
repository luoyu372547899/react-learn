import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
  const {id, name, content} = useParams()
  return (
    <div>
      <h3>Detail</h3>
      <p>{id}</p>
      <p>{name}</p>
      <p>{content}</p>
    </div>
  )
}
