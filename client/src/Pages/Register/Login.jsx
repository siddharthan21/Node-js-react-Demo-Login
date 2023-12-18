import React, { useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import '../../Css/Login.css'
import axios from 'axios'
const Check = async (event) => {
// const navigate = useNavigate();
  event.preventDefault();
  const emailid = event.target.elements.username.value
  const pssId = event.target.elements.password.value
  if(emailid === "" || pssId === ""){
    return alert("please fill all field")
  }
  const val = await axios({
    method: 'post',
    url: "http://localhost:6535/login",
    headers: {},
    data: {
      email:emailid,
      password:pssId
    }
  }).then((res) =>{
    console.log(res)
    if(res.status=== 201){
      console.log(res.data)
    //  navigate("/Home") 
    }
  })
  console.log("dsd")  

}
const Login = () => {
  return (
    <div>
      <section className='Login'>
        <form onSubmit={Check} method='post'>
          <h3>Login Here</h3>

          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Email or Phone" name='username' id="username" />

          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" />

          <button type='submit' >Log In</button>
          <div className="">
          </div>
          <div className="social">
            <div className="go"><i className="fab fa-google"></i>  Google</div>
            <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
          </div>
        </form>
      </section>
    </div>
  )
}
export default Login