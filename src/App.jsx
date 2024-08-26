import Header from './Components/Header/Header.jsx';
import {useState,useEffect,createContext} from 'react';
import HomePage from './Components/HomePage/HomePage.jsx';
import '../src/App.css';
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
    <HomePage user={user}/>
  </ApiContext.Provider>
   </div>
  )


}
export default App;
