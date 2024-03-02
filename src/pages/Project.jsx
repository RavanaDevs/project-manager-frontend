import { Container } from "react-bootstrap"
import NavBar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Project from "../components/Project"

const Profile = () => {
  return (
    <>
      <NavBar />
      <Container className='vh-100 d-flex'>
        <Sidebar />
        <Project/>
      </Container>
    </>
  )
}

export default Profile
