import React from 'react';
import { Box, Typography, Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import boardBg from '../assets/img/mainBg.png';
import cover from '../assets/img/union.png';
import {regFont} from './themes/color';
import {secondaryBtn} from './themes/components';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "flex-end",
        justifyContent: 'left',
        background: `url(${boardBg})`,
        opacity: '0.8',

    },
    left: {
        background: `url(${cover})`,
        minHeight: '45vh',
        minWidth: '60vw',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    message: {
        margin: '50px 110px',
        width:'400px',
        display:'flex',
        flexFlow:'column',
        alignItems:'baseline'

    },
    mainHeader:{
        fontWeight:'bolder',
        fontFamily: regFont
    },
    mainMesg:{
        fontFamily:regFont,
        fontSize:'1.4rem',
        lineHeight:'1.5',
        margin:'10px auto'
    },
    createBtn:{
        ...secondaryBtn,
        fontWeight:'bold',
        border:'solid 3px',
        height:'50px'
    }
});


const Billboard = () => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.left}>
                <Box className={classes.message}>
                    <Typography className={classes.mainHeader} variant='h3'>Plan Your Future.</Typography>
                    <Typography className={classes.mainMesg}variant='body'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </Typography>
                    
                    <Link style={{textDecoration:'none'}} to='/signUp'>
                        <Button className={classes.createBtn}>Create an Account</Button>
                    </Link>
                </Box>

            </Box>

        </Box>
    )
}

export default Billboard;