import React from 'react'
import './styles/MyNetwork.css';
import LeftMyNetwork from './LeftMyNetwork';
import RightMyNetwork from './RightMyNetwork';

function MyNetwork() {
  return (
    <div className='my_network'>
      <LeftMyNetwork />
      <RightMyNetwork />
    </div>
  )
}

export default MyNetwork