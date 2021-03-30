import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { mainBlue, regFont, secFont } from './themes/color';
import { redButton } from './themes/components';
import { Link } from 'react-router-dom';
import bgImage2 from "../assets/img/bg.svg";
import billboardImg from "../assets/img/billboardImg.svg";
const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        backgroundImage: `url(${bgImage2})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "50%",
        backgroundPositionY: "-60px",
        height: "750px",
        ['@media (max-width:800px)']:{
            backgroundImage:'none'
        }

    },
    left: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: "50%",
        display: "flex",
        justifyContent: "center",
        marginTop: "-50px",
        ['@media (max-width:800px)']:{
            display:'none'
        }
    },
    right: {
        marginTop: "-50px"
    },
    message: {
        margin: '50px 50px',
        maxwidth: '400px',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'baseline'

    },
    btnContainer: {
        width: '100%',
        display: 'flex',
        flexFlow: 'row',
        justifyContent: "center"
    },
    mainHeader: {
        color: `${mainBlue}`,
        fontWeight: 'bolder',
        fontFamily: regFont,
        margin:'50px 0 20px',
        textTransform: "capitalize",
        maxWidth: '475px'
    },
    mainText: {
        fontFamily: `${secFont}`,
        fontSize: '1.2rem',
        maxWidth: '350px'
    },
    mainMesg: {
        fontFamily: regFont,
        fontSize: '1.4rem',
        lineHeight: '1.5',
        margin: '10px auto'
    },
    createBtn: {
        ...redButton,
        border: 'solid 3px',
        height: '50px',
        width: '250px',
        fontSize: '20px',
        marginLeft: '0',
        marginTop: '1em'
    },
    mainImg: {
        maxWidth: "45em",
        minWidth: "30em",
        marginLeft: "100px"
    }
});


const Billboard = () => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.left}>
                <img className={classes.mainImg} src={billboardImg} alt="computer animation"/>
            </Box>
            <Box className={classes.right}>
                <Box className={classes.message}>
                    <Typography className={classes.mainHeader} variant='h4'>We're on a mission to help you with your transition to a canadian university!</Typography>
                    <Typography className={classes.mainText}>
                    Jump on a FREE consultation call with one of our executives to learn more about how we can help you!
                    </Typography>
                    <Box className={classes.btnContainer}>
                        <Link style={{ textDecoration: 'none',marginTop:'10px' }} to='/signUp'>
                            <Button className={classes.createBtn}>Book a Call Now!</Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Billboard;