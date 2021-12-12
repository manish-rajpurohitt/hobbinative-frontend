import React from "react";

import './index.css';
const NavButton = (props) =>{

    return(

            <button className="nav-btn">
               <p className="btn-txt"> {props.name}</p>
            </button>       

    );
}

export default NavButton