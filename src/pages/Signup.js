import { Box, Button, Flex, Heading, Input, Link } from '@chakra-ui/react'
import { useState } from 'react'
import { Link as RouterLink, Redirect, useHistory } from 'react-router-dom'
import ErrorDialog from '../components/ErrorDialog'
import { useFirebaseAuth } from '../hooks/useFirebaseAuth'

export default function Signup() {
  const { signUpWithEmailAndPassword, authenticated } = useFirebaseAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory()

  const signupUser = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await signUpWithEmailAndPassword(email, password)
      history.push('/home')
    } catch (err) {
      console.log('You have got an error: ', err.code)
      if (err.code === 'auth/email-already-in-use') {
        setErrorMessage(
          'Sorry, This Email is already in use with another account.'
        )
      }
    } finally {
      setLoading(false)
    }
  }

  const handleEmailChange = (event) => {
    const value = event.target.value
    setEmail(value)
  }

  const handlePasswordChange = (event) => {
    const value = event.target.value
    setPassword(value)
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
      {errorMessage && (
        <ErrorDialog errorMessage={errorMessage} onClose={onCloseErrorDialog} />
      )}
    </Box>
  )
}
