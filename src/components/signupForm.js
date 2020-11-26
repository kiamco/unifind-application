import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
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

  const onChangeHandler = (e) => {
    e.preventDefault();
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const createPost = (inputs, headers) => {
    return Axios.post('http://localhost:3000/register', inputs, headers)
      .then(res => {
        return res.data
        // // TODO: redirect dashboard
        // props.history.push(`/dashboard/${inputs.name}`);
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
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    };

    //check if email is valid and password match
    if(emailIsValid(inputs.email)){
      createPost(inputs, headers)
      .then(res => {
        if(res.message === "user already exists"){
          setSignUpErr(prevState => {
            return {...prevState,emailExists:true}
          });
        } else {
          props.history.push(`/dashboard/${inputs.name}`);
        }
      })
    };

  };

  return (
    <Box className={classes.formContainer}>
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
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Agree to terms and conditions"
              />
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