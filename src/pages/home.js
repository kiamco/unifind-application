import React from 'react';
import {Box} from '@material-ui/core';
import Nav from '../components/nav';
import Billboard from '../components/billboard';
import Options from '../components/options';

const Home = () => {
    return (
        <Box>
            <Nav />
            <Billboard />
            <Options />
        </Box>
    );
};

export default Home;
