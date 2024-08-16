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
  useEffect(()=>{
    fetch("http://localhost:3004/Comments")
    .then((data)=> data.json())
    .then((fetchedData)=> {
      setComments(fetchedData)
      setFilterData(fetchedData)
    }).catch((error) => console.error('Error fetching data:', error));
  },[])
  useEffect(()=>{
    fetch("http://localhost:3004/LoggedInUser")
    .then((data)=> data.json())
    .then((fetchedData)=> {
      setUser(fetchedData)
    }).catch((error) => console.error('Error fetching data:', error));
  },[]) 
  const deleteComment=(deletedId)=>{
    setComments(prevState => (prevState.filter(el => (el.id !== deletedId))))
    setFilterData(prevState => (prevState.filter(el => (el.id !== deletedId))))
    console.log("Deleted");
  };
  const addComment=(newComment)=>{
    setComments(prevState => (prevState,newComment));
  }
  console.log(FilterData);
  return(
   <div className="App">
    <Header src={user.src}/>
   
  <SearchBar setFilterData={setFilterData} className="SearchComponent" deleteFunction={deleteComment} FilterData={FilterData} comments={comments}/>
    <h1 className="Title">Blog Website</h1>
 <InputForm setComment={setComments} setFilterData={setFilterData} comments={comments} user={user}/>
   </div>
  )

}

export default App;
