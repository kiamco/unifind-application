import React from 'react';
import { AppBar, Typography, Toolbar, Button, Badge, IconButton, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from  'react-router-dom';
import {primaryBgColor, mainBlue, mainRed, fontLogo} from './themes/color';
// import {primaryBtn} from './themes/components';

const useStyles = makeStyles({
    root: {
        width: "100%"
    },
    nav: {
        minHeight: "50px",
        background: primaryBgColor
    },
    logo: {
        fontFamily: `${fontLogo}`  ,
        display:'flex'
    },
    leftLogo:{
        color: `${mainBlue}`
    },
    rightLogo:{
        color: `${mainRed}`
    },
    toolbarButton: {
        // ...primaryBtn
    },
    toolbarIcon: {
        marginRight:'10px',
      
    },
    rightToolbar: {
        display: 'flex',
        flexFlow: "row wrap",
        justifyContent: 'space-between'
    }


});

const Nav = ({login}) => {

    const classes = useStyles();

    return (
        <nav >
            <AppBar position='static' className={classes.nav}>
                <Toolbar className={classes.rightToolbar} >
                    <Link style={{textDecoration:'none'}} to='/'>
                        <Box className={classes.logo} style={{fontFamily:fontLogo}}>
                        <Typography variant="h4" className={classes.leftLogo}>Uni</Typography>
                        <Typography variant="h4" className={classes.rightLogo}>find</Typography>
                        </Box>
                    </Link>
                    <Box >
                        <IconButton className={classes.toolbarIcon} aria-label="show 4 new mails" color="primary">
                            <Badge badgeContent={4} color='secondary'>
                                <ShoppingCartIcon color='primary'/>
                            </Badge>
                        </IconButton>
                        <Link style={{textDecoration:'none'}} to='/signIn'>
                        {!login ? <Button size="large" variant='outlined' className={classes.toolbarButton}>Login</Button> : ""}

                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>
        </nav>
    );

};

export default Nav