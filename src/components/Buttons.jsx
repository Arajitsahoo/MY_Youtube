import React from 'react'

const Buttons = ({name}) => {
  return (
    <div>
      <button className='bg-gray-200 px-4 mx-2 my-2 rounded-xl font-bold'>{name}</button>
    </div>
  )
}

export default Buttons
