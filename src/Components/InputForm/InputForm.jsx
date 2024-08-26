import  {useRef,createContext,useEffect,useContext}  from 'react';
import './InputForm.css';
import { ApiContext } from '../../App';
export const CommentContext = createContext();
const InputForm = ({setComment,setFilterData,user,setInputPopup,isEdited,setIsEdited,editedComment,setEditedComment}) => {
  const {baseUrl} = useContext(ApiContext);
  let refComment =useRef(); 
   const AddComment = async ()=>{
    setEditedComment(prevState => ({
      ...prevState,
      comment: ""
    }));
    if(refComment.current.value!=="" ){
      const now = new Date();
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const formattedDate =`${now.getHours().toString().padStart(2, '0')} : ${now.getMinutes().toString().padStart(2, '0')} , ${now.getDate().toString().padStart(2, '0')} ${monthNames[now.getMonth()].toString().padStart(2, '0')} ${now.getFullYear().toString().slice(-2)}`;
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
        await fetch(`${baseUrl}/comments/add`, {
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
        fetch(`${baseUrl}/comments/edit/${editedComment.id}`, {
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
      else{
        setEditedComment(prevState => ({
          ...prevState,
          comment: ""
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
