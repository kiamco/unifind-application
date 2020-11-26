import React, {useState, useEffect} from 'react';
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
import primarySignInImg from '../assets/img/login.png'
import {NavLink} from 'react-router-dom';
import {mainBlue} from './themes/color';
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
    width:'90%',

  },
  image: {
    backgroundImage: `url(${primarySignInImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: mainBlue,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundSize:'500px'
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
    display:'flex',
    flexFlow:'column wrap'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  forgotPass:{
      textAlign:'left'
  },
  formContainer:{
      display:'flex',
      justifyContent:'center',
      marginTop:'50px'
  }

}));

const SignInForm = (props) => {

  const classes = useStyles();

  const [input, setInput] = useState({
      email:'',
      password:''
  });
  const [isLoginErr, setIsLoginErr] = useState(null);

  const onChangeHandler = (e) => {
    setInput({...input, [e.target.name]:e.target.value});
  };

  const submitForm = (e) => {
    e.preventDefault(e);
    
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
    };

    Axios.post('https://unifind-server.herokuapp.com/login', input, headers)
    .then(res => {
        localStorage.setItem('token',res.data.jwt);
        localStorage.setItem('username',res.data.username);
        props.history.push(`/dashboard/${res.data.username}`);
        setIsLoginErr(false);
    })
    .catch(e => {
        console.log(e);
        setIsLoginErr(true);
    });

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
            Sign In
          </Typography>

          <form className={classes.form} onSubmit={submitForm} noValidate>
            <TextField
              error={isLoginErr}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => onChangeHandler(e)}
            />
            <TextField
              error={isLoginErr}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => onChangeHandler(e)}

            />
          {
            //if login does not find any user show err mesg
            isLoginErr ? <ErrorMessage message="email/password does not match" /> : ""

          }
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs className={classes.forgotPass}>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                
                <NavLink to='/signup'>
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    </Box>
  );
}

export default SignInForm;