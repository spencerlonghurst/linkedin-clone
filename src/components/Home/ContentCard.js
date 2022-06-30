import React from 'react'
import '../../styles/ContentCard.css'
import Avatar from '@mui/material/Avatar';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MessageIcon from '@mui/icons-material/Message';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SendIcon from '@mui/icons-material/Send';

function ContentCard({ image, name, title, connection, timestamp, content, contentPhoto }) {
  return (
    <div className='content_card'>
      <div className='content_info'>
        <div>
          <Avatar className='content_avatar' src={image}/>
        </div>
        <div className='content_details'>
          <div className='content_intro'>
            <p className='content_name'>{name}</p>
            <p className='content_connection'> • {connection}</p>
          </div>
          <p className='content_title'>{title}</p>
          <p className='content_timestamp'>{timestamp}</p>
        </div>
      </div>
      <p className='content_data'>{content}</p>
      <img className='content_photo' src={contentPhoto}  alt='contentPhoto'/>

      <div className='content_interaction'>
        <p className='content_icon_button'><ThumbUpIcon className='content_icon'/>Like</p>
        <p className='content_icon_button'><MessageIcon className='content_icon'/>Comment</p>
        <p className='content_icon_button'><ArrowForwardIcon className='content_icon'/>Share</p>
        <p className='content_icon_button'><SendIcon className='content_icon'/>Send</p>
      </div>
    </div>
  )
}

export default ContentCard