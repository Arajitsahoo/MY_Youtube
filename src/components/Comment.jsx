import React from 'react'
import profile from '../../public/Profile.svg'


const Comment = ({comments}) => {
    
    const {Name, text} = comments;
    return (
    <div className='flex gap-2 shadow-lg bg-gray-200 rounded p-2 '>
      <img src={profile} alt="PF" className='w-12 h-12' />
      <div>
      <div className='font-bold'>{Name}</div>
      <div>{text}</div>
      </div>
    </div>
  )
}

export default Comment
