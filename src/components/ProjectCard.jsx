import {
  Form,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "react-bootstrap"

const ProjectCard = () => {
  return (
    <div className='mt-3'>
      <Card className='bg-dark text-white p-2'>
        <CardHeader className='d-flex justify-content-between'>
          <div>
            <h4>React Project</h4>
          </div>
          <div>
            <div className='green'>2024-02-03</div>
            <div className='red'>2024-03-06</div>
          </div>
        </CardHeader>
        <CardBody>
          <ul>
            <div className='d-flex'>
              <Form.Check disabled checked={true} />
              &nbsp;&nbsp;Initialize Project with vite
            </div>
            <div className='d-flex'>
              <Form.Check disabled checked={true} />
              &nbsp;&nbsp;Create UI
            </div>
            <div className='d-flex'>
              <Form.Check disabled checked={true} />
              &nbsp;&nbsp;Connect backend with axios
            </div>
            <div className='d-flex'>
              <Form.Check disabled checked={false} />
              &nbsp;&nbsp;Create CI/CD pipeline
            </div>
            <div className='d-flex'>
              <Form.Check disabled checked={false} />
              &nbsp;&nbsp;Host in cloud
            </div>
          </ul>
        </CardBody>
        <CardFooter>
          <div className='d-flex justify-content-end'>
            <Button variant={"success"}>Open</Button>&nbsp;&nbsp;
            <Button variant={"danger"}>Delete</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ProjectCard
