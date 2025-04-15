import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")
  const [email , setEmail] = useState("")
  const [profile , setProfile] = useState("")
  const [birth , setBirth] = useState("")
  return (
    <div className='registery'>
      <h1>Sign-up</h1>

      <div className="inp">
        <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
        <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        <input type="url" placeholder='Profile-Pic' onChange={(e) => setProfile(e.target.value)} />
        <input type="date" placeholder='Birthday' onChange={(e) => setBirth(e.target.value)} /> 
        <button>Sign-up</button>
      </div>
      <hr />
      <div className="sin">
        <p>Already have an account ?</p>
        <Link to="/login">Log-in</Link>
      </div>
    </div>
  )
}

export default SignUp
