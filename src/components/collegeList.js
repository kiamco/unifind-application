import React from 'react';
import {Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import CollegeCard from './collegeCard';

const useStyles = makeStyles({
    root:{
        display:'flex',
        flexFlow:'row wrap',
        justifyContent:'space-around',
        margin:'20px 50px'
    }
})

const CollegeList = () => {

    const classes = useStyles()
    return(
        <Box className={classes.root}>

        </Box>
    )
};

export default CollegeList;