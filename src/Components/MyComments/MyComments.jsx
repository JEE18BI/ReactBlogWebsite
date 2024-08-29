import HomePage from "../HomePage/HomePage"
import './MyComments.css'
const MyComments = ({user}) => {
  return (
    <HomePage user={user} MyComments={true}/>
  )
}

export default MyComments
