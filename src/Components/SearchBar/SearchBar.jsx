import './SearchBar.css';
import CommentList from '../CommentList/CommentList.jsx';
import {useState} from 'react';
const SearchBar = ({data,deleteFunction,comments}) => {
    const [FilterData,setFilterData]=useState(comments);
    function FilterHandler(key){
     if(key.length===0)
     setFilterData(comments);
    else{
        setFilterData(prevState => (prevState.filter(el => (el.Comment.toLowerCase().includes(key.toLowerCase())))));
       
  
    }
    }
  return (
    <>
    <div className="SearchBarContainer">
<input placeholder="Search By Comment Details" className="SearchBar" onChange={(e)=>FilterHandler(e.target.value)}/>
    </div>
<CommentList data={FilterData} deleteFunction={deleteFunction}/>
   
    </>
  )
}

export default SearchBar
