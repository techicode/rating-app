import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

import { FaTimes, FaEdit } from 'react-icons/fa';
import Card from './shared/Card';

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="text-5xl p-2 bg-gray-800 rounded-full -translate-x-11">{item.rating}</div>
      <div className="text-base -translate-x-5 ">{item.text}</div>
      <div className="flex">
      <button className='h-min p-2 bg-gray-800 rounded-full' onClick={() => editFeedback(item)}>
        <FaEdit color="purple" />
      </button>
      <button className='h-min p-2 bg-gray-800 rounded-full' onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="purple" />
      </button>
      </div>
    </Card>
  );
}

export default FeedbackItem;
