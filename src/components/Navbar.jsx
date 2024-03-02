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
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">PROJECT MANAGER</Navbar.Brand>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#link">NewProject</Nav.Link>
          <Nav.Link href="#link">MyProjects</Nav.Link>
          <Nav.Link href="#link">Todos</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto">
            <Navbar.Text>
              <a className="mr-10" href="#login">
                {currentUser.email}
              </a>
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
