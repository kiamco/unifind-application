import React, {useState} from 'react';
import {Box, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {mainBlue, secondaryFont} from './themes/color';
import Colleges from '../config/colleges';
import UniRep from './uniRep';

const useStyles = makeStyles({
    root: {
        margin: '0px 40px',
        width:'100%',
        ['@media (max-width:600px)']:{
            margin:'0px'
        }
    
    },
    header:{
        fontFamily:`${secondaryFont}`,
        color:`${mainBlue}`,
        fontSize:'1.7rem',
        fontWeight: '300',
        margin:'20px',
        ['@media (max-width:600px)']:{
            textAlign:'center'
        }
    },
    cards:{
        display: "flex",
        flexDirection: "column",
        margin: "50px auto",
        width: "80%",
    },  
    card: {
        marginTop: '20px auto'
    }
})

const UniRepList = (props) => {

    const classes = useStyles();
   
    return (
        <Box className={classes.root}>
            <Typography 
            variant='h4'
            className={classes.header}>{props.uni} team
            </Typography>

            <Box className={classes.cards}>
            {
                props[0].reps.map(el => <UniRep key={el.name} className={classes.card} {...el} props={props}/>)
            }
            </Box>
        </Box>
    );
};

export default UniRepList;