import React from 'react';
import '../../styles/NavBar.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import SmsRoundedIcon from '@mui/icons-material/SmsRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className='nav_bar'>
      <Link to='/'>
        <div className='left_nav'>
          <LinkedInIcon className='linkedin_icon'/>
          <input type='text' placeholder='Search'/>
        </div>
      </Link>
      <div className='right_nav'>
      <Link to='/' className='nav_button home'>
        <div>
          <HomeRoundedIcon />
          <p className='nav_words'>Home</p>
        </div>
      </Link>
      <Link to='mynetwork' className='nav_button my_network'>
        <div>
          <PeopleAltRoundedIcon />
          <p className='nav_words'>My Network</p>
        </div>
      </Link>
      <Link to='jobs' className='nav_button jobs'>
        <div>
          <WorkRoundedIcon />
          <p className='nav_words'>Jobs</p>
        </div>
      </Link>
      <Link to='messaging' className='nav_button messaging'>
        <div>
          <SmsRoundedIcon />
          <p className='nav_words'>Messaging</p>
        </div>
      </Link>
      <Link to='notifications' className='nav_button notifications'>
        <div>
          <NotificationsRoundedIcon />
          <p className='nav_words'>Notifications</p>
        </div>
      </Link>
        <div className='nav_button me'>
          <Avatar />
          <p className='nav_words'>Me</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar