import React from "react";
import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is a great app 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This is a great app 2",
      rating: 9,
    },
    {
      id: 3,
      text: "This is a great app 3",
      rating: 8,
    },
  ]);
  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  });

  // Add a new feedback item
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // Delete a feedback item
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Set the feedback item to be edited
  const editFeedbackItem = (item) => {
    setEditFeedback({
      item,
      edit: true,
    });
  };

  // Update the feedback item
  const updateFeedback = (id, updateFeed) => {
    setFeedback(
      feedback.map((item) => {
        return item.id === id ? { ...item, ...updateFeed } : item;
      })
    );
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        editFeedback,
        addFeedback,
        deleteFeedback,
        editFeedbackItem,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
