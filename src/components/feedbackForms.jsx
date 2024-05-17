import React from "react";  
import { useState } from 'react';
import Card from "./shared/Card";
import Button from "./shared/button";
import RatingSelect from "./ratingSelect";

function FeedbackForms({ handleAdd}) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("At least 10 characters required");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        rating,
        text
      };
      handleAdd(newFeedback);
      setText("");
    }
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
      <h2>Can you share your feedback about your service with us?</h2>
      <RatingSelect select={(rating) => console.log(rating)} />
      <div className="input-group">
        <input
          onChange={handleTextChange}
          type="text"
          placeholder="Write a review"
          value={text}
          />
        <Button type="submit" isDisabled={btnDisabled}>
          Send
        </Button>
      </div>
      {message && <div className="message">{message}</div>}
          </form>
    </Card>
  );
}

export default FeedbackForms;
