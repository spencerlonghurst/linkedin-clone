import React, { useState } from 'react';
import '../../styles/NavBar.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import SmsRoundedIcon from '@mui/icons-material/SmsRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import Avatar from '@mui/material/Avatar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from "react-router-dom";
import Toggle from './Toggle';

import useLocalStorageState from 'use-local-storage-state';

function NavBar() {
  const [toggled, setToggled] = useState(false)
  const handleClick = () => {
    setToggled(s => !s)
  }

  const [theme, setTheme] = useLocalStorageState('theme' ? 'dark' : 'light')
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (

    <div className='nav_bar' data-theme={theme}>

      <Link to='/'>
        <div className='left_nav'>
          <LinkedInIcon className='linkedin_icon'/>
          <input className='nav_searchbar' type='text' placeholder='Search'/>
        </div>
      </Link>

      <div className='middle_nav'>
        <Link to='/' className='nav_button feed'>
          <div>
            <HomeRoundedIcon className='nav_icon'/>
            <p className='nav_words'>Home</p>
          </div>
        </Link>
        <Link to='mynetwork' className='nav_button'>
          <div>
            <PeopleAltRoundedIcon className='nav_icon' />
            <p className='nav_words'>My Network</p>
          </div>
        </Link>
        <Link to='jobs' className='nav_button jobs'>
          <div>
            <WorkRoundedIcon className='nav_icon' />
            <p className='nav_words'>Jobs</p>
          </div>
        </Link>
        <Link to='messaging' className='nav_button messaging'>
          <div>
            <SmsRoundedIcon className='nav_icon' />
            <p className='nav_words'>Messaging</p>
          </div>
        </Link>
        <Link to='notifications' className='nav_button notifications'>
          <div>
            <NotificationsRoundedIcon className='nav_icon' />
            <p className='nav_words'>Notifications</p>
          </div>
        </Link>
        <div className='nav_button me'>
          <Avatar className='nav_avatar' src='https://avatars.githubusercontent.com/u/94577635?v=4'/>
          <p className='nav_words'>Me <ArrowDropDownIcon className='nav_icon_arrow'/></p>
        </div>
      </div>

      <div className='right_nav'>
        <Toggle toggled={toggled} onClick={() => {
          handleClick(); switchTheme()}} />
      </div>
    </div>
  )
}

export default NavBar