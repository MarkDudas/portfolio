import Preview from '../../assets/preview-capstone.png';
import { Link } from 'react-router-dom';
import Cbs from '../../assets/cbs-preview.png'
const Projects = () => {
  return (
    <div className="h-100% p-5 mb-30">
      <div className='flex flex-col justify-center items-center'>
        <h1 className='mb-2 font-bold'>Projects:</h1>
        <div className='flex space-x-4  '>
                <Link to='https://para-agency.vercel.app/'>
                    <img className="h-28 mr-4 max-md:h-20" src={Preview}></img>
                </Link>
                <Link to='https://cbs-info-final-project.onrender.com/login'>
                    <img className="h-28 max-md:h-20" src={Cbs}></img>
                </Link>
        </div>
      </div>
    
    </div>
  )
}

export default Projects
