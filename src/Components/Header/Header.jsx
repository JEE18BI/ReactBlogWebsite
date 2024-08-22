import Avatar from '../Avatar/Avatar.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './Header.css';
const Header = ({src}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const MobileNavBarHandler = ()=>{
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className="Header">
      <li className="NavBar">
      
        <ul>Home</ul>
        <ul>Profile</ul>
        <ul>My Comments</ul>
        <ul>Login</ul>
      
      </li>
      <div className="MobileNavBar">
     <li>
     <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} color='white'style={{ color: 'white', fontSize: '40px' }} onClick={MobileNavBarHandler}/>
     </li>
      </div>
      <Avatar src={src}/>
    </div>
  )
}

export default Header
