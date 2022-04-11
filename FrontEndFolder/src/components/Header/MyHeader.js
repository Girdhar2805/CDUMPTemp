import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  
} from "react-router-dom";

import './MyHeader.css'


function MyHeader() {
  return (
    <>
      <header>
        <nav>
        <ul>
          <li><Link to ='/'>Home</Link></li>
          <li><Link to ='/Help'>Help</Link></li>
          <li><Link to ='/Aboutus'>AboutUs</Link></li>
          <li className='leftParts'><Link to ='/SignUp'>SignUp</Link></li>
          <li className='leftParts'><Link to ='/Organization'>Organization</Link></li>
        </ul>
      </nav>
      </header>
      </>
  );
}

export default MyHeader;
