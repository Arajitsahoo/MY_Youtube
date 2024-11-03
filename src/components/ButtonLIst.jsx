import React from 'react'
import Buttons from './Buttons'

const ButtonLIst = () => {
  const bList = ["All","Live","Weather Forecasting","Music","PodCast","WebSeries","Stock","Price","Recently Uploaded","New to you","Software Development","Java","Cloud Compunting"];
  //
  return (
    <div className='flex'>
      {bList.map((items)=> <Buttons name={items} key={items}/>)}
    </div>
  )
}

export default ButtonLIst
