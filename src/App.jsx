import { Container } from 'react-bootstrap'
import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import SignUp from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh' }}
      >
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <Router>
            <AuthProvider>
              <Routes>
                {/* <PrivateRoute exact path="/" component={Dashboard} /> */}
                {/* <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}
                <Route exact path="/" element={<Dashboard />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                {/* <Route path="/forgot-password" component={ForgotPassword} /> */}
              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </>
  )
}

export default App
