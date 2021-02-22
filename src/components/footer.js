import React from 'react';
import { Box, Typography, Link } from '@material-ui/core';
import {mainBlue, quartFont} from '../components/themes/color';
import {makeStyles} from '@material-ui/core/styles';
import footerImage from '../assets/img/footer.svg'

const useStyles = makeStyles({
    root:{
        background: `url(${footerImage})`,
        backgroundRepeat: 'no-repeat',
        height:'200px',
        color:'white',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
    },
    footerText: {
        marginTop: '100px',
        fontFamily: `${quartFont}`,
        fontWeight: '300',
        fontSize: '16px'
    }
});

const Footer = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography className={classes.footerText} variant="body2" color={mainBlue} align="center">
                {'© '}
                {new Date().getFullYear()}
                {' '}
                <Link color="inherit" href="https://material-ui.com/">
                    Unifind
                </Link>{' '}
                {','}
                {' '}
                All Rights Reserved
                {'.'}
            </Typography>
        </Box>
    )
}

export default Footer;