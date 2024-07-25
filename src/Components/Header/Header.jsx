
import './Header.css';
import Avatar from '../Avatar/Avatar.jsx'
const Header = () => {
  return (
    <div className="Header">
      <li className="NavBar">
      
        <ul>Home</ul>
        <ul>About</ul>
        <ul>Services</ul>
        <ul>Contact</ul>
      
      
      </li>
      <Avatar/>
    </div>
  )
}

export default Header
