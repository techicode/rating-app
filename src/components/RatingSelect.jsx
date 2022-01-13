import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';


function RatingSelect({select}) {
  const [selected, setSelected] = useState(10);
  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit])

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  }

  return (
    <div className="flex justify-center space-x-2">
      <div className="form-check form-check-inline">
        <input
          className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name="inlineRadioOptions"
          id="num1"
          value="1"
          onChange={handleChange}
          checked={selected === 1}
        />
        <label
          className="form-check-label inline-block text-gray-800"
          htmlFor="num1"
        >
          1
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name="inlineRadioOptions"
          id="num2"
          value="2"
          onChange={handleChange}
          checked={selected === 2}
        />
        <label
          className="form-check-label inline-block text-gray-800"
          htmlFor="num2"
        >
          2
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name="inlineRadioOptions"
          id="num3"
          value="3"
          onChange={handleChange}
          checked={selected === 3}
        />
        <label
          className="form-check-label inline-block text-gray-800"
          htmlFor="num3"
        >
          3
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name="inlineRadioOptions"
          id="num4"
          value="4"
          onChange={handleChange}
          checked={selected === 4}
        />
        <label
          className="form-check-label inline-block text-gray-800"
          htmlFor="num4"
        >
          4
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name="inlineRadioOptions"
          id="num5"
          value="5"
          onChange={handleChange}
          checked={selected === 5}
        />
        <label
          className="form-check-label inline-block text-gray-800"
          htmlFor="num5"
        >
          5
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name="inlineRadioOptions"
          id="num6"
          value="6"
          onChange={handleChange}
          checked={selected === 6}
        />
        <label
          className="form-check-label inline-block text-gray-800"
          htmlFor="num6"
        >
          6
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name="inlineRadioOptions"
          id="num7"
          value="7"
          onChange={handleChange}
          checked={selected === 7}
        />
        <label
          className="form-check-label inline-block text-gray-800"
          htmlFor="num7"
        >
          7
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name="inlineRadioOptions"
          id="num8"
          value="8"
          onChange={handleChange}
          checked={selected === 8}
        />
        <label
          className="form-check-label inline-block text-gray-800"
          htmlFor="num8"
        >
          8
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name="inlineRadioOptions"
          id="num9"
          value="9"
          onChange={handleChange}
          checked={selected === 9}
        />
        <label
          className="form-check-label inline-block text-gray-800"
          htmlFor="num9"
        >
          9
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name="inlineRadioOptions"
          id="num10"
          value="10"
          onChange={handleChange}
          checked={selected === 10}
        />
        <label
          className="form-check-label inline-block text-gray-800"
          htmlFor="num10"
        >
          10
        </label>
      </div>
    </div>
  );
}

export default RatingSelect;
