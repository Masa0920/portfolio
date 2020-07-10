import React from 'react';
import MoreButton from './MoreButton'
import '../static/css/WorksContent.css'

const WorksContent = (props) => {
   // console.log(aaa)
   return (
      <div className='worksbox'>
         <div className='container'>
            <h2>{props.index}</h2>
            <div className='containerleft'>
               <p className='title'>{props.title}</p>
               <p className='date'>{props.date}</p>
            </div>
         </div>
         <p className='img'><img src={props.img}/></p>
         {/* {props.img} */}
         <MoreButton h2={props.h2} desc={props.desc}/>
      </div>
   );
}

export default WorksContent;