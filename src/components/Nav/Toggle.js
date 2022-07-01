import React from 'react'
import '../../styles/Toggle.css'

function Toggle({ toggled, onClick }) {
  return (
    <div onClick={onClick} className={`toggle ${toggled ? 'night' : ''}`}>
      <div className='toggle_notch'></div>
      <div>
        <div className='shape small'></div>
        <div className='shape small'></div>
        <div className='shape medium'></div>
        <div className='shape large'></div>
      </div>
    </div>
  )
}

export default Toggle