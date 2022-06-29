import React from 'react'
import '../../styles/ContentCard.css'
import Avatar from '@mui/material/Avatar';

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
    </div>
  )
}

export default ContentCard