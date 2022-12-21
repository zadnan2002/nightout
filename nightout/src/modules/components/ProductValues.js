import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LoginIcon from '@mui/icons-material/Login';
import CelebrationIcon from '@mui/icons-material/Celebration';

function ProductValues() {

  return (

    <Box px={{ xs: 3, sm: 10 }}
      py={{ xs: 10, sm: 20 }}
      sx={{ bgcolor: 'radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)' }} color="black"
      alignItems="center"
      justifyContent="center"
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box fontSize={40} borderBottom={2} textAlign="center">Venue Owners</Box>
            <Box>
              <br />
              <Stack direction="row" alignItems="center" gap={1}>
                <Typography fontSize={20} variant="body1" textAlign="center">Register your venue on our platform and benefit from both exposure and a secure venue system!</Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box fontSize={40} borderBottom={2} textAlign="center">Event Planners</Box>
            <Box>
              <br />
              <Stack direction="row" alignItems="center" gap={1}>
                <Typography fontSize={20} variant="body1" textAlign="center">Register your events on our platform and benefit from a secure ticketing system and free marketing and exposure!</Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box fontSize={40} borderBottom={2} textAlign="center">Party Seekers</Box>
            <Box>
              <br />
              <Stack direction="row" alignItems="center" gap={1}>
                <Typography variant="body1" fontSize={20} textAlign="center">NighOut has the largest collection of events with an Event Filter that gets you the party you want to be at according to your budget, age, and even music genre preferences!</Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <br />
      <br />
      <br />

      <Stack spacing={2} direction="row" alignItems="center"
        justifyContent="center">
        <Button href="/signUp" sx={{ width: 400, padding: 1, margin: 2 }} variant="contained" color="secondary">JOIN US</Button>
      </Stack>
      <br />
      <br />
      <br />
      <div style={{ background: "black" }} ><Grid container spacing={0}>-</Grid></div>
      <div style={{ background: "black" }} ><Grid container spacing={0}>-</Grid></div>
      <br />
      <br />
      <div style={{ background: "purple" }} ><Grid container spacing={0} color="purple">.</Grid></div>
      <div style={{ background: "purple" }} ><Grid container spacing={0} color="purple">.</Grid></div>
      <br />
      <br />
      <div style={{ background: "black" }} ><Grid container spacing={0}>-</Grid></div>
      <div style={{ background: "black" }} ><Grid container spacing={0}>-</Grid></div>
    </Box>
  );
}

export default ProductValues;
