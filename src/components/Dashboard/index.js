import React, { useState } from "react";

import './index.css';

const HomePage = () =>{


    return (
        <div className="home">

<div class="container">
         
         <header>
            <nav>
               <ul>
                  <li id="logo"><a className="title" href="#">Hobbinator</a></li>
                  <li><a href="#">DashBoard</a></li>
                
                   <li><a href="#">Profile</a></li>
                  <button className="nav-btn">
                  <p className="btn-txt"> Logout</p>
                  </button>    
               </ul>
            </nav>
         </header>
       
         <p className="breadcrum">Dashboard</p>
         
         </div>
         
      

        </div>
    );
}

export default HomePage;