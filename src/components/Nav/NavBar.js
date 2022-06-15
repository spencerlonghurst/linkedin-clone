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
        <div>
          <HomeRoundedIcon />
          <p>Home</p>
        </div>
        <div>
        <PeopleAltRoundedIcon />
        <p>My Network</p>
        </div>
        <div>
        <WorkRoundedIcon />
        <p>Jobs</p>
        </div>
        <div>
        <SmsRoundedIcon />
        <p>Messaging</p>
        </div>
        <div>
        <NotificationsRoundedIcon />
        <p>Notifications</p>
        </div>
        <div>
        <Avatar />
        <p>Me</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar