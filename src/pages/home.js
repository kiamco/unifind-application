import React from 'react';
import {Box} from '@material-ui/core';
import Nav from '../components/nav';
import Billboard from '../components/billboard';
import Options from '../components/options';
import CollegeList from '../components/collegeList';
import Footer from '../components/footerV2';
import InfoSection from '../components/infoSection';
import HowToSection from '../components/howtoSection';
import Testimonials from '../components/testimonials';

const Home = (props) => {
    return (
        <Box>
            <Nav />
            <Billboard />
            {/* <Options /> */}
            <InfoSection />
            <CollegeList {...props} />
            <HowToSection />
            <Testimonials />
            <Footer />
        </Box>
    );
};

export default Home;
