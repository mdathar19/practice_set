import React from 'react';
import './global.css'
import useGlobalContext from './context/useGlobalContext';
import {RxCross1} from 'react-icons/rx'

const style = {
    Icon : {position:'absolute',right:'40px',top:'20px',fontSize:'3rem',cursor:'pointer',color:'white'}
}


function GlobalModal({component}) {

    const {modalActive,setModalActive} = useGlobalContext();


    console.log("data",modalActive)

  return (
    <div className='vh-100  vw-100 globalModal' style={modalActive?{display:'flex'}:{display:'none'}}>
        <RxCross1 style={style.Icon} onClick={()=>setModalActive(!modalActive)}/>
        {component}
    </div>
  )
}

export default GlobalModal
