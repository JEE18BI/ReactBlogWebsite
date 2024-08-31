import Avatar from '../Avatar/Avatar.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link , useLocation} from 'react-router-dom';
import './Header.css';
const Header = ({src}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const MobileNavBarHandler = ()=>{
    setIsMenuOpen(!isMenuOpen);
  }
  const location = useLocation();
  return (
    <div className="Header">
      <div className="DesktopNav">
      <li className="NavBar">
      <Link to="/" className={location.pathname === '/' ? 'active-link LinkStyle' : 'LinkStyle'}> Home </Link>
      {/* <Link to="/Profile" className={location.pathname === '/Profile' ? 'active-link LinkStyle' : 'LinkStyle'}> Profile </Link> */}
      <Link to="/MyComments" className={location.pathname === '/MyComments' ? 'active-link LinkStyle' : 'LinkStyle'}> My Comments </Link>
      <Link to="/Login" className={location.pathname === '/Login' ? 'active-link LinkStyle' : 'LinkStyle'}> Login </Link>
      </li>
      <Avatar src={src}/>
      </div>
      <div className="MobileHeader">
      <div className="MobileNavBar">
     <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} color='white'style={{ color: 'white', fontSize: '30px'}} onClick={MobileNavBarHandler}/>
      <Avatar src={src}/>
      </div>
      {isMenuOpen && <div className="MobileNav">
      <li>
      <Link to="/" className={location.pathname === '/' ? 'active-link LinkStyle' : 'LinkStyle'}> Home </Link>
      {/* <Link to="/Profile" className={location.pathname === '/Profile' ? 'active-link LinkStyle' : 'LinkStyle'}> Profile </Link> */}
      <Link to="/MyComments" className={location.pathname === '/MyComments' ? 'active-link LinkStyle' : 'LinkStyle'}> My Comments </Link>
      <Link to="/Login" className={location.pathname === '/Login' ? 'active-link LinkStyle' : 'LinkStyle'}> Login </Link>
      </li>
      </div>}
    </div>
    </div>
  )
}

export default Header
