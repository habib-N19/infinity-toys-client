import React, { useContext } from 'react'
import { AuthContext } from '../../../Providers/AuthProvider'

const NavigationBar = () => {
  const { logOut } = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
  }
  return (
    <div>
      <button onClick={handleLogOut}>LogOut</button>
    </div>
  )
}

export default NavigationBar
