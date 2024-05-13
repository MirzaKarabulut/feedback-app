import React from "react";
import Header from "./components/header";
import FeedbackList from "./components/feedbackList";
import { useState } from "react";
import feedbackData from "./data/feedbackData";
function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  const deleteFeedback = (id) => { 
    console.log("app", id);
  }
  return (
    <>
    < Header />
    <div className="container">
      < FeedbackList feedback = {feedback} handleDelete={deleteFeedback} />
    </div>
    </>
  );
}

export default App;
