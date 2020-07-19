import React, { useState } from "react";


// simpletabsで使うから作っとく
const TabContent = (props) => {
   const {TabContent} = props
   return(
      <div style={{
         backgroundColor: 'white',
      }}>
         <img
         style={{
            width: '150px',
            height: '150px',
            objectFit: 'contain',
         }}
         src={props.img}/>
         <div
         style={{
            backgroundColor:'white',
            padding: '10px',
            fontSize: '14px',
         }}>
         {TabContent}
         </div>
      </div>
   )
}

//simplerabsで全体管理
const SimpleTabs = (props) => {
   const [selectedIndex, setSelectedIndex] = useState(0);

//箱三つののうち一つ作る
   const Tab = (props) => {
      const { title, index } = props
      // props.title, props.indexの意味
      return (
         <span
            style={{
               display: "inline-block",
               padding: "10px 2px",
               background: props.color,
               background: index === selectedIndex ? 'white' : props.color,
               //===だったら?の後ろじゃなかったら:の後ろ
               cursor:'pointer', 
               width: '100px',
               height: '140px',
            }} 
            onClick={() => setSelectedIndex(index)}
         >
            {title}
         </span>
      );
   };
// ここでtab終了

   let content = ''

   if (selectedIndex===0) {
      content = <TabContent TabContent = {props.TabContent1} img={props.img1} />
   } else if (selectedIndex===1) {
      content = <TabContent TabContent= {props.TabContent2} img={props.img2} />
   } else {
      content = <TabContent TabContent= {props.TabContent3} img={props.img3} />
   }

   return (
      <div>
         <div
         style = {{
            display: 'flex',
         }}>
            <Tab title= {props.title1} index={0} color= {props.color}/>
            <Tab title= {props.title2} index={1} color= {props.color}/>
            <Tab title= {props.title3} index={2} color= {props.color}/>
         </div>
         <div>
            { content }
         </div>
      </div>
   );
}

export default SimpleTabs