import React from 'react';
import { Box, Typography, Link } from '@material-ui/core';
import {mainBlue} from '../components/themes/color';
import {makeStyles} from '@material-ui/core/styles';
import FooterWave from '../assets/img/footer.png';


const useStyles = makeStyles({
    root:{
        background: `no-repeat url(${FooterWave})`,
        minHeight:'200px',
        width:'100%',
        backgroundSize: 'cover',
        color:'white',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        marginBottom:'0'
    },
    content: {
        marginTop:'100px'
    }
});

const FooterV2 = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography className={classes.content} variant="body2" color={mainBlue} align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                    Unifind
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    )
}

export default FooterV2;