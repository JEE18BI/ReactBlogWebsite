import Header from './Components/Header/Header.jsx';
import {useState,useEffect,createContext} from 'react';
import HomePage from './Components/HomePage/HomePage.jsx';
import {Route,Routes} from 'react-router-dom';
import '../src/App.css';
import MyComments from './Components/MyComments/MyComments.jsx';
import Profile from './Components/Profile/Profile.jsx';
export const CommentEditedContext = createContext();
export const ApiContext = createContext();
export function App() {
  const [user,setUser] = useState(""); 
  const baseUrl = "https://blog-express-apis.vercel.app";
  useEffect(()=>{
    fetch(`${baseUrl}/users/loggedin`)
    .then((data)=> data.json())
    .then((fetchedData)=> {
      setUser(fetchedData)
    }).catch((error) => console.error('Error fetching data:', error));
  },[]) 
  return(
   <div className="App">
  <ApiContext.Provider value={{baseUrl}}>
    <Header src={user.src}/>
    <h1 className="Title">Blog Website</h1>
    <Routes>
      <Route path="/" element ={ <HomePage user={user} MyComments={false}/>}/>
      <Route path="/MyComments" element ={ <MyComments user={user}/>}/>
      <Route path="/Profile" element ={ <Profile/>}/>
    
    </Routes>
  </ApiContext.Provider>
   </div>
  )


}
export default App;
