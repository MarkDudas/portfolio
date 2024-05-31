import './Header.css';
import { Link } from 'react-router-dom';



const Header = () => {
 
  return (
    <div className='header-container'>
       <Link to='/'>
         <h1 className='logo'>Markki</h1>
       </Link>
    
      <div className='list-container'>
        <ul className='nav-list'>
          {/* <Link to='/about'>
            <li>About</li>
          </Link>
          <Link to='/contact'>
            <li>Contact</li>
          </Link>
          
          <Link to='/cars'>
            <li>Cars</li>
          </Link> */}
          <li><a href="#skills">Skills/Experiences</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </div>
      
    </div>
    
  );
}

export default Header;
