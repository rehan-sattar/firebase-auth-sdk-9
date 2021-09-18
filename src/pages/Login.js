import { useState } from 'react'
import { Box, Flex, Input, Heading, Button, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleEmailChange = (event) => {
    const value = event.target.value
    setEmail(value)
  }

  const handlePasswordChange = (event) => {
    const value = event.target.value
    setPassword(value)
  }

  const loginUser = (e) => {
    e.preventDefault()
    setLoading(true)
  }

  return (
    <Box marginTop='10'>
      <Flex flexDirection='column' justify='center' alignItems='center'>
        <Heading> Login 🚀 </Heading>
        <Box width={['full', 400]}>
          <form onSubmit={loginUser}>
            <Box mt='5'>
              <Input
                type='email'
                placeholder='Email'
                variant='filled'
                required
                value={email}
                onChange={handleEmailChange}
              />
            </Box>
            <Box mt='5'>
              <Input
                type='password'
                placeholder='Password'
                variant='filled'
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </Box>
            <Box mt='5'>
              <Button
                type='submit'
                variant='solid'
                colorScheme='cyan'
                width='full'
                disabled={loading}
              >
                Login
              </Button>
            </Box>
          </form>
        </Box>
        <Box fontSize='lg' mt='8'>
          Do not have account?{' '}
          <RouterLink to='/'>
            <Link fontWeight='bold' textDecor='underline'>
              Signup
            </Link>
          </RouterLink>
        </Box>
      </Flex>
    </Box>
  )
}
