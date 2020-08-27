import React from 'react'
import '../static/css/Profile.css'
import stc from '../static/images/stc.jpg'

export const Profile = () => {




   return (
      <div  id='profile' className='profile'>
         <h1>\Profile/</h1>
         <p className='imgProfile'><img src={stc} alt="" /></p>
         <h2>osamu</h2>
         <p className='text'>北海道大学　情報エレクトロニクス学科　メディアネットワークコース２年。２年の夏にプログラミングの勉強を始めて現在はWeb制作を実践中。１年の夏休みアニメを見始めて最近は毎日みてます。</p>
      </div>
   )
}

export default Profile

