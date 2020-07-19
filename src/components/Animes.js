import React from 'react'
import SimpleTabs from './AnimeTabs'
import '../static/css/Animes.css'
import blackc from '../static/images/blackc.jpg'
import hero from '../static/images/hero.jpg'
import dan from '../static/images/dan.jpg'
import violet from '../static/images/violet.jpg'
import newgame from '../static/images/newgame.jpg'
import kobayashi from '../static/images/kobayashi.jpg'
import kotonoha from '../static/images/kotonoha.jpg'
import koe from '../static/images/koe.jpg'
import sayoasu from '../static/images/sayoasu.jpg'


export const AnimesContainer = () => {
   return (
      <div className='animesContainer'>
         <div>
            <h2>バトル・冒険</h2>
            <div className='animes'>
               <SimpleTabs
                  title1='ブラック・クローバー'
                  title2='僕のヒーローアカデミア' 
                  title3='ダンジョンに出会いを求めるのは間違っているだろうか'
                  TabContent1 = '魔力を持つのが普通の世界で魔力を持たない主人公が努力だけで強くなっていく物語。どんな時もあきらめない主人公に勇気をもらえます。'
                  TabContent2 = '多くの人が個性と呼ばれる特殊能力を持つ世界で、個性を持たない主人公が強くなっていく物語。最強になっていく主人公が見ていて楽しいです。'
                  TabContent3 = 'ダンジョンに行き主人公がレベル上げするお話。主人公のがんばりに元気出る。'
                  img1 = {blackc}
                  img2 = {hero}
                  img3 = {dan}
                  color='yellow'
                  />  
            </div>
         </div>
         <div>
            <h2>日常系</h2>
            <div className='animes'>
               <SimpleTabs
                  title1='ヴァイオレット・エヴァーガーデン'
                  title2='NewGame' 
                  title3='小林さんちのメイドラゴン'
                  TabContent1 = '殺りく兵器としてとして育てられた主人公ヴァイオレットが、戦後手紙の代筆の仕事を通していろんな人と触れ合う中で人としての感情を知っていく物語。終始作画がきれいで10話は号泣もの。'
                  TabContent2 = '主人公が高校を卒業してゲーム会社に就職する話。キャラの言動のが好きでした。'
                  TabContent3 = 'プログラマーとして働く一人暮らしの「小林さん」の家にドラゴンの「トール」がメイドの姿で住み込む話。独特の設定で雰囲気が好きでした。'
                  img1 = {violet}
                  img2 = {newgame}
                  img3 = {kobayashi}
                  color='yellow'
                  />  
            </div>
         </div>
         <div>
            <h2>アニメ映画</h2>
            <div className='animes'>
               <SimpleTabs
                  title1='言の葉の庭'
                  title2='聲の形' 
                  title3='さよならの朝に約束の花をかざろう'
                  TabContent1 = '新海誠作品。今まで見たアニメの中で一番すごい作画で見入ってしまいました。ヒロインの先生に感情移入ができるようになって2回目くらいが一番感動しました。'
                  TabContent2 = '主人公の気持ちに共感できたから感動した感じでした。自己肯定感強い人は理解できなそう。'
                  TabContent3 = '十代半ばで外見の成長が止まる不老長寿の種族イオルフの少女が両親を失った赤ん坊を拾って死ぬまで育て見守る物語。年取らないお母さんという設定が最強でした。'
                  img1 = {kotonoha}
                  img2 = {koe}
                  img3 = {sayoasu}
                  color='yellow'
                  />  
            </div>
         </div>
      </div>
   )
}
export default AnimesContainer
