import React from 'react';
import Nav from '../components/nav';
import CollegeList from '../components/collegeList';
import Footer from '../components/footer';

const Dashboard = (props) => {
    const name = props.match.params.name;
    const dashboardName = localStorage.getItem('username')
    return(
        <>
        <Nav login={true} name={dashboardName}/>
        <CollegeList {...props} />
        <Footer />
        </>
    )


};

export default Dashboard;