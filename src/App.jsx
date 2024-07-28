import Comment from './Components/Comment/Comment.jsx';
import Header from './Components/Header/Header.jsx';
import Counter from './Components/Counter/Counter.jsx';
import img1 from './Images/AlyHany.jpg';
import '../src/App.css';
export function App() {
  return(
   <div>
    <Header src={img1}/>
    <h1 className="Title">Most Liked Comments</h1>
   <Comment UserName="Aly Hany" Comment="Lorem ipsum dolor sit amet consectetur adipisicing elit" Date="27-Jul-24" src={img1}/>
   <Comment UserName="John Smith" Comment="Lorem ipsum dolor sit amet consectetur adipisicing elit" Date="28-Jul-24"/>
   <Counter/>
   </div>
  )
}

export default App;
