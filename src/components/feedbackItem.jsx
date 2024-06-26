import { FaTimes,FaEdit } from "react-icons/fa"
import React from "react"
import Card from "./shared/Card"
import PropTypes from 'prop-types'
import {useContext} from 'react';
import FeedbackContext from '../context/feedbackContext';
 
function FeedbackItem({ item }) {
  const {deleteFeedback,editFeedbackItem} = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close">
        <FaTimes onClick={() => deleteFeedback(item.id)} color="purple"/>
      </button>
      <button onClick={() => editFeedbackItem(item)} className="edit">
        <FaEdit color="purple"/>
      </button>
        <div className="text-display">
          {item.text}
      </div>
    </Card>
  )
}
 

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}  

export default FeedbackItem