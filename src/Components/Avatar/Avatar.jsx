import MalePlaceholder from '../../Images/Male-Placeholder.png';
import FemalePlaceholder from '../../Images/Female-Placeholder.png';
import './Avatar.css';
const Avatar = ({src,Gender}) => {
  let Placeholder=MalePlaceholder;
  if(Gender==="F"){
    Placeholder=FemalePlaceholder;
  }
    return (
      <>
         <img className="CommentImage" src={src ? src :Placeholder} alt="Male Avatar"/>
    
      </>
    )
  
 
}

export default Avatar
