import React from 'react';
import Nav from '../components/nav';
import SignUpForm from '../components/signupForm';

const Login = () => {
    return(
        <>
        <Nav login={true}></Nav>
        <SignUpForm/>
        </>
    )
    
}

export default Login;