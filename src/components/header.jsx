function header({ text}) {
  return (
    <header>
      <div className="container">
        <h2>{ text}</h2>
      </div>
    </header>
  )
}

header.defaultProps = {
  text: "Feedback UI"
}

export default header