// Write your code here
// Logout is a functional component
import './index.css'

const Logout = props => {
  const {logout} = props
  return (
    <button type="button" className="logout-button" onClick={logout}>
      Logout
    </button>
  )
}

export default Logout
