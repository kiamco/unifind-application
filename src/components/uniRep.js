import React, {useState, useEffect} from 'react';
import { Box, Button, Typography, Avatar, IconButton } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';
import { makeStyles } from '@material-ui/core/styles';
import { mainRed, secondaryFont } from './themes/color'
import { primaryBtn } from './themes/components'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles({
    root: {
        ['@media (max-width:600px)']:{
            display:'flex',
        }
    },
    content: {
        display: 'flex',
        flexFlow: 'row',
        alignItems: 'end',
        ['@media (max-width:600px)']:{
            flexFlow: 'column-reverse',
            alignItems: 'center'
        }
    },
    left: {
        margin: '20px',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center'

    },
    right: {
        margin: '20px',
        fontFamily: `${secondaryFont}`,
        ['@media (max-width:600px)']:{
            textAlign:'center'
        }

    },
    avatar: {
        width: '200px',
        height: '250px',
        fontSize: '3rem'
    },
    button: {
        ...primaryBtn,
        marginTop: '20px',
        width: "200px !important",
        margin: "20px 0 !important",
        border: ` 2px solid ${mainRed} !important`
    },
    bio: {
        marginTop: '20px',
        fontFamily: `${secondaryFont}`,
        maxWidth: '70%',
        ['@media (max-width:600px)']:{
            margin:'auto'
        }
    },
    icon: {
        margin:'1px'
    }
})

const UniRep = ({ name, type, calendarLink, bio, pic, uni, props }) => {
    
    const classes = useStyles();

    const desktop = useMediaQuery({ query: `(max-width: 1200px)` });
    const tablet = useMediaQuery({ query: `(max-width: 900px)` });
    const phone = useMediaQuery({ query: `(max-width: 600px)` });

    const [bioLength, setBioLength] = useState(300);
    const [expanded, setExpanded] = useState(false);
    

    const onClickHandler = (e) => {
        if (localStorage.getItem('token')) {
            window.open(calendarLink);
        } else {
            props.history.push('/login')
        }
    };

    const bioSlicer = () => {
        if (desktop && !expanded){
            console.log(desktop)
            setBioLength(250)
        }

        if (tablet && !expanded){
            setBioLength(100)
        }

        if (phone && !expanded){
            setBioLength(50)
        }  
    }
    
    const bioView = (str, length) => {
        if (str && str.length > bioLength) {
            return str.slice(0, bioLength) + "..."
        } else {
            return str;
        };
    };

    const expandMore = (len) => {
        setBioLength(len);
        setExpanded(true);
    }

    const expandLess = () => {
        bioSlicer()
        setExpanded(false)
    }

    useEffect(()=> {
        bioSlicer();

    },[bioSlicer])

    return (
        <Box className={classes.root}>
            <Box className={classes.content}>
                <Box className={classes.left}>
                    {
                        pic ?
                            <Avatar
                                className={classes.avatar}
                                variant='square'
                                src={pic}
                                alt={`${name} profile pic`} /> :
                            <Avatar
                                className={classes.avatar}
                                variant='square'
                            >
                                {name.split('')[0]}
                            </Avatar>
                    }

                    <Button
                        className={classes.button}
                        onClick={onClickHandler}>Book A Call</Button>
                </Box>
                <Box className={classes.right}>
                    <Typography variant='h4'>{name}</Typography>
                    <Typography variant='caption'>{type} </Typography>
                    <Typography className={classes.bio} variant='subtitle1'>{bioView(bio, 300)}
                        {
                            bio && bio.length > 250 ?
                                expanded ?
                                <IconButton className={classes.icon} onClick={expandLess} color="primary" aria-label="expand">
                                    <ExpandLessIcon className={classes.icon}  />
                                </IconButton> :
                                <IconButton className={classes.icon} onClick={(e) => expandMore(bio.length)} color="primary" aria-label="expand">
                                    <ExpandMoreIcon className={classes.icon} />
                                </IconButton> :
                                " "
                        }

                    </Typography>
                </Box>
            </Box>

        </Box>
    );
};

export default UniRep;