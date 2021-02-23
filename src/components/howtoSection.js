import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { mainBlue, secFont, tertFont, mainWhite } from './themes/color';
import whiteboardImg from '../assets/img/whiteboard.svg'
import connectionsImg from '../assets/img/connections.svg'
import calendarImg from '../assets/img/calendar.svg'
import facetimeImg from '../assets/img/facetime.svg'
import answerImg from '../assets/img/answer.svg'
const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        minHeight: '500px',
        background: `${mainWhite}`,
        marginBottom: '50px'
    },
    mainTitle: {
        fontFamily: `${tertFont}`,
        color: `${mainBlue}`,
        fontWeight: '600',
        fontSize: '40px',
        textTransform: 'capitalize',
        marginTop: '40px'
    },
    cardImage: {
        width: '250px',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        flexBasis: '50%',
        ['@media (max-width:800px)']:{
            display:'none',
        }
    },
    cardTitle: {
        width: '100%',
        fontFamily: `${tertFont}`,
        color: `${mainBlue}`,
        fontWeight: '600',
        fontSize: '20px',
        textTransform: 'capitalize',
    },
    cardText: {
        height: '70px',
        fontFamily: `${secFont}`,
        color: 'black',
        fontWeight: '400',
        fontSize: '14px',
        marginTop: '15px',
        textAlign: 'left',
        maxWidth: '500px'
    },
    mainBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rowBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
        height: '300px',
        width: '100%',
        
    },
    descriptionBox: {
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'top',
        alignItems: 'left',
        flexBasis: '50%',
        marginLeft: '20px',
    },
    cardStep: {
        width: '100%',
        fontFamily: `${tertFont}`,
        color: 'black',
        fontWeight: '600',
        fontSize: '35px',
        textTransform: 'capitalize',
    }

});
// Could make a component for each column but idk if its worth it
const HowToSection = () => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography className={classes.mainTitle}>How It Works</Typography>
            <Box className={classes.mainBox}>
                <Box className={classes.rowBox}>
                        <Box className={classes.cardImage} >
                            <img style={{width: '250px'}} src={whiteboardImg} alt="Planning and Todo List" />
                        </Box>
                        <Box className={classes.descriptionBox}>
                            <Typography className={classes.cardStep}>Step 1</Typography>
                            <Typography className={classes.cardTitle}>Find University And Program Of Interest</Typography>
                            <Typography className={classes.cardText}>Browse our list of  6+ universities and 40+ representatives to determine which institution you’d like to learn more about.</Typography>
                        </Box>
                </Box>
                <Box className={classes.rowBox}>
                        <Box className={classes.cardImage} >
                            <img style={{width: '250px'}} src={connectionsImg} alt="Connection Tree" />
                        </Box>
                        <Box className={classes.descriptionBox}>
                            <Typography className={classes.cardStep}>Step 2</Typography>
                            <Typography className={classes.cardTitle}>Find a UniMentor to chat with</Typography>
                            <Typography className={classes.cardText}>Read all UniMentor’s bio’s and decide who you’d like to chat with!</Typography>
                        </Box>
                </Box>
                <Box className={classes.rowBox}>
                        <Box className={classes.cardImage} >
                            <img style={{width: '250px'}} src={calendarImg} alt="Calendar List" />
                        </Box>
                        <Box className={classes.descriptionBox}>
                            <Typography className={classes.cardStep}>Step 3</Typography>
                            <Typography className={classes.cardTitle}>Jump on the call</Typography>
                            <Typography className={classes.cardText}>Book a 20 or 40 minute call with the UniMentor of your choice. Once booked, you will receive an email confirmation with the zoom link that will be used for the call.</Typography>
                        </Box>
                </Box>
                <Box className={classes.rowBox}>
                        <Box className={classes.cardImage} >
                            <img style={{width: '250px'}} src={facetimeImg} alt="Facetime Meeting" />
                        </Box>
                        <Box className={classes.descriptionBox}>
                            <Typography className={classes.cardStep}>Step 4</Typography>
                            <Typography className={classes.cardTitle}>All your questions answers</Typography>
                            <Typography className={classes.cardText}>Receive a reminder email 24 hours before your call, click on the zoom link, ask any questions you’d like to your UniMentor, and have fun!</Typography>
                        </Box>
                </Box>
                <Box className={classes.rowBox}>
                        <Box className={classes.cardImage} >
                            <img style={{width: '250px'}} src={answerImg} alt="Email Response" />
                        </Box>
                        <Box className={classes.descriptionBox}>
                            <Typography className={classes.cardStep}>Step 5</Typography>
                            <Typography className={classes.cardTitle}>Find University And Program Of Interest</Typography>
                            <Typography className={classes.cardText}>If UniMentor promises to send you any files or was not able to answer any one of your questions, an email will be sent to you with files and/or question answers within 48 hours after the call.</Typography>
                        </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default HowToSection;