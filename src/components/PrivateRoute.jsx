import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const PrivateRoute = ({ Component }) => {
  const { currntUser } = useAuth()
  return currntUser ? <Component /> : <Navigate to={'/login'} />
}

export default PrivateRoute
