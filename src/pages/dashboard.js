import React from 'react';
import Nav from '../components/nav';
import CollegeListDashboard from '../components/collegeListDashboard';
import Footer from '../components/footer';

const Dashboard = (props) => {
    const name = props.match.params.name;
    const dashboardName = localStorage.getItem('username')
    return(
        <>
        <Nav login={true} name={dashboardName}/>
        <CollegeListDashboard {...props} />
        <Footer />
        </>
    )


};

export default Dashboard;