import React from 'react'
import { useParams } from 'react-router-dom'

function Concept() {
    let {id} = useParams()
    // console.log(id)
  return (
    <div>{id}</div>
  )
}

export default Concept