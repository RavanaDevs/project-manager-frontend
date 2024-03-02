import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const PrivateRoute = ({ Component }) => {
  const { loggedIn } = useAuth()
  return loggedIn ? <Component /> : <Navigate to={'/login'} />
}

export default PrivateRoute
