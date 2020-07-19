import React from 'react'
import MusicTabs from './MusicTabs'
import '../static/css/Music.css'

export const Musics = () => {
   return (
      <div className='animesContainer'>
         <div>
            <h2>1~3</h2>
            <div className='Music'>
               <MusicTabs
                  title1='1'
                  title2='2' 
                  title3='3'
                  name1 = '星屑オーケストラ'
                  group1 = 'H△G'
                  ex1 = 'ボカロ'
                  name2 = '青空のラプソディー'
                  group2 = 'fhána'
                  ex2 = '小林さんちのメイドラゴンのopです。'
                  name3 = 'StaRt'
                  group3 = 'Mrs. GREEN APPLE'
                  ex3 = ''
                  a1 = 'https://www.youtube.com/watch?v=pVQBKp4InAQ'
                  a2 = 'https://www.youtube.com/watch?v=maKok2RItxM'
                  a3 = 'https://www.youtube.com/watch?v=OTUtF7ZxRN8'
                  color='rgb(255, 0, 255)'
                  />  
            </div>
         </div>
         <div>
            <h2>3~6</h2>
            <div className='Music'>
               <MusicTabs
                  title1='4'
                  title2='5' 
                  title3='6'
                  name1 = '青と夏'
                  group1 = 'Mrs. GREEN APPLE'
                  ex1 = ''
                  name2 = 'ファンファーレは僕らのために'
                  group2 = 'でんぱ組.inc'
                  ex2 = ''
                  name3 = 'Shiny Ray'
                  group3 = 'Yurika'
                  ex3 = ''
                  a1 = 'https://www.youtube.com/watch?v=m34DPnRUfMU'
                  a2 = 'https://www.youtube.com/watch?v=gqEnT3Ku06U'
                  a3 = 'https://www.youtube.com/watch?v=5mU66mU_Pw8'
                  color='rgb(255, 0, 255)'
                  />  
            </div>
         </div>
         <div>
            <h2>6~9</h2>
            <div className='Music'>
               <MusicTabs
                  title1='7'
                  title2='8' 
                  title3='9'
                  name1 = '星の帰り道'
                  group1 = ''
                  ex1 = ''
                  name2 = '地球最後の告白を'
                  group2 = ''
                  ex2 = ''
                  name3 = 'キズナミュージック'
                  group3 = ''
                  ex3 = ''
                  a1 = 'https://www.youtube.com/watch?v=jW5LFrwmMVI'
                  a2 = 'https://www.youtube.com/watch?v=sp2W7Fz7nec'
                  a3 = 'https://www.youtube.com/watch?v=FU_KIdiGmHg'
                  color='rgb(255, 0, 255)'
                  />  
            </div>
         </div>
      </div>
   )
}

export default Musics
