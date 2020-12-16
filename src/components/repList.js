import React from 'react';
import Reps from '../config/colleges';
import RepCard from './repCard';
import {Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Header from './headers';

const useStyles = makeStyles({
    root:{

    }
});

const RepList = (props) => {
    const classes = useStyles();
    return(
        // a list of 
        <Box>
        <Header content="Representatives" />
        {Reps.map(el => <RepCard key={el.imgPath} {...props} />)}
        </Box>

    );
};

export default RepList;
