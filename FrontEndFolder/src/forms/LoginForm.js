import React from 'react'
import { useState } from 'react'
import './LoginForm.css'

export default function LoginForm() {
    const [formData, setFormData] = useState({
        uname: '',
        password: '',
      })
      const { email, password } = formData
    
    return (
    <div>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <h2>Login Form</h2>
      <form action="/action_pagelogs.php" method="post">
       <div class="Logincontainer">
         <label for="uname"><b>Username</b></label>
         <input type="text" placeholder="Enter Username" name="uname" required></input>
         
         <label for="psw"><b>Password</b></label>
         <input type="password" placeholder="Enter Password" name="password" required></input>

         <button className = "profileButtons" type="submit">Login</button>
    {/*This Bratty one is doing render problem
          <label>
         <input type="checkbox" checked="checked" name="remember"> Remember me</input></label>
         </div>
         <div class="container" style="background-color:#f1f1f1">
         <button type="button" class="cancelbtn">Cancel</button>
         <span class="psw">Forgot <a href="#">password?</a></span>*/}    
       </div> 
     </form>
 </div>
)
}
