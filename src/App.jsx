import Comment from './Components/Comment/Comment.jsx';
import Header from './Components/Header/Header.jsx';
import '../src/App.css';
export function App() {
  return(
   <div>
    <Header/>
    <h1 className="Title">Most Liked Comments</h1>
   <Comment/>
   </div>
  )
}

export default App;
