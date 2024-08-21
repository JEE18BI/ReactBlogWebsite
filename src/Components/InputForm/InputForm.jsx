import  {useRef,createContext,useEffect}  from 'react';
import './InputForm.css';
export const CommentContext = createContext();
const InputForm = ({setComment,setFilterData,user,setInputPopup,isEdited,setIsEdited,editedComment,setEditedComment}) => {
  let refComment =useRef(); 
   const AddComment = async ()=>{
    setEditedComment(prevState => ({
      ...prevState,
      comment: ""
    }));
    if(refComment.current.value!=="" ){
      const today = new Date();
      const options = { year: 'numeric', month: 'short', day: '2-digit' };
      const formattedDate = today.toLocaleDateString('en-US', options);
      const dateString = formattedDate.toString();   
      let newComment=  {
          //initially and then set by backend
          id:0,
          comment:refComment.current.value,
          userName:user.userName,
          date:dateString,
          src:user.src,
          gender:user.gender,
          postedBy:user.id
        }
        await fetch('http://localhost:3004/comments/add', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json'    
          },
          body: JSON.stringify(newComment)
      })
      .then(response =>response.json())
      .then(data => {
          newComment.id = data.id;
          console.log('Success:', data);
      })
      .catch(error => {
          console.error('Error:', error);
      });
        setComment(prevsState=>[...prevsState,newComment]);
        if(newComment.comment.toLowerCase().includes(document.getElementById("SearchBarInput").value.toLowerCase()))
        setFilterData(prevsState=>[...prevsState,newComment]);
      else
      setFilterData(setFilterData);
      refComment.current.value="";
      DiscardHandler();
      console.log("new"+newComment.id+newComment.comment);
    }
    else{
      alert("Please Fill Comment Field");
    }
  }
  const EditComment =  ()=>{
     if(editedComment.id){
      if(refComment.current.value!=="" ){
        console.log("ref" + refComment.current.value);
        const updatedComment= {
          comment: refComment.current.value
        };
        fetch(`http://localhost:3004/comments/edit/${editedComment.id}`, {
          method: 'PATCH',
          headers: {
          'Content-Type': 'application/json'    
          },
          body: JSON.stringify(updatedComment)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Edit Success:', data);
        setComment(prevComments =>
          prevComments.map(comment =>
            comment.id === editedComment.id
              ? { ...comment, comment: data.comment,date:data.date } 
              : comment
          )
        );
        if(editedComment.comment.toLowerCase().includes(document.getElementById("SearchBarInput").value.toLowerCase()))
          {
            setFilterData(prevComments =>
            prevComments.map(comment =>
              comment.id === editedComment.id
                ? { ...comment, comment: data.comment,date:data.date } 
                : comment
            )
          );
      
        }
          else{
            setFilterData(prevComments =>prevComments.filter(comment =>
                comment.id !== editedComment.id
              )
            );
          }
      })
      .catch(error => {
        console.error('There was a problem with Edit Comment:', error);
      });
    DiscardHandler();
      }
      else{
        alert("Please Fill Comment Field");
      }
     
     }
     else{
      console.log("Cannot Edit , Error Getting Id");
     }
     console.log("editedId"+ editedComment.id);
  }
 
  const DiscardHandler = ()=>{
    if(setInputPopup){
      setInputPopup(false);
    }
     if(setIsEdited){
      setIsEdited(false);
    }
  }
  const refHandler =()=>{
        if(isEdited){
         EditComment();
        }
        else{
        AddComment();
        }
    }
    useEffect(() => {
      if (isEdited) {
        setEditedComment(prevState => ({
          ...prevState,
          comment: refComment.current ? refComment.current.value : ''
        }));
      }
    }, [isEdited]);
    const handleChange = (event) => {
      setEditedComment(prevState => ({
        ...prevState,
        comment: event.target.value
      }));
    };
  return (
    <div className="AddCommentForm">
        <label htmlFor="Comment">{isEdited?' Edit Comment' :'Add New Comment'}</label>
     <input id="Comment" ref={refComment} maxLength={200} value={editedComment.comment} onChange={handleChange}/>
     <button className="FormButton" onClick={refHandler}>{isEdited?' Edit' :'Add '}</button>
        <a onClick={DiscardHandler}>Discard</a>
    </div>
  )
}

export default InputForm
