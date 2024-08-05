import Header from './Components/Header/Header.jsx';
import Counter from './Components/Counter/Counter.jsx';
import img1 from './Images/AlyHany.jpg';
import CommentList from './Components/CommentList/CommentList.jsx';
import {useState} from 'react';
import InputForm from './Components/InpurForm/InputForm.jsx';
import '../src/App.css';
const data = [
  {
    id: 1,
    UserName: "Aly Hany",
    Comment: "This is a great post!",
    Date: "Sep 25,2024",
    src:img1,
    Gender:"M"
  },
  {
    id: 2,
    UserName: "Bob",
    Comment: "I found this article very informative.",
    Date: "Sep 26,2024",
    Gender:"M"
  },
  {
    id: 3,
    UserName: "Charlie",
    Comment: "I disagree with some points mentioned.",
    Date: "Sep 27,2024",
    Gender:"M"
  },
  {
    id: 4,
    UserName: "Diana",
    Comment: "Can you provide more details on this topic?",
    Date: "Aug 04,2024",
    Gender:"F"
  }
];


export function App() {
  const [comments, setComments] = useState(data);
  const addComment=(newComment)=>{
    setComments(prevsState=>[...prevsState,newComment]);
    
    
  };
  const deleteComment=(deletedId)=>{
    setComments(prevState => (prevState.filter(el => (el.id !== deletedId))))
    
  };
  return(
   <div className="App">
    <Header src={img1}/>
    <h1 className="Title">Comments</h1>
    <CommentList data={comments} deleteFunction={deleteComment}/>
   {/* <Counter/> */}
   <InputForm setComment={setComments}/>
   </div>
  )
}

export default App;
