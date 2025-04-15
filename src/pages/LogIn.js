import React , { useState} from 'react'
import { Link } from 'react-router-dom'

const LogIn = () => {

  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")

  const [page, setPage] = useState(1);



  const isPrevPage = page > 1;
  const isNextPage = page < 4;

  return (
    <div className='registery'>
      <h1>Log-In</h1>

      <div className="inp">
        <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
        <input type="text" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
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
