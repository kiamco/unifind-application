import React from 'react';
import Nav from '../components/nav';
import LoginForm from '../components/loginForm';

const Login = () => {
    return(
        <>
        <Nav login={true}></Nav>
        <LoginForm />
        </>
    )
    
}

export default Login;