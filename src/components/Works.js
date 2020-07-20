import React from 'react';
import WorksContent from './Workscontent';
import Menu from '../static/images/menyu.JPG'
import apple from '../static/images/apple.png'
import ELMS from '../static/images/ELMS.png'
import Dental from '../static/images/DentalClinic.JPG'
import iSara from '../static/images/iSara.png'
import '../static/css/works.css'


const Works = () => {
   return (
      <div id='works' className='works'>
         <h1>\Works/</h1>
         <div className='worksin'>
            <WorksContent title='menu tabel' index='1' date='6/11~6/13' img={Menu} h2={"メニュー表作り"} desc={"html cssを使って何かを作るのが初めてだったので何とか作れたという感じでした。それだけに、作成後簡単にスタイリングする技を教えてもらった時の印象が大きかったです。"}/>
            <WorksContent title='navbar' index='2' date='6/13~6/14' img={apple} h2={"nabvar作り"} desc={"appleのサイトのnavbarをつくりました。アイコンの入れ方、display: flex;での横並び、ホバーの使い方を学びましたした。"} />
            <WorksContent title='ELMS' index='3' date='6/14~6/16' img={ELMS} h2={"ELMS部分模写"} desc={"ELMSは、北大の講義のお知らせなどに使われているサイトでは、posotionでのサイドバーの固定、tableの使い方を学びました。"} />
            <WorksContent title='Dental Clnic' index='4' date='6/16~6/21' img={Dental} h2={"Dental Clinicのサイト模写"} desc={"写真の入れ方やその調整法を学びました。また、レスポンシブもはじめてつけました。navbar,futter,tableなどいろんなstyleの復習にもなりました。"} />
            <WorksContent title='iSara' index='5' date='6/21~7/1' img={iSara} h2={"iSaraのサイト模写"} desc={"とても長いサイトで途中で終わるのかどうか心配になりましたが、大枠を作ってから細かくスタイリングしていくという方法で、くじけず作ることができました。本格的なサイト作成の考え方を学べました。"} />
         </div>
      </div>
   );
   
}
   
export default Works;