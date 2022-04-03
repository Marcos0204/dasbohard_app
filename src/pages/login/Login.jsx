import { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";  
import { auth } from '../../firebase'
import "./login.scss"

const Login = () => {
  const [error, setError] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const halendLogin = (e) =>{
    e.prventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(true)
        // ..
      });

  }
  return (
    <div className='login'>
      <form onSubmit={halendLogin}>
        <input type='email' placeholder='email' onChange={e => setEmail(e.target.value)}/>
        <input type='password' placeholder='password' onChange={e => setPassword(e.target.value)}/>
        <button type='submit'>login</button>
        {error && <span>Wrong Email or Password!</span>}
      </form>
    </div>
  )
}

export default Login