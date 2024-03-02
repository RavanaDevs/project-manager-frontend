import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import SignUp from './components/Signup'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'

import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import ProjectPage from './pages/Project'

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
            <Route path="/profile" element={<Profile />} />
            <Route path="/myprojects" element={<ProjectPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
