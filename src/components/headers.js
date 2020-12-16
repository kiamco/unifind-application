import React from 'react';
import {Typography, Box,Divider} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {regFont} from './themes/color';
import { fontFamily } from '@material-ui/system';

const useStyles = makeStyles({
    root:{
        minWidth:"90%",
        margin:"20px auto"
    },
    content:{
        margin:"auto 10px",
        fontFamily: regFont
    }
});

const Headers = ({content}) => {
    const classes = useStyles();

    return(
        <Box className={classes.root}>
            <Typography className={classes.content} variant='h4'>
                {content}
            </Typography>
            <Divider />
        </Box>
    )
};

export default Headers;