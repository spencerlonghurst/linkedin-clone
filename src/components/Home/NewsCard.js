import React from 'react'

function NewsCard({ title, subtitle }) {
  return (
    <div>
        <li>{title}</li>
        <p>{subtitle}</p>
    </div>
  )
}

export default NewsCard