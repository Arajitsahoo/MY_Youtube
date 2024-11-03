import React from 'react'

const ChartMessage = ({name, message}) => {
  return (
    <div className='flex  gap-4 p-2 '>
      <img src="Profile.svg" alt="" />
      <span className='font-bold'>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChartMessage
