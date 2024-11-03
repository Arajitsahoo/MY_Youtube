import React from 'react'
import CommentLIst from './CommentLIst'
import {COMMENT_DATA} from '../utils/constants'


const CommentSection = () => {
  return (
    <div className=' p-2 m-4 gap-16'>
      <h1 className='text-2xl'>Comments:</h1>
      <div className='m-2'>
        
        <CommentLIst data ={COMMENT_DATA}/>
      </div>
    </div>
  )
}

export default CommentSection
