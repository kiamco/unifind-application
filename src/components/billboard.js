import React from 'react';
import { Box, Typography, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import boardBg from '../assets/img/mainBg.png';
import cover from '../assets/img/union.png';
import { regFont } from './themes/color';
import { secondaryBtn } from './themes/components';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "flex-end",
        justifyContent: 'left',
        background: `url(${boardBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover, contain',
        opacity: '0.8',

    },
    left: {
        background: `url(${cover})`,
        minHeight: '45vh',
        minWidth: '60vw',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    message: {
        margin: '50px 110px',
        maxwidth: '400px',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'baseline'

    },
    mainHeader: {
        fontWeight: 'bolder',
        fontFamily: regFont,
        margin:'50px 0 20px'
    },
    mainMesg: {
        fontFamily: regFont,
        fontSize: '1.4rem',
        lineHeight: '1.5',
        margin: '10px auto'
    },
    createBtn: {
        ...secondaryBtn,
        fontWeight: 'bold',
        border: 'solid 3px',
        height: '50px'
    }
});


const Billboard = () => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.left}>
                <Box className={classes.message}>
                    <Typography className={classes.mainHeader} variant='h4'>Where Do You See Yourself Studying In 2 Years?</Typography>
                    <Typography>
                        Experience virtual university life with current &amp; top university students.<br/>
                        Receive personalized application help from students studying in your dream program.<br/>
                        Connect with a current university student to get a scoop on the good and the bad of that university.<br/>
                        Financial concerns? Social life or academic life worry? We’re all going through it. Let us tell you the scary truth.
                    </Typography>

                    <Link style={{ textDecoration: 'none',marginTop:'10px' }} to='/signUp'>
                        <Button className={classes.createBtn}>Create an Account</Button>
                    </Link>
                </Box>

            </Box>

        </Box>
    )
}

export default Billboard;