import React, { useState } from 'react';
import { AppBar, Typography, Toolbar, Button, Box, Menu, MenuItem, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import { primaryBgColor, mainBlue, mainRed, mainWhite, fontLogo } from './themes/color';
import { primaryBtn, redButton } from './themes/components';
import bgImage from "../assets/img/bg.svg"
const useStyles = makeStyles({
    root: {
        width: "100%",
    },
    nav: {
        minHeight: "60px",
        maxHeight: "60px",
        // background: "linear-gradient(90deg, rgba(58,123,184,1) 50%, rgba(255,255,255,1) 50%);",
        background: `url(${bgImage})`,
        backgroundSize: "50%",
        backgroundRepeat: "no-repeat",
        boxShadow: "none"

    },
    logo: {
        fontFamily: `${fontLogo}`,
        display: 'flex'
    },
    leftLogo: {
        color: `${mainWhite}`,
        fontFamily: fontLogo,
        fontSize: "42px"
    },
    rightLogo: {
        color: `${mainWhite}`,
        fontFamily: fontLogo,
        fontSize: "42px"
    },
    toolbarButton: {
        ...primaryBtn
    },
    toolbarButtonFilled: {
        ...redButton
    },
    toolbarIcon: {
        marginRight: '10px',

    },
    rightToolbar: {
        display: 'flex',
        flexFlow: "row wrap",
        justifyContent: 'space-between',
    },
    options: {
        display: 'flex',
        alignItems: 'center',
        
    },
    rightBox: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between"
    }


});

const Nav = ({ login, name, ...props }) => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        window.location.reload();
        setAnchorEl(null);
    };

     const menuClose = () => {
        setAnchorEl(null);
     };

     const linkHandler = () => {

        let username = window.localStorage.getItem('username');
        
        if(username){
            return `/dashboard/${username}`
        } else {
            return '/'
        };
     };

    return (
        <nav >
            <AppBar position='static' className={classes.nav}>
                <Toolbar className={classes.rightToolbar} >
                    <Link style={{ textDecoration: 'none' }} to={linkHandler()}>
                        <Box className={classes.logo}>
                            <Typography variant="h4" className={classes.leftLogo}>Uni</Typography>
                            <Typography variant="h4" className={classes.rightLogo}>Find</Typography>
                        </Box>
                    </Link>
                    <Box className={classes.rightBox}>

                        {!login ?
                            <>
                                <Link style={{ textDecoration: 'none' }} to='/login'>
                                    <Button size="large" variant='outlined' className={classes.toolbarButton}>Services</Button>
                                </Link>
                                <Link style={{ textDecoration: 'none' }} to='/login'>
                                    <Button size="large" variant='outlined' className={classes.toolbarButton}>Our Story</Button>
                                </Link>
                                <Link style={{ textDecoration: 'none' }} to='/login'>
                                    <Button size="large" variant='outlined' className={classes.toolbarButton}>FAQ</Button>
                                </Link>
                                <Link style={{ textDecoration: 'none' }} to='/login'>
                                    <Button size="large" variant='outlined' className={classes.toolbarButtonFilled}>Login</Button>
                                </Link>
                            </> :
                            name ?
                                <Box className={classes.options}>
                                    <Typography variant='subtitle1' style={{ color: 'black' }}> Welcome, {name} </Typography>
                                    <IconButton color="primary" aria-label="options" component="span" onClick={handleClick}>
                                        <MoreVertIcon/>
                                    </IconButton>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={menuClose}
                                    >
                                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                                    </Menu>
                                </Box> :
                                ''
                        }
                    </Box>

                </Toolbar>
            </AppBar>
        </nav>
    );

};

export default Nav