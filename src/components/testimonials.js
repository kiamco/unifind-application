import React, { useState } from 'react';
import { Box, Button, Typography, Avatar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { mainBlue, secondaryFont, mainRed, regFont } from './themes/color';
import { primaryBtn } from './themes/components';
import Testimonials from '../config/testimonials';
import Rating from '@material-ui/lab/Rating';
import InfiniteCarousel from 'react-material-ui-carousel'


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const useStyles = makeStyles({
    root: {

    },
    testimonial: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        ['@media (max-width:600px)']:{
            flexFlow: 'column'
        }

    },
    testimonials: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },
    left: {
        width: '50%',
        display: "flex",
        flexFlow: "column",
        alignItems: "center"

    },
    right: {
        width: '400px'
    },
    desc: {

    },
    avatar: {
        width: '200px',
        height: '200px',
        fontSize: '3rem',
        border:`10px solid ${mainRed}`
    },
    review: {
        lineHeight: "1.2",
        fontStyle: "italic",
        fontSize: "13px"
    },
    header:{
        fontFamily:`${regFont}`,
        color:`${mainBlue}`,
        fontWeight:'600',
        marginBottom:'20px'

    },
    name:{
        margin:'10px'
    }
})

const TestimonialList = (props) => {

    const classes = useStyles();

    return (
        <Box className={classes.testimonials}>
            <Typography className={classes.header} variant='h4'> Testimonials</Typography>
            <InfiniteCarousel interval={20000}
               
            >
                {
                    Testimonials.map(el => {
                        return (
                            <>
                                <Box className={classes.testimonial}>
                                    <Box className={classes.left}>
                                        {el.pic ? <Avatar className={classes.avatar} src={el.pic} /> : <Avatar className={classes.avatar} >{el.name[0]}</Avatar>}
                                        <Box className={classes.desc}>
                                    <Box className={classes.name}>
                                    <Typography style={{textAlign:'center'}} variant='subtitle1'>{el.name}</Typography>
                                    <Rating
                                        name="simple-controlled"
                                        value={el.rating}
                                        inactive
                                    />
                                    </Box>
                                </Box>
                                    </Box>
                                    <Box className={classes.right}>
                                        <Typography variant='subtitle1'>{el.review}</Typography>
                                    </Box>
                                </Box>
                                
                            </>
                        );
                    })
                }
            </InfiniteCarousel>
        </Box>
    )
};

export default TestimonialList;