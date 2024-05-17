import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Header({ text, bgColor, textColor }) {
  const headerStyle = {
    backgroundColor:bgColor,
    color:textColor
  }
  return (
    <header style={headerStyle}>
      <div className="container">
        <Link to='/' style={{ textDecoration: 'none' ,color:textColor}}>
          <h2>{text}</h2>
        </Link>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: 'rgba(0,0,0,0.4)', // Update property name to backgroundColor
  textColor: '#ff6a95' // Update property name to color
}

Header.propTypes = {
  text: PropTypes.string,
  backgroundColor: PropTypes.string, // Update property name to backgroundColor
  color: PropTypes.string // Update property name to color
}

export default Header