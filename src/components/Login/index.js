import React, {useState} from "react";
import axios from "axios";
import { TextField,Paper, Typography, Button} from "@mui/material";
import useStyles from './styles.js';
import swal from 'sweetalert';
import api from '../api'
import { useNavigate } from "react-router-dom";

const Login =()=>{
    const classes = useStyles();
    
    const navigate = useNavigate();
    async function loginUser(credentials) {
        
         return api.post('/api/auth/login',credentials)
        .then((response)=>response)
        .catch((err)=>console.log(err))
       }
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  
    const handleSubmit = async e => {
      e.preventDefault();
      const response = await loginUser({
        email,
        password
      });
      if ('token' in response.data) {
          console.log(response.data);
       
       
          localStorage.setItem('token', response.data['token']);
          localStorage.setItem('user', JSON.stringify(response.data['user']));
          navigate('/dashboard'); 
         
      } else {
        console.log("Error");
      }
    }
    return(

      

<Paper className={classes.paper} sx={{p: '50px', borderRadius: '24px'}}>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>

            <Typography sx={{fontFamily: 'Cinizel-Bold', fontSize:18}} variant="h6">
                Login To Find People Of Your Hobbies
            </Typography>           
         
            

            <TextField
            name="email"
            type="email"
            sx={{marginTop:2}}
            variant="outlined"
            label="Email"
            fullWidth
            value ={email}
            onChange={(e)=> setEmail(e.target.value)}
        
            />
            <TextField
            name="password"
            type="password"
            sx={{marginTop:2, marginBottom:2}}
            variant="outlined"
            label="Password"
            fullWidth
            value ={password}
            onChange={(e)=> setPassword(e.target.value)}
            />
          
            <Button
            className={classes.buttonSubmit}
            variant="contained"
            sx={{
                height: 50
            }}
            size="large"
            type="submit"
            fullWidth
            >Login</Button>


            

        </form>

    </Paper>


       
    );
}

export default Login;