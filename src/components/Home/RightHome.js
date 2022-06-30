import React from 'react'
import '../../styles/RightHome.css';
import NewsCard from './NewsCard';

function RightHome() {
  return (
    <div className='right_home'>
      <h2>LinkedIn News</h2>
      <ul>
      <NewsCard 
        title='Bootcamp grads rush to the job search'
        subtitle='9m • 2,453 readers'
      />
      <NewsCard 
        title='Tesla Model S reaches 200 MPH'
        subtitle='14m • 8,453 readers'
      />
      <NewsCard 
        title='Cities need public sector workers'
        subtitle='14m • 380 readers'
      />
      <NewsCard 
        title='Strong talen emerging from young coders'
        subtitle='16m • 10,453 readers'
      />
      <NewsCard 
        title='Why house-flipping is flopping'
        subtitle='26m • 126 readers'
      />
      </ul>
    </div>
  )
}

export default RightHome