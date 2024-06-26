import React from 'react';
import {useContext} from 'react';
import FeedbackContext from '../context/feedbackContext';

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext);
  let averageRating = feedback.reduce((acc, item) => acc + item.rating, 0) / feedback.length;
  averageRating = averageRating.toFixed(1).replace(/\.0$/, '');
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Feedback</h4>
      <h4>Average rating: {isNaN(averageRating) ? 0 : averageRating}</h4>
    </div>
  )
}
export default FeedbackStats