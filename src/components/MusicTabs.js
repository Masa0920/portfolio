import React, { useState } from "react";


// simpletabsで使うから作っとく
const TabContent = (props) => {
   return(
      <div style={{
         backgroundColor: 'white',
      }}>
         <div
         style={{
            backgroundColor:'white',
            padding: '10px',
            fontSize: '14px',
            // whiteSpace: 'pre-line',
         }}>
         <h2>{props.TabContent1}</h2>
         <p>{props.TabContent2}</p>
         <p>{props.TabContent3}</p>
         </div>
         <a href={props.a}>link</a>
      </div>
   )
}

//simplerabsで全体管理
const MusicTabs = (props) => {
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
               lineHeight: '50px',
               background: props.color,
               background: index === selectedIndex ? 'white' : props.color,
               //===だったら?の後ろじゃなかったら:の後ろ
               cursor:'pointer', 
               width: '100px',
               height: '50px',
               fontSize: '24px'
               // '&:hover': {
               //    backgroundColor: grey[200],
               // } 
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
      content = <TabContent TabContent1 = {props.name1} TabContent2 = {props.group1} TabContent3 = {props.ex1} a={props.a1} />
   } else if (selectedIndex===1) {
      content = <TabContent TabContent1 = {props.name2} TabContent2 = {props.group2} TabContent3 = {props.ex2} a={props.a2} />
   } else {
      content = <TabContent TabContent1 = {props.name3} TabContent2 = {props.group3} TabContent3 = {props.ex3} a={props.a3} />
   }

   return (
      <div 
         style={{
            // border:'2px solid {props.color}',
            // display: 'flex',
            // borderRadius: '20px',
         }}>
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

export default MusicTabs