import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BillboardWave from '../assets/img/billboard_wave.png';


const useStyles = makeStyles({
    root:{
        height:"71vh",
        background:`no-repeat url(${BillboardWave}) left/50%`,
        backgroundPositionY:'top',
        ['@media (max-width:900px)']:{
            height:"61vh"
        },
        ['@media (max-width:800px)']:{
            background:'none',
            height:"51vh"
        }
    },
    wave:{
        minWidth:"50%",
        height:"90vh"
        
    }
});

const BillboardWrapper = (props) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            {/* <img className={classes.wave} src={BillboardWave} alt="background wave"></img> */}
            {props.children}
        </Box>
    )
};

export default BillboardWrapper;