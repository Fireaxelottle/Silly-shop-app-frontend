import React , { useState} from 'react'
import { Link } from 'react-router-dom'

const LogIn = () => {

  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")


  return (
    <div className='registery'>
      <h1>Log-In</h1>

      <div className="inp">
        <input type="text" value={username} placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
        <input type="text" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        <button>Log-In</button>
      </div>
      <hr />
      <div className="sin">
        <p>Don't have an account ?</p>
        <Link to="/signup">Sign-Up</Link>
      </div>
    </div>
  )
}

export default LogIn
