import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import FeedbackList from "./components/feedbackList";
import { useState } from "react";
import feedbackData from "./data/feedbackData";
import FeedbackStats from "./components/feedbackStats";
import FeedbackForms from "./components/feedbackForms";
import { v4 as uuidv4 } from "uuid";
import AboutPage from "./pages/aboutPage";
import AboutIconLink from "./components/aboutIconLink";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  const deleteFeedback = (id) => { 
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter((item)=> item.id !== id))
    }
  }
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback])
  } 
  return (
    <Router>
    < Header />
      <div className="container">
      <Routes>
          <Route exact path="/" element={
            <>    
              <FeedbackForms handleAdd={addFeedback} />
              <FeedbackStats feedback={ feedback} />
            < FeedbackList feedback = {feedback} handleDelete={deleteFeedback} />
            </>
          }>
          </Route>
            <Route path="/about" element={<AboutPage/>} /> 
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;
