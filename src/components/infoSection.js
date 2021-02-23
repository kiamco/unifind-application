import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { mainBlue, secFont, tertFont, mainWhite } from './themes/color';
import experienceImg from '../assets/img/experience.svg'
import phoneImg from '../assets/img/phoneguy.svg'
import clockImg from '../assets/img/clock.svg'
const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        minHeight: '500px',
        background: `${mainWhite}`,
       
    },
    mainTitle: {
        fontFamily: `${tertFont}`,
        color: `${mainBlue}`,
        fontWeight: '600',
        fontSize: '40px',
        textTransform: 'capitalize'
    },
    cardContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        ['@media (max-width:800px)']:{
            flexDirection: 'column',
        }
        
    },
    cardBox: {
        marginTop: "50px",
        display: 'flex',
        width: '315px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0px 40px'

    },

    cardImage: {
        width: '250px',
        height: '200px',
        display: 'flex',
        justifyContent: 'center'
    },
    cardTitle: {
        width: '100%',
        fontFamily: `${tertFont}`,
        color: `${mainBlue}`,
        fontWeight: '600',
        fontSize: '20px',
        textTransform: 'capitalize',
        marginTop: '20px',
        textAlign: 'center'
    },
    cardText: {
        height: '70px',
        fontFamily: `${secFont}`,
        color: 'black',
        fontWeight: '400',
        fontSize: '14px',
        marginTop: '15px',
        textAlign: 'center'
    }
});

const InfoSection = () => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography className={classes.mainTitle}>Easing the Process</Typography>
            <Box className={classes.cardContainer}>
                <Box className={classes.cardBox}>
                    <Box className={classes.cardImage} >
                        <img style={{width: '205px'}} src={experienceImg} alt="experiences" />
                    </Box>
                    <Typography className={classes.cardTitle}>Experience University Life</Typography>
                    <Typography className={classes.cardText}>Chat virtually with the top students at the university of your choice.</Typography>
                </Box>
                <Box className={classes.cardBox}>
                    <Box className={classes.cardImage}>
                        <img style={{width: '176px', flexBasis: '400px'}}src={phoneImg} alt="phone and list"/>
                    </Box>
                    <Typography className={classes.cardTitle}>Boost Your Chances of Admission</Typography>
                    <Typography className={classes.cardText}>Recieve personalized application help from UniMentors studying in your dream program.</Typography>
                </Box>
                <Box className={classes.cardBox}>
                    <Box className={classes.cardImage}>
                        <img style={{width: '190px'}} src={clockImg} alt="woman on a clock"/>
                    </Box>
                    <Typography className={classes.cardTitle}>Save Time & Energy</Typography>
                    <Typography className={classes.cardText}>Learn about the university experience before making a commitment and equip yourself to make the best choice for you.</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default InfoSection;