import React from 'react';
import Nav from '../components/nav';
import CollegeList from '../components/collegeList';

const Dashboard = (props) => {
    const name = props.match.params.name;
    const dashboardName = localStorage.getItem('username')
    return(
        <>
        <Nav login={true} name={dashboardName}/>
        <CollegeList {...props} />
        </>
    )


};

export default Dashboard;