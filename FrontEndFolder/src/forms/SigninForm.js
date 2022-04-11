import React from 'react'
import './SigninForm.css'
import { useState } from 'react'


export default function SignInForm() {
    const [formData, setFormData] = useState({
        uname: '',
        password: '',
      })
      const { email, password } = formData
    
  return (
    <div>
{/*    <form  style="border:1px solid #ccc">
*/}       <div class="Signincontainer">
                <h1>Sign Up</h1> 
                
                
                <label for="uname"><b>User Name</b></label>
                <input type="text" placeholder="Enter Your Name" name="uname" required></input>

                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required></input>

                <label for="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" required></input>
    
                <div class="clearfix">
                    <button class="Signupbuttons" type="button" id="cancelbtn">Cancel</button>
                    <button class="Signupbuttons" type="submit" id="signupbtn">Sign Up</button>
                </div>

   {/* <label>
      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me</input>
    </label>
    
    
    <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

    

  </div>
      </form>
*/}  
    </div>

</div>
  )
}
