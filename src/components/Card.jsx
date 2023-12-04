import React from 'react'

export default function Card({title,desc, date, time}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{desc}</p>
      <i>{date}</i>
      <b>{time}</b>
      
    </div>
  )
}
