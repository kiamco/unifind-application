import React from 'react';
import {Typography, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root:{
        textAlign:'center'
    },
    mesg:{
        color:'red'
    }
})

const ErrorMsg = ({message}) => {

    const classes = useStyles();

    return(
        <Box className={classes.root}>
            <Typography variant='caption' className={classes.mesg}>{message}</Typography>
        </Box>
    )
};

export default ErrorMsg;