import MalePlaceholder from '../../Images/Male-Placeholder.png';
import FemalePlaceholder from '../../Images/Female-Placeholder.png';
import './Avatar.css';
import CardDetails from '../CardDetails/CardDetails';
const Avatar = ({src,Gender,CardDetails}) => {
  let Placeholder=MalePlaceholder;
  if(Gender==="F"){
    Placeholder=FemalePlaceholder;
  }
    return (
      <>
         <img className={CardDetails ? 'CardDetailsAvatar Avatar' : 'HeaderImage Avatar'} src={src ? src :Placeholder} alt="Male Avatar"/>
    
      </>
    )
  
 
}

export default Avatar
