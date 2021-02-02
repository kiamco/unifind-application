import React, { useState, useEffect } from 'react';
import { Box, Typography, Divider, Button, Avatar, Accordion, AccordionDetails } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { shadows } from '@material-ui/system';

import { regFont, mainBlue, shaded } from './themes/color';
import CollegeData from '../config/colleges';
import { secondaryBtn } from './themes/components';

const useStyles = makeStyles({
    root: {
        margin: '50px 200px',
        height: '100%',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center'
    },
    repWrapper: {
        maxWidth: '600px',
        margin: '20px 0',
        transition: '500ms',
        '&:hover': {
            background: shaded,
            cursor:'pointer'
        }
    },
    repContainer: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '20px',
        maxWidth: '600px',
        height: '100px'

    },
    repInfo: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        lineHeight: '.5'
    },
    infoWrapper: {
        margin: 'auto 20px',
        fontFamily: regFont
    },
    header: {
        textAlign: 'center',
        margin: '20px auto',
        fontFamily: regFont
    },
    subheader: {
        color: '#696969'
    },
    university: {
        margin: '20px 50px'
    },
    availabilityBtn: {
        ...secondaryBtn
    },
    details:{
        minWidth:'600px',
        ['@media (min-width:800px)']: { 
            width: '400px'
        }
    }
})

const RepView = (props) => {

    const classes = useStyles();

    const arr = props.location.pathname.split('/');
    const collegeName = arr[arr.length - 1];

    const [college, setCollege] = useState(CollegeData.find(el => el.college === collegeName));

    const onClickHandler = (e, obj) => {
        e.preventDefault();
        if (localStorage.getItem('token')) {
            window.open(obj);
        } else {
            props.history.push('/login')
        }
    };

    const [expanded, setExpanded] = useState(false);

    const accordionChange = (panel,isExpanded) => (event) => {
        setExpanded(isExpanded ? false : panel);
    };


    return (
        <Box className={classes.root}>
            <Typography className={classes.header} variant='h4'>{college.college} Representatives</Typography>
            <Divider style={{ margin: 'auto auto 50px auto' }} />
            {/* <Typography className={classes.university} variant='h4'>Western University Representatives</Typography> */}
            {
                college.reps.map((el,i) => {
                    // console.log("panel" + i)
                    return (
                        <Accordion className={classes.repWrapper}
                        key={el.name} 
                        expanded={expanded === "panel" + i} 
                        onClick={accordionChange("panel" + i, expanded)} >
                            <Box className={classes.repContainer}>
                                <Box className={classes.repInfo}>
                                {el.pic ? <Avatar alt={el.name} src={el.pic}/> : <Avatar>{el.name.split('')[0]}</Avatar>}
                                    
                                    <Typography className={classes.infoWrapper} variant='body1'>{el.name}
                                        <br />
                                        <Typography className={classes.subheader} variant='subtitle2'>{el.type}</Typography>
                                    </Typography>
                                </Box>
                                <Button className={classes.availabilityBtn} onClick={(e) => onClickHandler(e, el.calendarLink)}>Check Availabilty</Button>
                            </Box>
                            <AccordionDetails style={{minWidth:'600px'}}>
                                <Typography>
                                    {el.bio}
                                    </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }
        </Box>
    );
};

export default RepView;