import React from 'react'
import PropTypes from 'prop-types'

function feedbackStats({ feedback }) {
  let averageRating = feedback.reduce((acc, item) => acc + item.rating, 0) / feedback.length;
  averageRating = averageRating.toFixed(1).replace(/\.0$/, '');
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Feedback</h4>
      <h4>Average rating: {isNaN(averageRating) ? 0 : averageRating}</h4>
    </div>
  )
}

feedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired
}

export default feedbackStats