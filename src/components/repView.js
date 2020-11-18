import React, { useState } from 'react';
import { Box, Typography, Divider, Button, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { shadows } from '@material-ui/system';

import {regFont} from './themes/color';
import CollegeData from '../config/colleges';


const useStyles = makeStyles({
    root: {

    },
    repWrapper:{
        // border:'1px solid black',
        maxWidth: '600px',
        margin:'20px auto'


    },
    repContainer: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '20px',
        maxWidth: '600px',
        height:'100px'

    },
    repInfo: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infoWrapper:{
        margin:'auto 20px',
        fontFamily:regFont
    }
})

const RepView = (props) => {

    const classes = useStyles();

    const arr = props.location.pathname.split('/');
    const collegeName = arr[arr.length - 1];

    const [college, setCollege] = useState(CollegeData.find(el => el.college === collegeName));
    console.log(college)
    const onClickHandler = (e, obj) => {
        e.preventDefault();
        window.open(obj);
    };

    return (
        <Box>
            <Typography variant='h4'>Schedule a Meeting</Typography>
            <Divider />
            <Typography variant='h5'>Western University Representatives</Typography>
            {
                college.reps.map(el => {
                    return (
                        <Box boxShadow={1} className={classes.repWrapper}>
                            <Box className={classes.repContainer}>
                                <Box className={classes.repInfo}>
                                    <Avatar>{el.name.split('')[0]}</Avatar>
                                    <Typography className={classes.infoWrapper}style={{lineHeight:'.5'}}variant='body1'>{el.name} 
                                    <br /> 
                                    <Typography variant='subtitle2'>{el.type}</Typography>
                                    </Typography>
                                </Box>
                                <Button onClick={(e) => onClickHandler(e, el.calendarLink)}>Check Availabilty</Button>
                            </Box>
                        </Box>
                    )
                })
            }
        </Box>
    );
};

export default RepView;