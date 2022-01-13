import { motion, AnimatePresence } from 'framer-motion';
import { useContext} from 'react';

import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
  const {feedback} = useContext(FeedbackContext);

  if (feedback.length === 0 || !feedback) {
    return (
      <div className="text-center">
        <h2 className="text-2xl">No feedback yet.</h2>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div 
          key={item.id}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          >
            <FeedbackItem
              key={item.id}
              item={item}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );


}

export default FeedbackList;
