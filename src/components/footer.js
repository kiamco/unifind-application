import React from 'react';
import { Box, Typography, Link } from '@material-ui/core';
import {mainBlue} from '../components/themes/color';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root:{
        background: mainBlue,
        height:'50px',
        color:'white',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center'
    }
});

const Footer = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography variant="body2" color={mainBlue} align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                    Unifind
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    )
}

export default Footer;