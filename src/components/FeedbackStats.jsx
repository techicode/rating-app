import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  // calculate average ratings
  let average =
    feedback.reduce((sum, item) => sum + item.rating, 0) / feedback.length;

  // remove decimal if number end in 0 ex 8.0 ---> 8
  average = average.toFixed(1).replace(/\.0$/, '');

  return (
    <div className="flex justify-evenly p-5">
      <h2>{feedback.length} Reviews</h2>
      <div>
        <h3>Average rating: {isNaN(average) ? '0' : average}</h3>
      </div>
    </div>
  );
}

export default FeedbackStats;
