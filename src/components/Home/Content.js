import React from 'react'
import '../../styles/Content.css'
import ContentCard from './ContentCard'

function Content() {
  return (
    <div className='content'>
      <hr className='content_horizontal_line'/>
      <ContentCard 
        image='https://media-exp2.licdn.com/dms/image/C4D0BAQFY3BGhoMwEEA/company-logo_200_200/0/1626195279622?e=1664409600&v=beta&t=aDMV86Socv7bm8G4pRNrGtIkxb2MTfUQp1brjoAXu3s'
        name='Github'
        title='2,609,052 followers'
        timestamp='6d'
        connection='1st'
        content='GitHub Copilot helps you get better focus and build faster by instantly suggesting code—and is now available for developers everywhere.'
        contentPhoto={'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb'}
      />
       <ContentCard 
        image='https://media-exp2.licdn.com/dms/image/C4D0BAQFY3BGhoMwEEA/company-logo_200_200/0/1626195279622?e=1664409600&v=beta&t=aDMV86Socv7bm8G4pRNrGtIkxb2MTfUQp1brjoAXu3s'
        name='Github'
        title='2,609,052 followers'
        timestamp='6d'
        connection='1st'
        content='GitHub Copilot helps you get better focus and build faster by instantly suggesting code—and is now available for developers everywhere.'
        contentPhoto={'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb'}
      />
       <ContentCard 
        image='https://media-exp2.licdn.com/dms/image/C4D0BAQFY3BGhoMwEEA/company-logo_200_200/0/1626195279622?e=1664409600&v=beta&t=aDMV86Socv7bm8G4pRNrGtIkxb2MTfUQp1brjoAXu3s'
        name='Github'
        title='2,609,052 followers'
        timestamp='6d'
        connection='1st'
        content='GitHub Copilot helps you get better focus and build faster by instantly suggesting code—and is now available for developers everywhere.'
        contentPhoto={'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb'}
      />
    </div>
  )
}

export default Content
// image, name, title, connection, timestamp, content, contentPhoto