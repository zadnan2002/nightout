import { React, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';
import axios, { Axios } from 'axios';

export default function PopUp({ timeRequest,dateRequest,ticketRequestCount,requestID,venueUsername,eventRequestName, descriptionRequest, ticketPrice}) {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();
const token=localStorage.getItem("token");
const username=localStorage.getItem("username");

const [ticketMessage, setTicketMessage] = useState("None");
const handleTicketFill = () => {



    axios.post('http://localhost:3002/ticket', {
        ticketPrice: ticketPrice,
        dateRequest: dateRequest.substring(0,10),
        timeRequest: timeRequest,   
        username:username.toString(),
        eventRequestName:eventRequestName,
        requestID:requestID,
        venueUsername:venueUsername,
    })
    axios.post('http://localhost:3002/ticket1', {
       ticketRequestCount: ticketRequestCount-1,
       requestID:requestID,
    })




}







    const handleBuyTicket = () => {
if(token!=='tC001'){
    alert("You must be logged in as a customer to buy a ticket");
    navigate('/');
}
else
if(ticketRequestCount<=0){
    alert("There are no more tickets available for this event");
}
else{
    handleTicketFill();

       alert("Congrats "+username+"! You have bought a ticket for "+eventRequestName+"'s  on "+dateRequest.substring(0,10)+" at "+timeRequest+". Just display your id at admission and you're in." );
       window.location.reload();}
    };

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open="true"
                // onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    Event Name: {eventRequestName}

                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Event Description: {descriptionRequest}
                    </DialogContentText>
                </DialogContent>
                <DialogContent>
                    <DialogContentText>
                       Ticket Price: {ticketPrice}
                    </DialogContentText>
                </DialogContent>
                <DialogContent>
                    <DialogContentText>
                       Event Date: {dateRequest.substring(0,10)}
                    </DialogContentText>
                </DialogContent>
                <DialogContent>
                    <DialogContentText>
                      Event Time: {timeRequest}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleBuyTicket} autoFocus>
                        Buy Ticket
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}

