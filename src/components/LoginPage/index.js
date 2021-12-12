import React, { useState } from "react";
import SignUp from "../Signup";
import './index.css';
import bg from '../../images/bg.png'
import Login from "../Login";
const LoginPage = () =>{

   const [flag, setFlag] = useState(0);
    return (
        <div className="home">

<div class="container">
         
         <header>
            <nav>
               <ul>
                  <li id="logo"><a className="title" href="#">Hobbinator</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Team</a></li>
                  <button className="nav-btn" onClick={()=>{setFlag(1)}}>
                  <p className="btn-txt"> SignUp</p>
                  </button>    
                  <button className="nav-btn" onClick={()=>{setFlag(0)}}>
                  <p className="btn-txt"> Login</p>
                  </button>    
               </ul>
            </nav>
         </header>
         <img className="bg" src={bg}/>
         <div className="signup">
         {flag === 0? <Login/> : <SignUp/>}
         </div>
         
         
         </div>
         
      

        </div>
    );
}

export default LoginPage;