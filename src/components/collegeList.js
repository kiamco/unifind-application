import React from 'react';
import { Box, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CollegeCard from './collegeCard';
import Colleges from '../config/colleges';
import { mainWhite, secondaryBgColor, regFont, mainBlue} from './themes/color';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const useStyles = makeStyles(theme => ({
    root: {
        background: `${mainWhite}`,
        display: 'flex',
        flexFlow:'column',
        alignItems:'center',
        justifyContent: 'center',
        minheight: '60vh'
    },
    wrapper: {
        // display: 'grid',
        // gridGap: '10px',
        // gridTemplateColumns: '300px 300px 300px 300px 300px',
        // gridTemplateRows: '300px 300px 300px 300px 300px',
        // margin: '0 50px',
        // [theme.breakpoints.down('lg')]: {
        //     gridTemplateColumns: '300px 300px 300px 300px',
        //     gridTemplateRows: '300px 300px 300px ',
        // },
        // [theme.breakpoints.down('md')]: {
        //     gridTemplateColumns: '300px 300px ',
        //     gridTemplateRows: '300px 300px',
        // },
        // [theme.breakpoints.down('xs')]: {
        //     gridTemplateColumns: '300px ',
        //     gridTemplateRows: '300px ',
        // }
    },
    header: {
        color:`${mainBlue}`,
        fontFamily:`${regFont}`,
        fontSize:'2rem',
        fontWeight:'600'
    }
}));

const CollegeList = (props) => {

    const classes = useStyles();

    const responsive = {
        0: { items: 1 },
        568: { items: 3 },
        1024: { items: 3 },
    };
    return (
        <Box className={classes.root}>
            <Typography className={classes.header} variant={'h2'}>Choose A Unimentor From</Typography>

            <AliceCarousel
                mouseTracking
                items={Colleges.map(el => <CollegeCard key={el.college} {...props} {...el} />)}
                responsive={responsive} />
        </Box>
    )
};

export default CollegeList;