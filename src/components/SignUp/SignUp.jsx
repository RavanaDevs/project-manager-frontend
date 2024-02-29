import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import { Box, Container, Stack, Typography } from '@mui/material'

export default function SignUp() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    // handle form submission here
  }

  return (
    <>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          maxWidth="sm"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
            borderRadius: 5,
            padding: '40px 30px 60px 30px',
            marginTop: '70px',
          }}
        >
          <form onSubmit={handleSubmit}>
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <Typography
                variant="h3"
                color="initial"
                align="center"
                marginBottom={'40px'}
              >
                Sign Up
              </Typography>
              <TextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                margin="normal"
                required
                sx={{ width: '400px' }}
              />
              <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
                sx={{ width: '400px' }}
              />
              <TextField
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                required
                type="password"
                sx={{ width: '400px' }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ width: '100px', marginTop: '30px' }}
              >
                Sign Up
              </Button>

              <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                sx={{ margin: '10px' }}
              >
                <Typography>Already have an account? </Typography>
                <Link href="/login" variant="body2 " ml={1} underline="hover">
                  SignIn
                </Link>
              </Box>
            </Box>
          </form>
        </Box>
      </Container>
    </>
  )
}
