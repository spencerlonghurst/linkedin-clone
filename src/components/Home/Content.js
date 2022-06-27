import React from 'react'
import '../../styles/Content.css'
import ContentCard from './ContentCard'

function Content() {
  return (
    <div className='content'>
      <ContentCard 
        image='https://media-exp2.licdn.com/dms/image/C4D0BAQFY3BGhoMwEEA/company-logo_200_200/0/1626195279622?e=1664409600&v=beta&t=aDMV86Socv7bm8G4pRNrGtIkxb2MTfUQp1brjoAXu3s'
        name='Github'
        title='2,609,052 followers'
        timestamp='6d'
        content='GitHub Copilot helps you get better focus and build faster by instantly suggesting code—and is now available for developers everywhere.

        https://lnkd.in/gAaVpRpi'
      />
    </div>
  )
}

export default Content