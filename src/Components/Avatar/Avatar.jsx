import MalePlaceholder from '../../Images/Male-Placeholder.png';
import FemalePlaceholder from '../../Images/Female-Placeholder.png';
import './Avatar.css';
const Avatar = ({src,Gender}) => {
  if(Gender==="M"){
    return (
      <>
         <img className="CommentImage" src={src ? src :MalePlaceholder} alt="Male Avatar"/>
    
      </>
    )
  }
  else{
    return(
        <>
           <img className="CommentImage" src={src ? src :FemalePlaceholder} alt="Male Avatar"/>
      
        </>
      
    )
  }
}

export default Avatar
