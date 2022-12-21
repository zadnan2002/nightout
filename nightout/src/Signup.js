import { Button, Input, TextField,Link } from '@mui/material';
import {React,useState} from 'react';

import './Signup.css';
import Typography from './modules/components/Typography';
import Axios from 'axios';
import AppAppBar from './modules/views/AppAppBar';



export default function Signup() {


    
    const[firstName, setFirstName]=useState("");
    const[lastName, setLastName]=useState("");
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[phoneNumber, setPhoneNumber]=useState("");
    const[dateOfBirth, setDateOfBirth]=useState("2022-01-01");
    const[username, setUsername]=useState("");
    const[country,setCountry]=useState("");
    const[city,setCity]=useState("");
    const[street,setStreet]=useState("");
    
 
    const handleSubmit = () => { 
        Axios.post('http://localhost:3002/signUp', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            username: username,
            password: password,
            dateOfBirth: dateOfBirth,
            country: country,
            city: city,
            street: street,
            phoneNumber: phoneNumber
        })
    }

    return (
<div class="main-block-signupUser">
  
        <div class="smaller-block-signupUser">
        <h1>Signup</h1>

        
         <form action='/' > 
        <div class="container">
            
           
            <TextField  color='secondary'required  type="text" placeholder="John" variant='standard' label='First Name' onChange={(e)=>{setFirstName(e.target.value)}}/>
        </div>
        <div class="container">
        
            
            <TextField color='secondary' required  type="text" placeholder="Doe" variant='standard' label='Last Name'  onChange={(e)=>{setLastName(e.target.value)}}></TextField>
        </div>

        <div class="container">
            
           
            <TextField  color='secondary'  required  type="text" placeholder="JohnDoe29" variant='standard' label='Username' onChange={(e)=>{setUsername(e.target.value)}}/>
        </div>
       <br/>
<div class='container'>
    <Typography variant='body2'> &nbsp; Date of Birth</Typography>
</div>
<div class="container">
      
         <TextField color='secondary' id='dob2'required type='date'  placeholder='' onChange={(e)=>{setDateOfBirth(e.target.value)}}/>
        </div>
        <div class="container">
        
            
            <TextField color='secondary' required placeholder="johndoe@email.com" label='Email' variant='standard' type="text" onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div class="container">
 
            
            <TextField color='secondary' required placeholder="password"  type="password" variant='standard' label='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <div class="container">
       
            
            <TextField  color='secondary' required placeholder="Phone Number"  type="tel" variant='standard' label='Phone Number'onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
        </div>
        <div class="container">
       
            
            <TextField  color='secondary' required placeholder="Country"  type="text" variant='standard' label='Country'onChange={(e)=>{setCountry(e.target.value)}}/>
        </div>
        <div class="container">
       
            
            <TextField  color='secondary' required placeholder="City"  type="text" variant='standard' label='City'onChange={(e)=>{setCity(e.target.value)}}/>
        </div>
        <div class="container">
       
            
            <TextField  color='secondary' required placeholder="Street"  type="text" variant='standard' label='Street'onChange={(e)=>{setStreet(e.target.value)}}/>
        </div>
        
       
        <div className='sButton-Login'><Button onClick={() => {handleSubmit()}} type='submit' color='secondary' variant='contained' >Sign Up</Button></div>
        
        <br/>
        <Link color="secondary" underline='hover' class="link" href='/'>Already have an account? Login.</Link>
        <br/>
        <Link color="secondary"  underline='hover'  class="link" href='/vSignUp'>Want to create your own event? Venues signup here.</Link>
         </form> 
    </div>
    </div>
    )
}
//- address(in specifics to be filtered) - date of birth 
 // Filtration through date tables and selection option dop menus for city/kaza/ while street is openly filled by user
 //utilize in form figure to create a submit button for better access to database and include mandatory options to create errors 
 //onChange={(e)=>{setFirstName(e.target.value)}}
