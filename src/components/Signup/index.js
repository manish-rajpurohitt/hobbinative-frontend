import React, { useState, useEffect } from "react";
import './index.css';
import { TextField,Paper, Typography, Button, RadioGroup,FormControlLabel,Radio,Alert,Stack } from "@mui/material";
import useStyles from './styles.js';

import api from '../api';
import { useNavigate } from 'react-router-dom';
const SignUp =()=>{

    const classes = useStyles();
    const[error,setError] = useState('');
    const navigate = useNavigate();

    const [user,setUser] = useState({
        firstName : '',
        lastName : '',
        email : '',
        phoneNumber :'',
        locationCity:'',
        password: '',
        gender:'',
        coOrds: [],
        listOfHobbies: []

    });
 

     

      const validate= () =>{
          if(user.firstName==='' || user.lastName==='' || user.email ==='' || user.phoneNumber===''||user.password===''|| user.locationCity===''|| user.gender==='')
          {
              setError('Please Fill All Details');
              return false;
          }
            if(user.phoneNumber.length!==10)
            {
                    setError('Mobile Number should be 10 digits');
                    return false;
            }
            if(user.password.length<6){
                setError('Password length should be 6');
                    return false;
            }
            if(user.locationCity.length!==6)
            {
                setError('Enter a valid PinCode');
                    return false;
            }
            
            return true;
      }

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if(validate())
        {  
                console.log(user);
              
               
               api.post('/api/auth/register',user)
               .then((response)=>console.log(response))
               .catch((err)=>console.log(err))

            navigate('/login');
               
        }
        else 
        return
    };
    return(
        <Paper className={classes.paper} sx={{p: '50px', borderRadius: '24px'}}>
            {error==='' ? '':
              <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert onClose={() => {setError('')}} severity="info">{error}</Alert>
            </Stack>
            
            }
             
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>

            <Typography sx={{fontFamily: 'Cinizel-Bold', fontSize:18}} variant="h6">
                Register To Find People Of Your Hobbies
            </Typography>           
            <TextField
            name="firstName"
            sx={{marginTop:2}}
            variant="outlined"
            label="First name"
            fullWidth
            value ={user.firstName}
            onChange={(e)=> setUser({...user,firstName : e.target.value})}
            
            />
             <TextField
            name="lastname"
            sx={{marginTop:2}}
            variant="outlined"
            label="Last name"
            fullWidth
            value ={user.lastName}
            onChange={(e)=> setUser({...user,lastName : e.target.value})}
            
            />

            <TextField
            name="email"
            type="email"
            sx={{marginTop:2}}
            variant="outlined"
            label="Email"
            fullWidth
            value ={user.email}
            onChange={(e)=> setUser({...user,email : e.target.value})}
            
            />

            <TextField
            type="number"
            name="phoneNumber"
            sx={{marginTop:2}}
            variant="outlined"
            label="Phone Number"
            fullWidth
            value ={user.phoneNumber}
            onChange={(e)=> setUser({...user,phoneNumber : e.target.value})}
            
            />

            <TextField
            type="number"
            name="locationCity"
            sx={{marginTop:2}}
            variant="outlined"
            label="Pincode"
            fullWidth
            onChange={(e)=> setUser({...user,locationCity : e.target.value})}
            
            />

            <TextField
            name="password"
            type="password"
            sx={{marginTop:2, marginBottom:2}}
            variant="outlined"
            label="Password"
            fullWidth
            value ={user.password}
            onChange={(e)=> setUser({...user,password : e.target.value})}
          
            />
            <RadioGroup row
            sx={{marginBottom:2}}
            aria-label="gender"
            defaultValue="MALE"
            name="row-radio-buttons-group"
            value ={user.gender}
            onChange={(e)=> setUser({...user,gender : e.target.value})}
          
          >
            <FormControlLabel value="MALE" control={<Radio />} label="Male"  />
            <FormControlLabel value="FEMALE" control={<Radio />} label="Female" />
          </RadioGroup>

            <Button
            className={classes.buttonSubmit}
            variant="contained"
            sx={{
                height: 50
            }}
            size="large"
            type="submit"
            fullWidth
            >SignUp</Button>


            

        </form>

    </Paper>


       
    );
}

export default SignUp;