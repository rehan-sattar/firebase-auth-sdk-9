import { Box, Flex, Input, Heading, Button, Link } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const signupUser = (e) => {
    e.preventDefault()
    setLoading(true)
  }

  const handleEmailChange = (event) => {
    const value = event.target.value
    setEmail(value)
  }

  const handlePasswordChange = (event) => {
    const value = event.target.value
    setPassword(value)
  }

  return (
    <Box marginTop='10'>
      <Flex flexDirection='column' justify='center' alignItems='center'>
        <Heading> Signup 🚀 </Heading>
        <Box width={['full', 400]}>
          <form onSubmit={signupUser}>
            <Box mt='5'>
              <Input
                name='email'
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
                name='password'
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
                Signup
              </Button>
            </Box>
          </form>
        </Box>
        <Box fontSize='lg' mt='8'>
          Already have account?{' '}
          <RouterLink to='/login'>
            <Link fontWeight='bold' textDecor='underline'>
              Login
            </Link>
          </RouterLink>
        </Box>
      </Flex>
    </Box>
  )
}
