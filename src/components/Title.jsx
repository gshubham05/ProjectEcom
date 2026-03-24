import React from 'react'

function Title({t1,t2}) {
  return (
    <div>
    <h1 className="text-3xl mb-10">{t1} <span className="font-semibold">{t2}</span></h1></div>
  )
}

export default Title