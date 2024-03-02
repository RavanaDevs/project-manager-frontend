import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import SignUp from './components/Signup'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'

import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route
              exact
              path="/"
              element={<PrivateRoute Component={Dashboard} />}
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
