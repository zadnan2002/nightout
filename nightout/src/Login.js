import ReactDOM from 'react-dom';
import { React,useEffect,useState } from "react";

import './Login.css';
import Button from '@mui/material/Button';
import { TextField,Link } from '@mui/material';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from './features/UserSlice';



export default function Login() {
  
    const[username, setUsername]=useState("");
    const[password, setPassword]=useState("0");
    const[accountType,setAccountType]=useState();
    const dispatch = useDispatch();
    
    localStorage.setItem('username',"");
    localStorage.setItem('token',null);
    
    

    const handleLogin = (e) => { 
        e.preventDefault();

       if(username!=="0" && password!=="0"){
        Axios.post('http://localhost:3002/signIn', {
            username:username,
            password:password
        }).then(res => {
                setAccountType(res.data.toString());
                if(accountType=="Manager"){
                    //get admin token first and keep it in main memory 
                   
                   localStorage.setItem('username',username);
                    localStorage.setItem('token','tM001');
     
                            
                    //save payload in reducer
                    
                    window.location.replace('/admin');
                }else if(accountType=="Venue"){
                    //get venue id first and keep it in main memory + token for verification
                     
                    
                    localStorage.setItem('username',username);
                    localStorage.setItem('token','tV001');


                    window.location.replace ('/venueControl');}
                    else if(accountType=="Customer"){
                       // get customer id first and keep it in main memory + token for verifications
                       localStorage.setItem('username',username);
                       localStorage.setItem('token','tC001');
                        window.location.replace ('/home');}
                    });}
        else{alert("Please enter username and password")}
    }
  


    return (
   
        <div className="main-block-Login">
           
            <div className="smaller-block-Login">
       <h1>Sign in</h1>
     
       <form onSubmit={(e)=>handleLogin(e)}>
       <br/>
       <div className='in-Login'><TextField color='secondary'required variant='standard'id="outlined-required" label="Username" onChange={(e)=>{setUsername(e.target.value)}}/>
       </div>
       <br/>

       <div className='in-Login'>
       <br/>
       <TextField color='secondary'required variant='standard'id="outlined-required" label="Password" type="password" onChange={(e)=>{setPassword(e.target.value)}}></TextField>
       
       </div>
       
       <div className='sButton-Login'>


        <Button type='submit'color='secondary'variant='contained' >Sign In</Button>
       

        </div>
       <br/>
       <Link  color="secondary" underline="hover" href='/signUp'>Don't have an account? Signup today.</Link>
       <br/>
</form>
      
    
    </div>
    
    </div>
    )
}
