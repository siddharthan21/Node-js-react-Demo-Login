import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Check = async (event) => {
  const [nav,setnav] = useState(false)
  const navigate  = useNavigate();
  event.preventDefault();
  const username = event.target.elements.username.value
  const emailid = event.target.elements.email.value
  const passwordid = event.target.elements.password.value
  const Phoneno = event.target.elements.phone.value

  if((username === "") ||( emailid === "")){
      alert("Filed's should not be empty")
      return;
  }
  if(passwordid.length <= 7 || Phoneno.toString().length !== 10){
    alert("Please Give valid detiles")
    return ;
  }
  
  axios({
    method:"post",
    url: "http://localhost:6535/sginup",
    headers: {},
    data: {
      email:emailid,
      name:username,
      password:passwordid,
      phone:Phoneno
    }
  }).then((res)=>{
    console.log(res.data.satus)
    if(res.data === "ER_DUP_ENTRY"){
      console.log(res.data)
      return alert("You Have Aldready SginUP with this emailId")
    }
    if(res.data.satus === 406){
      return "Please Try AGin"
    }
    if(res.data.satus === 200){
        console.log(res.data.satus);
      setnav(true)
    }
  })

  if(nav){
    navigate("../Home")
  }
}
const SginUp = () => {
  return (
    <div>
      <form onSubmit={Check} method='post'>
        <h3>Sginup</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="username" name='username' id="username"/>

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" name='password' id="password"/>

        <label htmlFor="email">email</label>
        <input type="email" placeholder="email" name='email' id="email"/>

        <label htmlFor="phone">Phonenumber</label>
        <input type="number" placeholder="Phonenumber" name='phone' id="Phonenumber"/>


        <button type='submit'>Log In</button>
        <div className="">
        </div>
        <div className="social">
          <div className="go"><i className="fab fa-google"></i>  Google</div>
          <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
        </div>
    </form>
    </div>
  )
}

export default SginUp
