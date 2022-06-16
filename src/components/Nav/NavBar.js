import React from 'react';
import '../../styles/NavBar.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import SmsRoundedIcon from '@mui/icons-material/SmsRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import Avatar from '@mui/material/Avatar';

function NavBar() {
  return (
    <div className='nav_bar'>
      <div className='left_nav'>
        <LinkedInIcon className='linkedin_icon'/>
        <input type='text' placeholder='Search'/>
      </div>
      <div className='right_nav'>
        <div className='nav_button home'>
          <HomeRoundedIcon />
          <p className='nav_words'>Home</p>
        </div>
        <div className='nav_button my_network'>
          <PeopleAltRoundedIcon />
          <p className='nav_words'>My Network</p>
        </div>
        <div className='nav_button jobs'>
          <WorkRoundedIcon />
          <p className='nav_words'>Jobs</p>
        </div>
        <div className='nav_button messaging'>
          <SmsRoundedIcon />
          <p className='nav_words'>Messaging</p>
        </div>
        <div className='nav_button notifications'>
          <NotificationsRoundedIcon />
          <p className='nav_words'>Notifications</p>
        </div>
        <div className='nav_button me'>
          <Avatar />
          <p className='nav_words'>Me</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar