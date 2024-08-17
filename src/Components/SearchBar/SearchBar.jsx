import './SearchBar.css';
import CommentList from '../CommentList/CommentList.jsx';
const SearchBar = ({deleteFunction,FilterData,setFilterData,comments,loggedUser}) => {
   function FilterHandler(key){
     if(key.length===0)
     {
       setFilterData(comments);
     }
    else{
        setFilterData(comments);
        setFilterData(prevState => (prevState.filter(el => (el.comment.toLowerCase().includes(key.toLowerCase())))));
    }
    }
  return (
    <>
    <div className="SearchBarContainer">
<input placeholder="Search By Comment Details" id="SearchBarInput" className="SearchBar" onChange={(e)=>FilterHandler(e.target.value)}/>
    </div>
 <CommentList data={FilterData} deleteFunction={deleteFunction} loggedUser={loggedUser}/>
   
    </>
  )
}

export default SearchBar
