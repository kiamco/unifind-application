import React, { useState } from 'react';
import { AppBar, Typography, Toolbar, Button, Box, Menu, MenuItem, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import { primaryBgColor, mainBlue, mainRed, fontLogo } from './themes/color';
import { primaryBtn } from './themes/components';

const useStyles = makeStyles({
    root: {
        width: "100%"
    },
    nav: {
        minHeight: "50px",
        background: primaryBgColor
    },
    logo: {
        fontFamily: `${fontLogo}`,
        display: 'flex'
    },
    leftLogo: {
        color: `${mainBlue}`,
        fontFamily: fontLogo
    },
    rightLogo: {
        color: `${mainRed}`,
        fontFamily: fontLogo
    },
    toolbarButton: {
        ...primaryBtn
    },
    toolbarIcon: {
        marginRight: '10px',

    },
    rightToolbar: {
        display: 'flex',
        flexFlow: "row wrap",
        justifyContent: 'space-between'
    },
    options: {
        display: 'flex',
        alignItems: 'center'
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

    return (
        <nav >
            <AppBar position='static' className={classes.nav}>
                <Toolbar className={classes.rightToolbar} >
                    <Link style={{ textDecoration: 'none' }} to='/'>
                        <Box className={classes.logo}>
                            <Typography variant="h4" className={classes.leftLogo}>Uni</Typography>
                            <Typography variant="h4" className={classes.rightLogo}>find</Typography>
                        </Box>
                    </Link>
                    <Box >

                        {!login ?
                            <>
                                <Link style={{ textDecoration: 'none' }} to='/login'>
                                    <Button size="large" variant='outlined' className={classes.toolbarButton}>Login</Button>
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