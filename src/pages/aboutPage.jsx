import React from 'react'
import Card
  from '../components/shared/Card'
import { Link } from 'react-router-dom'
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>This is about page</h1>
          <p>
          This is a simple feedback app built with ReactJs.
        </p>
        <p> 
          <Link to="/" style={{textDecorationLine: 'none', color: 'purple'}}>Back to home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage