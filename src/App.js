import Header from "./components/header";
import FeedbackList from "./components/feedbackList";
import { useState } from "react";
import feedbackData from "./data/feedbackData";
function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  return (
    <>
    < Header />
    <div className="container">
      < FeedbackList feedback = {feedback} />
    </div>
    </>
  );
}

export default App;
