import React from 'react'
import { Nav, Button, Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import './components.css'

const Sidebar = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <div
      className="d-flex flex-column h-100"
      style={{ width: '250px', backgroundColor: '#343a40' }}
    >
      <Container className="text-center mt-3">
        <div className="profile">K</div>
      </Container>
      <Nav className="flex-column mt-4">
        <Nav.Link as={Link} to="/" className="text-white">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/newproject" className="text-white">
          New Project
        </Nav.Link>
        <Nav.Link as={Link} to="/myprojects" className="text-white">
          My Projects
        </Nav.Link>
        <Nav.Link as={Link} to="/todos" className="text-white">
          Todos
        </Nav.Link>
      </Nav>
      <div className="align-self-center mb-3 mt-5">
        <Button variant="outline-light" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  )
}

export default Sidebar
