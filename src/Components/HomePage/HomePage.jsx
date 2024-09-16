import {useState,useEffect,createContext,useContext} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import InputForm from '../CommentInputForm/CommentInputForm';
import { ApiContext } from '../../App';
export const CommentActionsContext = createContext();
const HomePage = ({user,MyComments}) => {
  const [comments, setComments] = useState("");
  const [FilterData,setFilterData] = useState("");
  const [inputPopup,setInputPopup] = useState(false);
  const [isEdited,setIsEdited] = useState(false);
  const [editedComment,setEditedComment] = useState("");
  const {baseUrl} = useContext(ApiContext);
  let commentsApi;
  if(!MyComments)
    commentsApi="/Comments/GetAll";
  else
  commentsApi=`/Comments/MyComments/${user.id}`;
    useEffect(()=>{
      fetch(`${baseUrl}${commentsApi}`)
      .then((data)=> data.json())
      .then((fetchedData)=> {
        setComments(fetchedData)
        setFilterData(fetchedData)
      }).catch((error) => console.error('Error fetching data:', error));
    },[])
  

  const deleteComment=(deletedId)=>{
    fetch(`${baseUrl}/comments/delete/${deletedId}`, {
      method: 'DELETE'
  })
  .then(response => {
      if (response.ok) {
          console.log('Success: Comment deleted');
      } else {
          return response.text().then(text => {
              console.error('Error: Failed to delete comment. Status:', text,response.status);
          });
      }
  })
  .catch(error => console.error('Fetch Error:', error));
  setComments(prevState => (prevState.filter(el => (el.id !== deletedId))))
  setFilterData(prevState => (prevState.filter(el => (el.id !== deletedId))))
  }

  const showPopup=()=>{
    setInputPopup(true);
  }
  const getEditedComment=(id,comment)=>{
    const commentObject ={
     id:id,
     comment:comment
    };
    setEditedComment(commentObject);
  }
  return (
    <div className="HomePage">
      {!inputPopup && <button className="btn" onClick={showPopup}>Add</button> }
    <div className={inputPopup || isEdited ? "Dimmed":"Bright"} onClick={()=>setInputPopup(false)}>
      <CommentActionsContext.Provider value ={{setIsEdited,isEdited,getEditedComment,deleteComment}}>
        
      <SearchBar setFilterData={setFilterData} FilterData={FilterData} comments={comments} loggedUser={user} />
      </CommentActionsContext.Provider>
  </div>
 {(inputPopup || isEdited) &&  
 <InputForm setComment={setComments} setFilterData={setFilterData} user={user} setInputPopup={setInputPopup} 
 isEdited={isEdited} setIsEdited={setIsEdited} editedComment={editedComment} setEditedComment={setEditedComment}/>}
    </div>
  )
}

export default HomePage
