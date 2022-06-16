import React from 'react'
import Avatar from '@mui/material/Avatar';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function LeftHome() {
  return (
    <div className='left_home'>
      <div className='left_top'>
        <div className='left_images'>
          <img src='https://media-exp2.licdn.com/dms/image/C5616AQFjtzNNJPvQiQ/profile-displaybackgroundimage-shrink_200_800/0/1638220103110?e=1660780800&v=beta&t=gpnQUxKoWncaVq9FQ0SL2O--PQ7HisoOBUB1rpOd_eI' alt='cover'/>
          <Avatar />
        </div>
        <div className='left_data'>
          <h2>Spencer Longhurst</h2>
          <p>Full Stack Web Developer | Software Engineer</p>
        </div>
        <div className='left_stats'>
          <div className='left_stats_top'>
            <p>Who's viewed your profile</p>
            <p>100</p>
          </div>
          <div className='left_stats_bottom'>
            <p>Connecttions</p>
            <p>143</p>
            <p>Grow your network</p>
          </div>
        </div>
        <div>
          <p><BookmarkIcon/> My Items</p>
        </div>
      </div>
      <div className='left_bottom'>
        <div>
          <p>Groups</p>
        </div>
        <div>
          <p>Events</p>
          <p>+</p>
        </div>
        <div>
          <p>Followed Hashtags</p>
        </div>
        <div className='left_bottom_bottom'>
          <p>Discover more</p>
        </div>
      </div>

    </div>
  )
}

export default LeftHome