import { BrowserRouter, Route } from 'react-router-dom'
import { Container } from '@chakra-ui/react'

import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'

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
        <Route path='/home' exact>
          <Home />
        </Route>
      </Container>
    </BrowserRouter>
  )
}
