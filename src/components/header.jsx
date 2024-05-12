import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
  const headerStyle = {
    backgroundColor:bgColor,
    color:textColor
  }
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{ text}</h2>
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