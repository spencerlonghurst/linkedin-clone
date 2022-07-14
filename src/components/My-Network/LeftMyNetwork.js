import React from 'react'
import './styles/LeftMyNetwork.css';
import { Link } from "react-router-dom";

function LeftMyNetwork() {
  return (
    <div className='left_my_network'>
      <h2>Manage my network</h2>
      <Link to='/connections' className='network_button'>
        <div>
          <p>Connections</p>
        </div>
      </Link>
      <Link to='/contacts' className='network_button'>
        <div>
          <p>Contacts</p>
        </div>
      </Link>
      <Link to='/following' className='network_button'>
        <div>
            <p>People | Follow</p>
        </div>
      </Link>
      <Link to='/groups' className='network_button'>
        <div>
            <p>Groups</p>
        </div>
      </Link>
      <Link to='/events' className='network_button'>
        <div>
          <p>Events</p>
        </div>
      </Link>
      <Link to='/pages' className='network_button'>
        <div>
          <p>Pages</p>
        </div>
      </Link>
      <Link to='/newsletters' className='network_button'>
        <div>
          <p>Newsletters</p>
        </div>
      </Link>
      <Link to='/hastags' className='network_button'>
        <div>
          <p>Hashtags</p>
        </div>
      </Link>
    </div>
  )
}

export default LeftMyNetwork