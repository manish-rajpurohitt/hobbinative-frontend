import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import './index.css';
import { Button } from "@mui/material";







const Dashboard = () =>{

   const [hobby,setHobby] = useState([]);
   const [location,setLocation] = useState([]);
   const hobbies = [
      { label: "Option 1", value: 0},
      { label: "Option 2", value: 2 },
      { label: "Option 3", value: 3 },
      { label: "Option 4", value: 4 },
      { label: "Option 5", value: 5 },
      { label: "Option 6", value: 6 },
      { label: "Option 7", value: 7 }
    ];
    const locations = [
      { label: "Option 1", value: 1 },
      { label: "Option 2", value: 2 },
      { label: "Option 3", value: 3 },
      { label: "Option 4", value: 4 },
      { label: "Option 5", value: 5 },
      { label: "Option 6", value: 6 },
      { label: "Option 7", value: 7 }
    ];
   const navigate = useNavigate();
  
   const user = JSON.parse(localStorage.getItem('user'));
   const token = localStorage.getItem('token');
   console.log(token);

  
   const onChangeHobby = opt => {
     
       setHobby(opt)
        
      
    };

    const onChangeLocation = loc => {
     
      setLocation(loc)
       
     
   };
   

   const handleLogout=()=>{
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate('/')
   };
  
    return (
        <div className="home">

<div class="container">
         
         <header>
            <nav>
               <ul>
                  <li id="logo"><a className="title" href="#">Hobbinator</a></li>
                  <li><a href="#">DashBoard</a></li>
                
                   <li><a href="#">Profile</a></li>
            
                     <div style={{
                        marginTop:25,
                        marginRight:10
                     }}>
                        
                  <Select
                  name="hobbies"
                  isMulti
                  onChange={onChangeHobby}
                  options={hobbies}
                  value={hobby}
                  />
                  </div>

                  <div style={{
                        marginTop:25,
                        marginRight:10
                     }}>
                  <Select
                  name="location"
                  isMulti
                  onChange={onChangeLocation}
                  options={locations}
                  value={location}
                  />
                  </div>
            <Button
            variant="contained"
            sx={{
                height: 40,
                width:90,
                marginTop: 3,
                marginRight:3
            }}
            size="large"
            type="submit"
            fullWidth
            >Search</Button>
              
      
         
             
                  <button className="nav-btn" onClick={handleLogout}>
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

export default Dashboard;