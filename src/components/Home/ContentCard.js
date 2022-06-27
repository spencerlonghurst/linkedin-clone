import React from 'react'
import '../../styles/ContentCard.css'
import Avatar from '@mui/material/Avatar';

function ContentCard({ image, name, title, connection, timestamp, content }) {
  return (
    <div className='content_card'>
      <div>
        <div>
          <Avatar src={image}/>
        </div>
        <div>
          {name} • {connection}
          {title}
          {timestamp}
        </div>
      </div>
      {content}
    </div>
  )
}

export default ContentCard