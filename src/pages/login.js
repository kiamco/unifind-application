import React from 'react';
import Nav from '../components/nav';
import LoginForm from '../components/loginForm';


const Login = (props) => {
    return(
        <>
        <Nav login={true}></Nav>
        <LoginForm {...props}/>
        </>
    )
    
}

export default Login;