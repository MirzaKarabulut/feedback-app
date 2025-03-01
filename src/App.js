import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import FeedbackList from "./components/feedbackList";
import FeedbackStats from "./components/feedbackStats";
import FeedbackForms from "./components/feedbackForms";
import AboutPage from "./pages/aboutPage";
import AboutIconLink from "./components/aboutIconLink";
import { FeedbackProvider } from "./context/feedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForms />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
