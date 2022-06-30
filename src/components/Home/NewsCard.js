import React from 'react'
import '../../styles/NewsCard.css'

function NewsCard({ title, subtitle }) {
  return (
    <div className='newscard'>
        <li className='newscard_title'>{title}</li>
        <p className='newscard_subtitle'>{subtitle}</p>
    </div>
  )
}

export default NewsCard