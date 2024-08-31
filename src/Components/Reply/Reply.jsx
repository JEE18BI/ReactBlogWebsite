import { useEffect,useState,useContext } from 'react';
import { ApiContext } from '../../App';
import './Reply.css'
const Reply = ({reply}) => {
    const [user,setUser] = useState("");
    const {baseUrl} = useContext(ApiContext);
    useEffect(()=>{
        fetch(`${baseUrl}/users/get/${reply.postedBy}`)
        .then((data)=> data.json())
        .then((fetchedData)=> {
          setUser(fetchedData)
        }).catch((error) => console.error('Error fetching data:', error));
      },[]) 
    if (!reply || !reply.postedBy) {
        return <div>Loading...</div>;
      }     
  return (
    <>
      <h6>{reply.reply}</h6>
      <h6>{reply.date}</h6>
      <h6>{user.userName}</h6>
    </>
  )
}

export default Reply
