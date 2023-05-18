import React, { createContext, useEffect, useState } from 'react'
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import app from '../firebase/firebase.config'

const auth = getAuth(app)
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  // google provider
  const googleProvider = new GoogleAuthProvider()

  // creating user with email and password
  const createUserWithEmail = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // signing in a user with email and password
  const signInWithEmail = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  //signing in with popup google auth provider
  const signInWithGoogleAuth = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
  // logout
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  // context provider user
  const authUser = {
    loading,
    user,
    createUserWithEmail,
    signInWithEmail,
    signInWithGoogleAuth,
    logOut
  }
  //adding an observer for monitoring the state of the user logged in or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      console.log('Current user on auth state', currentUser)
      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider value={authUser}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
