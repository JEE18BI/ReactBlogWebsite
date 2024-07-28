import Img from '../../Images/Person-Placeholder.png';
import './Avatar.css';
const Avatar = ({src}) => {
  return (
    <>
       <img className="CommentImage" src={src ? src :Img} alt="image1"/>
  
    </>
  )
}

export default Avatar
