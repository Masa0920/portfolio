import React, { useState, useEffect } from 'react'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import '../static/css/MoreBotton.css'

const Morebutton = (props) => {
   const [isOpen, setOpen] = useState(false)
   const [number, setNumber] = useState(1)
   const [text, setText] = useState('')
   


   const hoge = () => {
      setText(text + 'w')
   }

   // ComponentDidMountと同じ
   // useEffect(hoge,[])

   const handleClose = () => setOpen(false)
   
   const handleOpen = () => {
      // console.log('open!')
      setOpen(true)
      setNumber(number + 1)
   }

   return (
      <div>
         <p className='morebox' style={{backgroundColor:'violet',color:'white',cursor:'pointer'}} onClick={handleOpen}>more</p>
         <p>{text}</p>
         <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className=''
            open={isOpen}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
               timeout: 500,
            }}
            style={styles.modal}
            >
            <Fade in={isOpen}>
               <div className='modalcontainer'>
                  <h2 >{props.h2}</h2>
                  <p >{props.desc}</p>
               </div>
            </Fade>
         </Modal>
      </div>
   )
}

export default Morebutton


const styles = {
   modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // border: '3px solid green',
      backgroundColor: 'rgba(0,0,0,0.5)'
   }
}