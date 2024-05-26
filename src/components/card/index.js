import React from 'react'

const Card = ({title, stat}) => {
  return (
    <div className="flex flex-col w-[15rem] h-[8rem] border rounded-lg justify-center items-center">
        <h2 className="font-bold">{title}</h2>
        <h2>{stat}</h2>
    </div>
  )
}

export default Card