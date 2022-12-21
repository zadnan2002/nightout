import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PopUp from './PopUp';

export default function OutlinedCard({ timeRequest,dateRequest,ticketRequestCount,requestID,venueUsername, name, eventRequestName, descriptionRequest, ticketPrice, ageRestrictionRequest, city }) {

    const [open, setOpen] = React.useState(false);

    return (
        <Box sx={{ minWidth: 275, display: "inline-block",margin:-1.2 }}>
            <Card variant="outlined"  style={{ background: "radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)", border: "30px solid black",borderRadius:"32px",margin:-5 }}>
                <CardActionArea onClick={() => {
                    setOpen(!open);
                }}>
                    {open && <PopUp timeRequest={timeRequest} dateRequest={dateRequest} ticketRequestCount={ticketRequestCount} requestID={requestID} venueUsername={venueUsername} eventRequestName={eventRequestName} descriptionRequest={descriptionRequest} ticketPrice={ticketPrice}/>}
                    <React.Fragment>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                V E N U E
                            </Typography>
                            <Typography variant="h5" component="div">
                                {name}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                E V E N T
                            </Typography>
                            <Typography variant="body2">
                                {eventRequestName}
                                
                            </Typography>
                        </CardContent>
                        <CardActions >
                            <Typography variant="body2" color="red">
                                Age: {ageRestrictionRequest}+
                            </Typography>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <Typography variant="body2" color="black">
                                Location: {city}
                            </Typography>
                        </CardActions>
                    </React.Fragment>
                </CardActionArea>
            </Card>
        </Box >
    );
}

