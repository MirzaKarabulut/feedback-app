import React from 'react'
import Card
  from '../components/shared/Card'
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>This is about page</h1>
          <p>
          This is a simple feedback app built with ReactJs.
        </p>
      </div>
    </Card>
  )
}

export default AboutPage