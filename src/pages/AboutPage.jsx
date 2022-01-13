import Card from '../components/shared/Card';
import {Link} from 'react-router-dom';


function AboutPage() {
  return (
    <Card>
      <div className=" justify-center space-x-2 ">
        <h2>About this project</h2>
        <p>This is a React app to leave feedback for a product </p>
        <p>Version: 0.0.0.1</p>

        <div className='underline decoration-amber-400'>
          <Link to="/">Back to home</Link>
        </div>
      </div>
    </Card>
  );
}

export default AboutPage;
