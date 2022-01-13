import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';

import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);

  const [btnDisabled, setBtnDisabled] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit) {
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
      setBtnDisabled(false);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
    } else if (text.trim().length < 10) {
      setBtnDisabled(true);
      setErrorMsg('Please enter at least 10 characters');
    } else {
      setBtnDisabled(false);
      setErrorMsg('');
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <div className="mb-1">
          <label
            className="text-gray-100 text-sm font-bold mb-2"
            htmlFor="username"
          >
            What do you thing about this product?
          </label>
          <input
            onChange={handleTextChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Write a review"
            value={text}
          ></input>
          <label
            className="text-gray-100 text-sm font-bold mb-2"
            htmlFor="select"
          >
            How you would rate your service with us?
          </label>
          <RatingSelect id="select" select={(rating) => setRating(rating)} />
          <div className="flex justify-center">
            <Button type="submit" isDisabled={btnDisabled}>
              Rate!
            </Button>
          </div>
        </div>
        {errorMsg && <p className="text-red-800 text-md italic">{errorMsg}</p>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
