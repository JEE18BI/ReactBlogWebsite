import '../CommentList/CommentList.css';
import placeholderImg from '../../Images/404SVG.svg';
const PageNotFound = () => {
  return (
    <>
     <div className="PlaceholderDiv">
 <img src={placeholderImg} className="PlaceholderImage" alt="Placeholder image"/>
 <h5>Page Not Found </h5>
  </div>
    </>
  )
}

export default PageNotFound
