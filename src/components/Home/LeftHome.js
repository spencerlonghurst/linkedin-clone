import React from 'react'
import Avatar from '@mui/material/Avatar';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import '../../styles/LeftHome.css'

function LeftHome() {
  return (
    <div className='left_home'>
      <div className='left_top'>
        <div className='left_images'>
          <img src='https://media-exp2.licdn.com/dms/image/C5616AQFjtzNNJPvQiQ/profile-displaybackgroundimage-shrink_200_800/0/1638220103110?e=1660780800&v=beta&t=gpnQUxKoWncaVq9FQ0SL2O--PQ7HisoOBUB1rpOd_eI' alt='cover'/>
          <div className='left_avatar'>
            <Avatar className='left_images_avatar' src='https://media-exp2.licdn.com/dms/image/D4E35AQH9q2RXkLC18w/profile-framedphoto-shrink_100_100/0/1652462716437?e=1656025200&v=beta&t=7FWolyM3e2jSp7TMnnsQ_cGviUaefH0wh66B6arq87k'/>
          </div>
        </div>
        <div className='left_data'>
          <h2>Spencer Longhurst</h2>
          <p>Full Stack Web Developer | Software Engineer</p>
        </div>
        <div className='left_stats'>
          <div className='left_stats_top'>
            <div className='left_stats_top_inner'>
            <p>Who's viewed your profile</p>
            <p className='stat_number'>100</p>
            </div>
          </div>
          <div className='left_stats_bottom'>
            <div className='left_stats_bottom_inner'>
            <div className='stats_connections'>
              <p>Connections</p>
              <p className='stat_number'>143</p>
            </div>
            <div>
              {/* <p className='grow'>Grow your network</p> */}
            </div>
            </div>
          </div>
        </div>
        <div>
          <p className='my_items'><BookmarkIcon className='my_items_bookmark'/> My Items</p>
        </div>
      </div>
      <div className='left_bottom'>
          <p className='left_bottom_item groups'>Groups</p>
          <p className='left_bottom_item'>Events</p>
          <p className='left_bottom_item hastags'>Followed Hashtags</p>
        <div className='left_bottom_bottom'>
          <p className='discover_more'>Discover more</p>
        </div>
      </div>

    </div>
  )
}

export default LeftHome