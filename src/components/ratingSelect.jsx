import React, { useState,useContext,useEffect } from 'react'
import FeedbackContext from '../context/feedbackContext';

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10)
  const {editFeedback} = useContext(FeedbackContext);
 
  useEffect(() => {
    if (editFeedback.edit) {
      setSelected(editFeedback.item.rating);
    }
  }, [editFeedback]);

  const handleChange = (num) => () => {
    //change string to number with +
    setSelected(num)
    select(num)
  }
 
  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
        <li key={num}>
          <input
            type='radio'
            id={`num${num}`}
            name='rating'
            onChange={handleChange(num)}
            checked={selected === num}
          />
          <label htmlFor={`num${num}`}>{`${num}`}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect