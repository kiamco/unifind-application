import React from 'react';
import { Box, Typography, MenuItem, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {mainBlue, secondaryFont} from './themes/color'
import { textAlign } from '@material-ui/system';

const useStyles = makeStyles({
    root: {
        margin: '100px',
        textAlign:'center',
        color: `${mainBlue}`,
        ['@media (max-width:800px)']:{
            margin: '50px',
        }
    },
    header:{
        fontFamily:`${secondaryFont}`,
        fontWeight:'600',
        fontSize: '3rem '
    },
    filter: {
        minWidth:'300px',
        marginTop: '20px',
        textAlign:'left'
    }
}
);


const UniFilter = ({ unis, uni, setUni }) => {

    const classes = useStyles();

    const changeHandler = (e) => {
        setUni(e.target.value)
    }

    return (
        <Box className={classes.root}>
            <Typography variant='h2' className={classes.header}>Find A UniMentor</Typography>
            <TextField 
                className={classes.filter}
                id="standard-select-university"
                select
                label="University"
                value={uni}
                onChange={changeHandler}
                helperText="Please select your univeristy"
                variant='outlined'
            >
                {unis.map((option) => (
                    <MenuItem  key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>
        </Box>
    );

};

export default UniFilter;