import { Box, Container, Grid, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LoginIcon from '@mui/icons-material/Login';
import CelebrationIcon from '@mui/icons-material/Celebration';

export default function AppFooter({ handleScroll }) {

    return (
        <footer>
            <Box px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                sx={{ bgcolor: 'black' }} color="white">
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Guidance</Box>
                            <Box>
                                <br />
                                <Stack direction="row" alignItems="center" gap={1}>

                                    <Link onClick={handleScroll} underline="none" color="white">Find an event</Link>
                                </Stack>
                            </Box>
                           
                          
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Join Us</Box>
                            <Box>
                                <br />
                                <Stack direction="row" alignItems="center" gap={1}>
                                    <CelebrationIcon />
                                    <Link href="/signUp" underline="none" color="white"> Sign Up</Link>
                                </Stack>
                            </Box>
                            <Box>
                                <br />
                                <Stack direction="row" alignItems="center" gap={1}>
                                    <LoginIcon />
                                    <Link href="/" underline="none" color="white"> Login</Link>
                                </Stack>
                            </Box>

                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Follow Us</Box>
                            <Box>
                                <br />
                                <Stack direction="row" alignItems="center" gap={1}>
                                    <InstagramIcon />
                                    <Typography variant="body1">nightout</Typography>
                                </Stack>
                            </Box>
                            <Box>
                                <br />
                                <Stack direction="row" alignItems="center" gap={1}>
                                    <FacebookIcon />
                                    <Typography variant="body1">NightOut</Typography>
                                </Stack>
                            </Box>
                            <Box>
                                <br />
                                <Stack direction="row" alignItems="center" gap={1}>
                                    <PinterestIcon />
                                    <Typography variant="body1">NightOutMoments</Typography>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign="center" pt={{ xs: 5, sm: 10 }}  >
                        Copyright &copy; 2022 NightOut - All Rights Reserved.
                    </Box>
                </Container>
            </Box>
        </footer>
    )
}
