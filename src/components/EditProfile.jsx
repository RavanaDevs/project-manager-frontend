import { useRef, useState, useEffect } from "react"
import { Container, Form, Button, Card, Image } from "react-bootstrap"

const EditProfile = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profilePicture: "",
  })
  const [loading, setLoading] = useState(false)

  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const profilePictureRef = useRef()

  useEffect(() => {
    // Fetch user data from your Auth context/service and set it in state
    // This is just a placeholder function call
    const fetchUserData = async () => {
      // Assume fetchUser returns user data including firstName, lastName, email, and profilePicture
      const userData = await fetchUser()
      setUser(userData)
    }

    fetchUserData()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Update user profile information
    // This should include logic to handle the profile picture file,
    // such as uploading to your backend and getting the URL back
    try {
      await updateUserProfile({
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
        // Handle profile picture update logic here
      })

      // Show a success message or handle navigation
    } catch (error) {
      // Handle errors, such as showing an error message
    }

    setLoading(false)
  }

  return (
    <Container
      className='d-flex align-items-center justify-content-center'
      style={{ minHeight: "100vh" }}
    >
      <div className='w-100' style={{ maxWidth: "400px" }}>
        <Card className='bg-dark text-white'>
          <Card.Body>
            <div className='text-center'>
              <Image
                src={
                  user.profilePicture || "path/to/default/profile/picture.jpg"
                }
                roundedCircle
                style={{ width: "100px", height: "100px" }}
              />
              <h2>Hello, {user.firstName || "User"}</h2>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group id='first-name'>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type='text'
                  ref={firstNameRef}
                  required
                  defaultValue={user.firstName}
                  placeholder='First Name'
                />
              </Form.Group>
              <Form.Group id='last-name'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type='text'
                  ref={lastNameRef}
                  required
                  defaultValue={user.lastName}
                  placeholder='Last Name'
                />
              </Form.Group>
              <Form.Group id='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  ref={emailRef}
                  required
                  defaultValue={user.email}
                  placeholder='Email'
                />
              </Form.Group>
              <Form.Group id='profile-picture'>
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control type='file' ref={profilePictureRef} />
              </Form.Group>
              <Button disabled={loading} className='w-100 mt-4' type='submit'>
                Update Profile
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  )
}

export default EditProfile

// Placeholder functions for fetching and updating user data
async function fetchUser() {
  // Fetch user data from your backend or context
  return {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    profilePicture: "", // URL to the user's profile picture
  }
}

async function updateUserProfile(updatedData) {
  // Update user profile data in your backend
  console.log("Updating user profile with:", updatedData)
}
