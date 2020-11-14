import React from 'react';
import { Box, Typography, TextField } from '@material-ui/core';
import { Autocomplete} from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import colleges from '../config/colleges';


const useStyles = makeStyles({
    root: {
        display:'flex',
        justifyContent:'baseline',
        margin:'10px 50px'
    },
    search:{
        minWidth:'300px'
    }
});

const Options = () => {

    const classes = useStyles();

    const changeHandler = (e) => {

    }

    return (
        <Box className={classes.root}>
            <Autocomplete
                id="free-solo-demo"
                className={classes.search}
                freeSolo
                options={colleges.map((option) => option.college)}
                renderInput={(params) => (
                    <TextField {...params} label="University" margin="normal" variant="outlined" />
                )}
                onChange={changeHandler}
            />
        </Box>
    )

};

export default Options;