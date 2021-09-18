import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { Container } from '@chakra-ui/react'

import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import { useFirebaseAuth } from './hooks/useFirebaseAuth'

const PrivateRoute = ({ children }) => {
  const { authenticated } = useFirebaseAuth()
  if (authenticated) {
    return children
  }
  return <Redirect to='/' />
}

export default function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Container>
        <Route path='/' exact>
          <Signup />
        </Route>
        <Route path='/login' exact>
          <Login />
        </Route>
        <PrivateRoute path='/home' exact>
          <Home />
        </PrivateRoute>
      </Container>
    </BrowserRouter>
  )
}
