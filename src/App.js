import React from "react";
import Header from "./components/header";
import FeedbackList from "./components/feedbackList";
import { useState } from "react";
import feedbackData from "./data/feedbackData";
import FeedbackStats from "./components/feedbackStats";
import FeedbackForms from "./components/feedbackForms";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  const deleteFeedback = (id) => { 
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter((item)=> item.id !== id))
    }
  }
  return (
    <>
    < Header />
      <div className="container">
        <FeedbackForms />
        <FeedbackStats feedback={ feedback} />
      < FeedbackList feedback = {feedback} handleDelete={deleteFeedback} />
    </div>
    </>
  );
}

export default App;
