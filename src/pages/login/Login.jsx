import { useState } from 'react'
import "./login.scss"

const Login = () => {
  const [error, setError] = useState(false)
  const halendLogin = (e) =>{
    e.prventDefault()
  }
  return (
    <div className='login'>
      <form onSubmit={halendLogin}>
        <input type='email' placeholder='email'/>
        <input type='password' placeholder='password'/>
        <button type='submit'>login</button>
        {error && <span>Wrong Email or Password!</span>}
      </form>
    </div>
  )
}

export default Login