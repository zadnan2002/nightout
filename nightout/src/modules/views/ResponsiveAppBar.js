import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import { useNavigate } from 'react-router-dom';


function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleHomeItem = () => {
        navigate('/home');
    };
    const handleSignUpItem = () => {
        navigate('/signUp');
    };
    const handleLoginItem = () => {
        navigate('/');
    };
var username=localStorage.getItem('username');

    return (
        <AppBar position="static" sx={{ background: "#2a0b30", }} >
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Button style={{ fontSize: '20px' }} href="/home" sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',

                    }}>
                        NIGHTOUT

                    </Button>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >

                            <MenuItem onClick={handleHomeItem}>
                                <Typography textAlign="center">Home</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleSignUpItem}>
                                <Typography textAlign="center">Sign Up</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleLoginItem}>
                                <Typography textAlign="center">Login</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Button style={{ fontSize: '20px' }} href="/home" sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',

                    }}>
                        NIGHTOUT

                    </Button>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <Button href="/" sx={{ my: 2, color: 'white', display: 'block' }}>
                            Login

                        </Button>
                        <Button href="/signUp" sx={{ my: 2, color: 'white', display: 'block' }}>
                            Signup

                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );

    /*else{
     
        return (
            <AppBar position="static" sx={{ background: "#2a0b30", }} >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
    
                        <Button style={{ fontSize: '20px' }} href="/home" sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
    
                        }}>
                            NIGHTOUT
    
                        </Button>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
    
                                <MenuItem onClick={handleHomeItem}>
                                    <Typography textAlign="center">Home</Typography>
                                </MenuItem>
                                <MenuItem onClick={handleSignUpItem}>
                                    <Typography textAlign="center">Sign Up</Typography>
                                </MenuItem>
                                <MenuItem onClick={handleLoginItem}>
                                    <Typography textAlign="center">Login</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                        <Button style={{ fontSize: '20px' }} href="/home" sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
    
                        }}>
                            NIGHTOUT
    
                        </Button>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
    
                            <Button href="/" sx={{ my: 2, color: 'white', display: 'block' }}>
                                Logout
                            </Button>
                           <Typography marginLeft='60vw' marginTop="22px">Welcome back {username}!</Typography>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        );
    }*/
}
export default ResponsiveAppBar;