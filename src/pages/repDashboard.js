import React from 'react';
import {Box} from '@material-ui/core';
import Nav from '../components/nav';
import RepView from '../components/repView';

// import RepDash from ''

const RepDash = (props) => {
    console.log(props)
    return(
        <Box>
            <Nav login={true} name={localStorage.getItem('username')}/>
            <RepView {...props} />
        </Box>
    )
};

export default RepDash;