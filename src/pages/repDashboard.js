import React from 'react';
import {Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Nav from '../components/nav';
import RepView from '../components/repView';

// import RepDash from ''

const useStyles  = makeStyles({
    root:{
        minHeight:"100vh"
    }
});

const RepDash = (props) => {

    const classes = useStyles();

    return(
        <Box className={classes.root}>
            <Nav login={true} name={localStorage.getItem('username')}/>
            <RepView {...props} />
        </Box>
    )
};

export default RepDash;