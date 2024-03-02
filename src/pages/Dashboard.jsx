import { Container } from "react-bootstrap"
import NavBar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const Dashboard = () => {
  return (
    <>
      <NavBar/>
      <Container className="vh-100">
        <Sidebar/>
      </Container>
    </>
  )
}

export default Dashboard
