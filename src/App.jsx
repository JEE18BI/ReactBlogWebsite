import Header from './Components/Header/Header.jsx';
import {useState,useEffect,createContext} from 'react';
import InputForm from './Components/InputForm/InputForm.jsx';
import SearchBar from './Components/SearchBar/SearchBar.jsx';
import '../src/App.css';

export const CommentEditedContext = createContext();
export const ApiContext = createContext();
export function App() {

  const [comments, setComments] = useState("");
  const [FilterData,setFilterData] = useState("");
  const [user,setUser] = useState("");
  const [inputPopup,setInputPopup] = useState(false);
  const [isEdited,setIsEdited] = useState(false);
  const [editedComment,setEditedComment] = useState("");
  
  const baseUrl = "https://blog-express-apis.vercel.app";
  useEffect(()=>{
    fetch(`${baseUrl}/Comments/GetAll`)
    .then((data)=> data.json())
    .then((fetchedData)=> {
      setComments(fetchedData)
      setFilterData(fetchedData)
    }).catch((error) => console.error('Error fetching data:', error));
  },[])

  useEffect(()=>{
    fetch(`${baseUrl}/users/loggedin`)
    .then((data)=> data.json())
    .then((fetchedData)=> {
      setUser(fetchedData)
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
  console.log(FilterData);
  return(
   <div className="App">
    <ApiContext.Provider value={{baseUrl}}>
    <Header src={user.src}/>
    <h1 className="Title">Blog Website</h1>
  {!inputPopup && <button className="btn" onClick={showPopup}>Add</button> }
    <div className={inputPopup || isEdited ? "Dimmed":"Bright"} onClick={()=>setInputPopup(false)}>
      <CommentEditedContext.Provider value ={{setIsEdited,isEdited,getEditedComment}}>
      <SearchBar setFilterData={setFilterData}  deleteFunction={deleteComment} FilterData={FilterData} comments={comments} loggedUser={user} />
      </CommentEditedContext.Provider>
  </div>
 {(inputPopup || isEdited) &&  
 <InputForm setComment={setComments} setFilterData={setFilterData} user={user} setInputPopup={setInputPopup} 
 isEdited={isEdited} setIsEdited={setIsEdited} editedComment={editedComment} setEditedComment={setEditedComment}/>}
  </ApiContext.Provider>
   </div>
  )


}
export default App;
