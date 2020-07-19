import React, { useState } from 'react'
import '../static/css/GoodCount.css'

export const GoodCount = () => {
   const [count, setCount] = useState(0);

   const countUp = () => {
      setCount(count + 1)
   }

   return (
      <div className='count'>
         <p>{count}</p>
         <button className='heart' onClick={countUp}>click</button>
      </div>
   )
}
export default GoodCount
