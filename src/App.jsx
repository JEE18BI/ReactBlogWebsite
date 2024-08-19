import Header from './Components/Header/Header.jsx';
import img1 from './Images/AlyHany.jpg';
import {useState,useEffect} from 'react';
import InputForm from './Components/InputForm/InputForm.jsx';
import SearchBar from './Components/SearchBar/SearchBar.jsx';
import '../src/App.css';

export function App() {

  const [comments, setComments] = useState("");
  const [FilterData,setFilterData]=useState("");
  const [user,setUser]=useState("");
  const [inputPopup,setInputPopup]=useState(false);
  useEffect(()=>{
    fetch("http://localhost:3004/Comments/GetAll")
    .then((data)=> data.json())
    .then((fetchedData)=> {
      setComments(fetchedData)
      setFilterData(fetchedData)
    }).catch((error) => console.error('Error fetching data:', error));
  },[])
  useEffect(()=>{
    fetch("http://localhost:3004/users/loggedin")
    .then((data)=> data.json())
    .then((fetchedData)=> {
      setUser(fetchedData)
    }).catch((error) => console.error('Error fetching data:', error));
  },[]) 
  const deleteComment=(deletedId)=>{
    fetch(`http://localhost:3004/comments/delete/${deletedId}`, {
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
  const addComment=(newComment)=>{
    setComments(prevState => (prevState,newComment));
  }
  const showPopup=()=>{
    setInputPopup(true);
  }
  console.log(FilterData);
  return(
   <div className="App">
    <Header src={user.src}/>
    <h1 className="Title">Blog Website</h1>
  {!inputPopup && <button className="btn" onClick={showPopup}>Add</button> }
    <div className={inputPopup?"Dimmed":"Bright"} onClick={()=>setInputPopup(false)}>
  <SearchBar setFilterData={setFilterData}  deleteFunction={deleteComment} FilterData={FilterData} comments={comments} loggedUser={user}/>
  </div>
 {inputPopup &&  <InputForm setComment={setComments} setFilterData={setFilterData} comments={comments} user={user} setInputPopup={setInputPopup}/>}
   </div>
  )


}
export default App;
