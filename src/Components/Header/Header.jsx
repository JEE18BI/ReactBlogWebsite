import Avatar from '../Avatar/Avatar.jsx'
import './Header.css';
const Header = ({src}) => {

  return (
    <div className="Header">
      <li className="NavBar">
      
        <ul>Home</ul>
        <ul>About</ul>
        <ul>Services</ul>
        <ul>Contact</ul>
      
      
      </li>
      <Avatar src={src}/>
    </div>
  )
}

export default Header
