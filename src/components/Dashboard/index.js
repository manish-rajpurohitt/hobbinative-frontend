import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import './index.css';







const Dashboard = () =>{

   const [values,setValues] = useState([]);
   const [checked,setChecked] = useState(false);
   const options = [
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

  const onChangeCheckbox = e => {
      const isChecked = !this.state.checked;
      setChecked(isChecked)
        if(isChecked)
        setValues(options)
        else
        setValues(values)
       
    
    };
   const onChange = opt => {
      const allOptionsSelected = opt.length === options.length;
      
      if(allOptionsSelected)
      setChecked(true);
      else
      setChecked(false);
       setValues(opt)
        
      
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
                  
                  isMulti
                  onChange={onChange}
                  options={options}
                  value={values}
                  />
                  </div>
      
         
             
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