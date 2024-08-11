import './SearchBar.css';
import CommentList from '../CommentList/CommentList.jsx';
const SearchBar = ({deleteFunction,FilterData,setFilterData,comments}) => {
   function FilterHandler(key){
     if(key.length===0)
     {
       setFilterData(comments);
     }
    else{
        setFilterData(comments);
        setFilterData(prevState => (prevState.filter(el => (el.Comment.toLowerCase().includes(key.toLowerCase())))));
    }
    }
  return (
    <>
    <div className="SearchBarContainer">
<input placeholder="Search By Comment Details" id="SearchBarInput" className="SearchBar" onChange={(e)=>FilterHandler(e.target.value)}/>
    </div>
 <CommentList data={FilterData} deleteFunction={deleteFunction}/>
   
    </>
  )
}

export default SearchBar
