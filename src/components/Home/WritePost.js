import React from 'react'
import '../../styles/WritePost.css'
import Avatar from '@mui/material/Avatar';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';

function WritePost() {
  return (
    <div className='write_post'>
      <div className='post_input_parent'>
        <Avatar className='post_input_avatar' src='https://avatars.githubusercontent.com/u/94577635?v=4'/>
        <input className='post_input' type='text' placeholder='Start a post about a topic that excites you'/>
      </div>
      <div className='write_post_options'>
        <div className='write_post_option'>
          <PhotoSizeSelectActualIcon className='write_post_icon photo_icon' />
          <p className='write_post_word'>Photo</p>
        </div>
        <div className='write_post_option'>
          <YouTubeIcon className='write_post_icon video_icon' />
          <p className='write_post_word'>Video</p>
        </div>
        <div className='write_post_option'>
          <EventIcon className='write_post_icon event_icon' />
          <p className='write_post_word'>Event</p>
        </div>
        <div className='write_post_option'>
          <ArticleIcon className='write_post_icon_article article_icon'/>
          <p className='write_post_word article'>Write article</p>
        </div>
      </div>
    </div>
  )
}

export default WritePost