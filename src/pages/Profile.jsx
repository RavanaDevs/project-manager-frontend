import { Container } from "react-bootstrap"
import NavBar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import EditProfile from "../components/EditProfile"

const Profile = () => {
  return (
    <>
      <NavBar />
      <Container className='vh-100 d-flex'>
        <Sidebar />
        <EditProfile />
      </Container>
    </>
  )
}

export default Profile
