import Comment from './Components/Comment/Comment.jsx';
import Header from './Components/Header/Header.jsx';
import Counter from './Components/Counter/Counter.jsx';
import img1 from './Images/AlyHany.jpg';
import CommentList from './Components/CommentList/CommentList.jsx';
import {useState} from 'react';
import '../src/App.css';
const data = [
  {
    id: 1,
    UserName: "Aly Hany",
    Comment: "This is a great post!",
    Date: "2024-07-25",
    src:img1
  },
  {
    id: 2,
    UserName: "Bob",
    Comment: "I found this article very informative.",
    Date: "2024-07-26"
  },
  {
    id: 3,
    UserName: "Charlie",
    Comment: "I disagree with some points mentioned.",
    Date: "2024-07-27"
  },
  {
    id: 4,
    UserName: "Diana",
    Comment: "Can you provide more details on this topic?",
    Date: "2024-07-28"
  }
];
const newComment=  {
  id: 5,
  UserName: "Alice",
  Comment: "Hello There...",
  Date: "2024-08-1"
 
}

export function App() {
  const [comments, setComments] = useState(data);
  const addComment=()=>{
    setComments(prevsState=>[...prevsState,newComment]);
    
    
  };
  return(
   <div className="App">
    <Header src={img1}/>
    <h1 className="Title">Comments</h1>
    <CommentList data={comments}/>
    <button  onClick={addComment}>Generate Dummy Comment</button>
   <Counter/>
   </div>
  )
}

export default App;
