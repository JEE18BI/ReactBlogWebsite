import './Header.css';
import Avatar from '../Avatar/Avatar.jsx'
import img1 from '../../Images/AlyHany.jpg';
const Header = () => {
  return (
    <div className="Header">
      <li className="NavBar">
      
        <ul>Home</ul>
        <ul>About</ul>
        <ul>Services</ul>
        <ul>Contact</ul>
      
      
      </li>
      <Avatar src={img1}/>
    </div>
  )
}

export default Header
