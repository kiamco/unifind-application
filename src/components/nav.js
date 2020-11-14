import React from 'react';
import { AppBar, Typography, Toolbar, Button, Badge, IconButton, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from  'react-router-dom';
import {primaryBgColor, mainBlue, mainRed, fontLogo} from './themes/color';
import {primaryBtn} from './themes/components';

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
        color: `${mainBlue}`,
        fontFamily: fontLogo
    },
    rightLogo:{
        color: `${mainRed}`,
        fontFamily: fontLogo
    },
    toolbarButton: {
        ...primaryBtn
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
                        <Box className={classes.logo}>
                        <Typography variant="h4" className={classes.leftLogo}>Uni</Typography>
                        <Typography variant="h4" className={classes.rightLogo}>find</Typography>
                        </Box>
                    </Link>
                    <Box >
                        <Link style={{textDecoration:'none'}} to='/login'>
                        {!login ? <Button size="large" variant='outlined' className={classes.toolbarButton}>Login</Button> : ""}
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>
        </nav>
    );

};

export default Nav