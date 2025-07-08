import React from 'react'

function Friend({friend :{id,name,image,balance}}) {
  return (
    <>
        <li>
            <p>{name}</p>
        </li>
    </>
  )
}

export default Friend