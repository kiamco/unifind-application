import React from 'react';
import Nav from '../components/nav';
import SignUpForm from '../components/signupForm';

const Login = (props) => {
    return(
        <>
        <Nav login={true}></Nav>
        <SignUpForm {...props}/>
        </>
    )
    
}

export default Login;