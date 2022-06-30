import React from 'react'
import '../../styles/RightHome.css';
import NewsCard from './NewsCard';

function RightHome() {
  return (
    <div className='right_home'>
      <div className='right_home_top'>
        <h2 className='right_home_title'>LinkedIn News</h2>
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
            title='Strong talent emerging from young coders'
            subtitle='16m • 10,453 readers'
          />
          <NewsCard 
            title='Why house-flipping is flopping'
            subtitle='26m • 126 readers'
          />
        </ul>
      </div>

      <div className='right_home_bottom'>
        <div className='small_text'>
          <div className='small_text_line'>
            <p>About</p>
            <p>Accessibility</p>
            <p>Help Center</p>
          </div>
          <div className='small_text_line'>
            <p>Privacy & Terms</p>
            <p>Ad Choices</p>
          </div>
          <div className='small_text_line'>
            <p>Advertising</p>
            <p>Business Services</p>
          </div>
          <div className='small_text_line'>
            <p>Get the LinkedIn app</p>
            <p>More</p>
          </div>
        </div>
          <p className='developed_by'>Developed by Spencer Longhurst - 2022</p>
      </div>
    </div>
  )
}

export default RightHome