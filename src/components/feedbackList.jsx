import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./feedbackItem";
import {useContext} from 'react';
import FeedbackContext from '../context/feedbackContext';
 
function FeedbackList() {
  const {feedback} = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }
 
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            <FeedbackItem
              key={item.id}
              item={item}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;