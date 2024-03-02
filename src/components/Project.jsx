import {
  Button,
  Form,
} from "react-bootstrap"
import { FaPlus } from "react-icons/fa"
import ProjectCard from "./ProjectCard"

const Project = () => {
  return (
    <div className='project-container p-4'>
      <div className='d-flex justify-content-between'>
        <h3 className='text-light'>My Projects</h3>
        <Button variant={"primary"}>
          Create New <FaPlus />
        </Button>
      </div>
      <div className='mt-3'>
        <Form.Control
          className='bg-secondary text-white'
          type='text'
          required
          placeholder='Search'
        />
      </div>
      <div className="cards">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </div>
  )
}

export default Project
