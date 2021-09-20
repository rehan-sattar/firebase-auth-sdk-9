import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword as signInWithEmailAndPassword_,
  signOut
} from 'firebase/auth'
import { useEffect, useState } from 'react'

const auth = getAuth()

export const useFirebaseAuth = () => {
  const [authenticated, setAuthenticated] = useState()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true)
        setUser(user)
      } else {
        setAuthenticated(false)
        setUser(false)
      }
    })
    return unsubscribe
  }, [])

  const signUpWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword_(auth, email, password)
  }

  const logout = () => {
    return signOut(auth)
  }

  return {
    authenticated,
    user,
    signUpWithEmailAndPassword,
    signInInWithEmailAndPassword,
    logout
  }
}
