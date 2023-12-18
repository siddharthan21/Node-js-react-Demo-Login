import React, { useState } from 'react'
import Login from './Login'
import SginUp from './SginUp'
const Register = () => {
  const [reg, setreg] = useState("login")
  const handle = (e) => {
    if (e === "login") {
      setreg("login")
    }
    if (e === "sginup") {
      setreg("sginup")
    }
  }
  return (
    <div className="body">
      <div className=''>
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <div className="choose">
          <button onClick={() => { handle("login") }} >Login</button>
          <button onClick={() => { handle("sginup") }}>Sigin-UP</button>
        </div>
        <div className="">
          {reg === "login" ? <Login /> : <SginUp />}
        </div>
      </div>
    </div>
  )
}

export default Register
