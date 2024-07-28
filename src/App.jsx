import Comment from './Components/Comment/Comment.jsx';
import Header from './Components/Header/Header.jsx';
import Counter from './Components/Counter/Counter.jsx';
import '../src/App.css';
export function App() {
  return(
   <div>
    <Header/>
    <h1 className="Title">Most Liked Comments</h1>
   <Comment UserName="Aly Hany" Comment="Lorem ipsum dolor sit amet consectetur adipisicing elit" Date="28-Jul-24"/>
   <Counter/>
   </div>
  )
}

export default App;
