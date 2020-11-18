import React, {useState} from 'react';
import {Box, Typography, Divider, Button} from '@material-ui/core';
import CollegeData from '../config/colleges';


const RepView = (props) => {

    const arr = props.location.pathname.split('/');
    const collegeName = arr[arr.length - 1];

    const [college, setCollege] = useState(CollegeData.find(el => el.college === collegeName));
    console.log(college)
    const onClickHandler = (e, obj) => {
        e.preventDefault();
        window.open(obj);
    };

    return(
        <Box>
            <Typography variant='h4'>Schedule a Meeting</Typography>
            <Divider/>
            <Typography variant='h5'>Western University Representatives</Typography>
            {
                college.reps.map(el=> {
                    return(
                    <>
                    <h1>{el.name} <span>{el.type}</span></h1>
                    <Button onClick={(e) => onClickHandler(e,el.calendarLink)}>Availabilty</Button>
                    </>
                    )
                })
            }
        </Box>
    );
};

export default RepView;