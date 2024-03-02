import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'
import { FaUser } from 'react-icons/fa'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">PROJECT MANAGER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#newproject">NewProject</Nav.Link>
            <Nav.Link href="#myprojects">MyProjects</Nav.Link>
            <Nav.Link href="#todos">Todos</Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Text>
              <a href="#login">{currentUser ? currentUser.email : 'User'}</a>
            </Navbar.Text>
            <NavDropdown title={<FaUser />} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
