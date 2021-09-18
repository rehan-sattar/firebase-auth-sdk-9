import { Button } from '@chakra-ui/button'
import { Box, Flex, Heading } from '@chakra-ui/layout'
import { useHistory } from 'react-router'
import { useFirebaseAuth } from '../hooks/useFirebaseAuth'

export default function Home() {
  const { logout } = useFirebaseAuth()
  const history = useHistory()

  const logoutUser = async () => {
    try {
      await logout()
      history.push('/')
    } catch (err) {
      console.log('You have got an error: ', err)
    }
  }

  return (
    <Box height='400px'>
      <Flex height='full' direction='column' justify='center' align='center'>
        <Heading textAlign='center'>Congratulations ✨</Heading>
        <Heading mt='10' textAlign='center'>
          You are Authenticated!
        </Heading>
        <Button mt='10' onClick={logoutUser}>
          Logout
        </Button>
      </Flex>
    </Box>
  )
}
