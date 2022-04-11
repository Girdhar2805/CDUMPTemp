import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Container/MainContainer.css'
import LoginForm from '../forms/LoginForm'
import SigninForm from '../forms/SigninForm'
import './styles/Profile.css'
export default  function Profile() {
  return (
    <main>
      <section>
        <div id='swapContents'>
          
    <div class="dual-container">
        <div class="dual-child left">
        <SigninForm />    
        </div>
        <div class="dual-child right" >
        <LoginForm/>
        </div>
    </div>
        </div>
      </section>
    </main>
  )
}
