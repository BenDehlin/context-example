import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const One = () => {
  const {user} = useContext(UserContext)
  return(
    <div>
      {user ? <h1>{user.name}</h1>:<h1>Not Logged In</h1>}
    </div>
  )
}

export default One