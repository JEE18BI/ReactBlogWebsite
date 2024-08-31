import { useState , useEffect ,useContext } from 'react';
import { ApiContext } from '../../App';
import Avatar from '../Avatar/Avatar';
import './Profile.css';
const Profile = () => {
    const [user,setUser] = useState("");
    const [userComments,setUserComments] = useState ("");
    const {baseUrl} = useContext(ApiContext);
    useEffect(()=>{
        fetch(`${baseUrl}/users/loggedin`)
        .then((data)=> data.json())
        .then((fetchedData)=> {
          setUser(fetchedData)
        }).catch((error) => console.error('Error fetching data:', error));
      },[]) 
  return (
    <>
    {/* <div className="PersonalInfo">
        <h5>Personal Info</h5>
        <div className="InputContainer">
        <div className="LabelContainer">
        <label>Profile Image</label>
            </div> 
            <Avatar src={user.src}/>
        <div className="LabelContainer">
        <label>User Name</label>
            </div> 
        <input value={user.userName} readOnly/>
        </div>
        <div className="InputContainer">
        <div className="LabelContainer">
        <label>Gender</label>
            </div> 
    <input value={user.gender} readOnly/>
    </div>

    </div> */}
    
    </>
  )
}

export default Profile
