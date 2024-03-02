import { useRef, useState } from "react"
import { Container, Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      <Container
        className='d-flex align-items-center justify-content-center'
        style={{ minHeight: "100vh" }}
      >
        <div className='w-100' style={{ maxWidth: "400px" }}>
          <Card className='bg-dark text-white'>
            <Card.Body>
              <h2 className='text-center mb-4'>Log In</h2>
              {error && <Alert variant='danger'>{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id='email'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='email'
                    ref={emailRef}
                    required
                    className='bg-secondary text-white'
                  />
                </Form.Group>
                <Form.Group id='password' className='mt-3'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    ref={passwordRef}
                    required
                    className='bg-secondary text-white'
                  />
                </Form.Group>
                <Button
                  disabled={loading}
                  className='w-100 mt-4 '
                  type='submit'
                >
                  Log In
                </Button>
              </Form>
              <div className='w-100 text-center mt-3'>
                <Link to='/forgot-password' className='text-info'>
                  Forgot Password?
                </Link>
              </div>
            </Card.Body>
          </Card>
          <div className='w-100 text-center mt-2 text-light'>
            Need an account?
            <Link to='/signup' className='text-info'>
              Sign Up
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Login
