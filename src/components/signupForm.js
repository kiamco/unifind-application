import React, { useState } from 'react';
import {
  Backdrop,
  CircularProgress,
  Grid,
  Box,
  Paper,
  Link,
  TextField,
  CssBaseline,
  Button,
  Avatar,
  Typography,
  Checkbox,
  FormControl,
  FormControlLabel
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import primaryImg from '../assets/img/signup.png';
import { mainBlue } from './themes/color';
import ErrorMessage from './errorMsg';
import Axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Unifind
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({

  root: {
    height: '80vh',
    width: '90%',

  },
  image: {
    backgroundImage: `url(${primaryImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: mainBlue,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundSize: '500px'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: 'flex',
    flexFlow: 'column wrap'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  forgotPass: {
    textAlign: 'left'
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px'
  }

}));

const CreateAccountForm = (props) => {

  const classes = useStyles();

  const [inputs, setInputs] = useState({
    email: '',
    name: '',
    password: '',
    verifyPassword: ''
  });
  const [signUpErr, setSignUpErr] = useState({
    passwordMatch: false,
    emailExists: false,
    emailValid: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const onChangeHandler = (e) => {
    e.preventDefault();
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const createPost = (inputs, headers) => {
    return Axios.post('http://localhost:3000/register', inputs, headers)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.error(err);
      });
  };

  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  };

  const onSubmitHanlder = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    };
    
    
    if(inputs.password !== inputs.verifyPassword || !emailIsValid(inputs.email)){

      // password check
      if (inputs.password !== inputs.verifyPassword) {
        setSignUpErr(prevState => {
          return { ...prevState, passwordMatch: true }
        });
      } else {
        setSignUpErr(prevState => {
          return { ...prevState, passwordMatch: false }
        });
      };
  
      //email check
      if (!emailIsValid(inputs.email)) {
        setSignUpErr(prevState => {
          return { ...prevState, emailValid: true }
        });
      } else {
        setSignUpErr(prevState => {
          return { ...prevState, emailValid: false }
        });
      }

      return 0
    }
    


    createPost(inputs, headers)
      .then(res => {
        if (res.message === "user already exists") {
          setSignUpErr(prevState => {
            return { ...prevState, emailExists: true }
          });
          setIsLoading(false);
        } else {
          setIsLoading(false);
          localStorage.setItem('token', res.jwt);
          localStorage.setItem('username', res.response.name);
          props.history.push(`/dashboard/${localStorage.getItem('username')}`);
        }
      });


  };

  return (
    <Box className={classes.formContainer}>
      <Backdrop className={classes.backdrop} open={isLoading} >

        <CircularProgress color="inherit" />
      </Backdrop>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
          </Typography>
            <form className={classes.form} onSubmit={(e) => onSubmitHanlder(e)}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={onChangeHandler}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                onChange={onChangeHandler}

              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={onChangeHandler}

              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="verifyPassword"
                label="Verify Password"
                type="password"
                id="verifypassword"
                autoComplete="current-password"
                onChange={onChangeHandler}
              />
              {
                //input validation for password
                signUpErr.passwordMatch ? <ErrorMessage message="passwords don't match" /> : ""
              }
              {
                signUpErr.emailExists ? <ErrorMessage message="email exists" /> : ""
              }
              {
                signUpErr.emailValid ? <ErrorMessage message="email invalid" /> : ""
              }
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Agree to terms and conditions"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
            </Button>

              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateAccountForm;