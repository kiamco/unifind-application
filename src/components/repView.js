import React, { useState } from 'react';
import { Box, Typography, Divider, Button, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { shadows } from '@material-ui/system';

import {regFont, mainBlue, shaded} from './themes/color';
import CollegeData from '../config/colleges';
import {secondaryBtn} from './themes/components';
import transitions from '@material-ui/core/styles/transitions';


const useStyles = makeStyles({
    root: {
        margin:'50px 200px',
        height:'100vh'
    },
    repWrapper:{
        maxWidth: '600px',
        margin:'20px auto',
        transition:'500ms',
        '&:hover':{
            background:shaded
        }
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
        lineHeight:'.5'
    },
    infoWrapper:{
        margin:'auto 20px',
        fontFamily:regFont
    },
    header:{
        textAlign:'center',
        margin:'20px auto',
        fontFamily:regFont
    },
    subheader:{
        color:'#696969'
    },
    university:{
        margin:'20px 50px'
    },
    availabilityBtn:{
        ...secondaryBtn
    }
})

const RepView = (props) => {

    const classes = useStyles();

    const arr = props.location.pathname.split('/');
    const collegeName = arr[arr.length - 1];

    const [college, setCollege] = useState(CollegeData.find(el => el.college === collegeName));
    
    const onClickHandler = (e, obj) => {
        e.preventDefault();
        window.open(obj);
    };

    return (
        <Box className={classes.root}>
            <Typography className={classes.header} variant='h4'>{college.college} Representatives</Typography>
            <Divider style={{margin:'auto auto 50px auto'}} />
            {/* <Typography className={classes.university} variant='h4'>Western University Representatives</Typography> */}
            {
                college.reps.map(el => {
                    return (
                        <Box boxShadow={1} className={classes.repWrapper}>
                            <Box className={classes.repContainer}>
                                <Box className={classes.repInfo}>
                                    <Avatar>{el.name.split('')[0]}</Avatar>
                                    <Typography className={classes.infoWrapper} variant='body1'>{el.name} 
                                    <br /> 
                                    <Typography  className={classes.subheader} variant='subtitle2'>{el.type}</Typography>
                                    </Typography>
                                </Box>
                                <Button className={classes.availabilityBtn} onClick={(e) => onClickHandler(e, el.calendarLink)}>Check Availabilty</Button>
                            </Box>
                        </Box>
                    )
                })
            }
        </Box>
    );
};

export default RepView;