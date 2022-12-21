import ReactDOM from 'react-dom';
import { React,useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Axios from 'axios';
import Typography from './modules/components/Typography';
import './EventSignup.css';
import AppAppBar from './modules/views/AppAppBar';
import GenreBox from './modules/components/GenreBox';
function EventSignup() {
    const[eventRequestName, setEventName]=useState();
    const[eventRequestType,setEventType]=useState();
    const[ageRestrictionRequest,setAgeRestriction]=useState();
    const[dressCodeRequest,setDressCode]=useState();
    const[ticketRequestCount,setTicketCount]=useState();
   const[ticketPrice,setTicketPrice]=useState();
    const[descriptionRequest,setDescription]=useState();
    const[dateRequest,setEventDate]=useState();
    const[timeRequest,setEventTime]=useState();
    const[performer,setPerformer]=useState();

    const username = localStorage.getItem('username');

  const handleSubmit = () => { 
    Axios.post('http://localhost:3002/eventSignup', {
        eventRequestName: eventRequestName,
        eventRequestType: eventRequestType,
        ageRestrictionRequest: ageRestrictionRequest,
        dressCodeRequest: dressCodeRequest,
        ticketRequestCount: ticketRequestCount,
     ticketPrice: ticketPrice,
        descriptionRequest:descriptionRequest,
        dateRequest:dateRequest,
        timeRequest:timeRequest,
        username:username,
        performer:performer,
    })
    }
    const [genres, setGenres] = useState([])
    const getGenres = () => {
        Axios.get('http://localhost:3002/genreSignUp')
            .then(res => {
                let arr = res.data;
                for (let i = 0; i < arr.length; i++) {
                    arr[i] = arr[i].genreType;
                }
                setGenres(arr);
                // console.log(arr);
            }).catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getGenres();
    }, []);


   
    return (
        <div class="main-block-esignup">
           
        <div class="smaller-block">
        <h1>Event Request</h1>



        <form action='/venueControl'>
        <div class="container">
            
            
            <TextField required color='secondary' type="text" placeholder="New Years 2023" label='Event Name' variant='standard'onChange={(e)=>{setEventName(e.target.value)}}/>
       
        </div>
        <br/>
        <div class='container'>
        <InputLabel id="demo-simple-select-autowidth-label">Event Type</InputLabel>
        </div>
    <div class='container'>



    <GenreBox genres={genres} value={eventRequestType} changeGenre={(e) => setEventType(e.target.value)} />
    </div>
    <div class="container">
            
            
            <TextField required color='secondary' type="text" placeholder="Eminem" label='Performer' variant='standard'onChange={(e)=>{setPerformer(e.target.value)}}/>
       
        </div>


    <div class="container">
            
            
            <TextField required color='secondary' type="number" placeholder="Minimum Age" label='Age Restriction' variant='standard'onChange={(e)=>{setAgeRestriction(e.target.value)}}/>

       
        </div>

        <div class="container">
            
            
            <TextField required color='secondary' type="text" placeholder="Dress Code" label='Dress Code' variant='standard'onChange={(e)=>{setDressCode(e.target.value)}}/>

       
        </div>

        <div class="container">
            
            
            <TextField required color='secondary' type="number" placeholder="Number Of Tickets" label='Number Of Tickets' variant='standard'onChange={(e)=>{setTicketCount(e.target.value)}}/>

       
        </div>
        

        <div class="container">
            
            
            <TextField required color='secondary' type="number" placeholder="Ticket Price" label='Ticket Price' variant='standard'onChange={(e)=>{setTicketPrice(e.target.value)}}/>

       
        </div>

       
        <div class='container'>
    <Typography variant='body2'> &nbsp; Date of Event</Typography>
</div>

        <div class="container">
            
        <TextField color='secondary' required type='date'  placeholder='' onChange={(e)=>{setEventDate(e.target.value)}}/>
 
        
         </div>

         <div class='container'>
    <Typography variant='body2'> &nbsp; Time of Event</Typography>
</div>

        <div class="container">
            
        <TextField color='secondary' required type='time'  placeholder='' onChange={(e)=>{setEventTime(e.target.value)}}/>
 
        
         </div>

        <div class="container">
            
           <TextField required color="secondary" type='text' placeholder='Description' multiline label="Description" variant='standard' onChange={(e)=>{setDescription(e.target.value)}}/>

       
        </div>

  
        <div className='sButton-Login'><Button onClick={() => {handleSubmit()}} type="submit" color='secondary' variant='contained' >Sign Up</Button></div>
        <br/>
        
        <Link class="link" to='/'>Already have an account? Login.</Link>
        <br/>
        <Link class="link" to='/signup'>Want to discover events around you? Sign up as a user here.</Link>
        </form>
    </div>
    
    </div>
    )
}

export default EventSignup