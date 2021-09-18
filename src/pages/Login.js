import { Box, Button, Flex, Heading, Input, Link } from '@chakra-ui/react'
import { useState } from 'react'
import { Link as RouterLink, Redirect, useHistory } from 'react-router-dom'
import ErrorDialog from '../components/ErrorDialog'
import { useFirebaseAuth } from '../hooks/useFirebaseAuth'

export default function Login() {
  const { signInInWithEmailAndPassword, authenticated } = useFirebaseAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory()

  const handleEmailChange = (event) => {
    const value = event.target.value
    setEmail(value)
  }

  const handlePasswordChange = (event) => {
    const value = event.target.value
    setPassword(value)
  }

  const loginUser = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await signInInWithEmailAndPassword(email, password)
      history.push('/home')
    } catch (err) {
      if (err.code === 'auth/wrong-password') {
        setErrorMessage('You have entered wrong password. Please try again!')
      } else if (err.code === 'auth/user-not-found') {
        setErrorMessage(
          'The email you have provided is not registered yet. Create a new account and login. Thanks!'
        )
      }
    } finally {
      setLoading(false)
    }
  }

  const onCloseErrorDialog = () => {
    setErrorMessage('')
  }

  if (authenticated) {
    return <Redirect to='/home' />
  }

  return (
    <Box marginTop='10'>
      <Flex flexDirection='column' justify='center' alignItems='center'>
        <Heading> Login 🚀 </Heading>
        <Box width={['full', 400]}>
          <form onSubmit={loginUser}>
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
      {errorMessage && (
        <ErrorDialog errorMessage={errorMessage} onClose={onCloseErrorDialog} />
      )}
    </Box>
  )
}
