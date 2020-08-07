import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Two = () => {
  const {setUser} = useContext(UserContext)
  return(
    <div>
      <button onClick ={() => setUser({
        name: 'Bob',
        password: 'something'
      })}>Log In</button>
    </div>
  )
}

export default Two