import {React,useState} from 'react';

import './VSignup.css';
import { TextField,Button,Link } from '@mui/material';
import Axios from 'axios';
import AppAppBar from './modules/views/AppAppBar';


export default function VSignup() {
    const[venueName, setVenueName]=useState();
    const[venueEmail, setVenueEmail]=useState();
    const[vpassword, setvPassword]=useState();
    const[venuePhoneNumber, setVenuePhoneNumber]=useState();
    const[venueCountry,setVenueCountry]=useState();
    const[venueCity,setVenueCity]=useState();
    const[venueUsername,setVenueUsername]=useState();
    const[venueAddress,setVenueAddress]=useState();
    const [caza,setCaza]=useState();

    const handleSubmit = () => { 
        Axios.post('http://localhost:3002/vSignUp', {
            venueName: venueName,
           
            venueEmail: venueEmail,
            venueUsername: venueUsername,
            vpassword: vpassword,
            // dateOfBirth: dateOfBirth,
            venueCountry: venueCountry,
            venueCity: venueCity,
            venueAddress: venueAddress,
            venuePhoneNumber: venuePhoneNumber,
            caza:caza
        })
    }





   
    return (
        <div class="main-block-vsignup">
          
        <div class="smaller-block">
        <h1>Signup</h1>
        <form action='/'>
        <div class="container">
            
            
            <TextField required color='secondary' type="text" placeholder="John's diner" label='Venue Name' variant='standard'onChange={(e)=>{setVenueName(e.target.value)}}/>
        </div>
       
        <div class="container">
            
            
            <TextField required color='secondary' type="text" placeholder="JohnDiner" label='Venue Userame' variant='standard'onChange={(e)=>{setVenueUsername(e.target.value)}}/>
        </div>

        <div class="container">
        
            
            <TextField required color='secondary' placeholder="johndoe@email.com" label='Email' variant='standard'type="text" onChange={(e)=>{setVenueEmail(e.target.value)}}/>
        </div>
        <div class="container">
       
            
            <TextField required color='secondary' placeholder="password" label='Password' variant='standard'type="password" onChange={(e)=>{setvPassword(e.target.value)}}/>
        </div>
        <div class="container">
        
            
            <TextField required color='secondary' placeholder="Phone Number" variant='standard' label='Phone Number'type="tel" onChange={(e)=>{setVenuePhoneNumber(e.target.value)}}/>
        </div>
        <div class="container">
            
            
            <TextField required color='secondary' type="text" placeholder="Country" label='Country' variant='standard'onChange={(e)=>{setVenueCountry(e.target.value)}}/>
        </div>
        <div class="container">
            
            
            <TextField required color='secondary' type="text" placeholder="State/Caza" label='State' variant='standard'onChange={(e)=>{setCaza(e.target.value)}}/>
        </div>

        <div class="container">
            
            
            <TextField required color='secondary' type="text" placeholder="City" label='City' variant='standard'onChange={(e)=>{setVenueCity(e.target.value)}}/>
        </div>
        <div class="container">
            
            
            <TextField required color='secondary' type="text" placeholder="Address Line" label='Address' variant='standard'onChange={(e)=>{setVenueAddress(e.target.value)}}/>
        </div>

        <div className='sButton-Login'><Button onClick={() => {handleSubmit()}} type='submit'color='secondary' variant='contained' >Sign Up</Button></div>
        <br/>
        <Link color="secondary" underline='hover' class="link" href='/'>Already have an account? Login.</Link>
        <br/>
        <Link color="secondary" underline='hover' class="link" href='/signup'>Want to discover events around you? Sign up as a user here.</Link>
        </form>
    </div>
    </div>
    )
}
