import {FaQuestion} from 'react-icons/fa';
import {Link} from 'react-router-dom';

function AboutIconLink() {
  return (
    <div className='flex justify-center mt-10'>
      <Link to="/about">
      <FaQuestion size={30} className='hover:text-pink-500'/>
      </Link>
    </div>

  )
}

export default AboutIconLink
