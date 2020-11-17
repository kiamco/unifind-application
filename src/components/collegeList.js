import React from 'react';
import {Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import CollegeCard from './collegeCard';
import Colleges from '../config/colleges';
import {secondaryBgColor} from './themes/color';

const useStyles = makeStyles({
    root:{
        background:secondaryBgColor,
        display:'flex',
        justifyContent:'center',
    },
    wrapper:{
        display:'grid',
        gridGap:'10px',
        gridTemplateColumns:'1fr 1fr 1fr 1fr 1fr',
        margin:'auto 50px'
    }
})

const CollegeList = (props) => {

    const classes = useStyles();
    return(
        <Box className={classes.root}>
            <Box className={classes.wrapper}>
            {
                Colleges.map(el => <CollegeCard {...props} {...el}/>)
            }
            </Box>
            

        </Box>
    )
};

export default CollegeList;