import React, {useState} from 'react';
import { Box, Button, Typography, Avatar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { mainBlue, secondaryFont } from './themes/color'
import { primaryBtn } from './themes/components'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles({
    root: {

    },
    content: {
        display: 'flex',
        flexFlow: 'row',
        alignItems: 'end'
    },
    left: {
        margin: '20px',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center'

    },
    right: {
        margin: '20px',
        fontFamily: `${secondaryFont}`

    },
    avatar: {
        width: '200px',
        height: '250px',
        fontSize: '3rem'
    },
    button: {
        ...primaryBtn,
        marginTop: '20px'
    },
    bio: {
        marginTop: '20px',
        fontFamily: `${secondaryFont}`,
        maxWidth: '70%'
    },
    icon: {
        margin:'1px'
    }
})

const UniRep = ({ name, type, calendarLink, bio, pic, uni, props }) => {

    const classes = useStyles();

    const [bioLength, setBioLength] = useState(300);
    const [expanded, setExpanded] = useState(false);

    const onClickHandler = (e) => {
        if (localStorage.getItem('token')) {
            window.open(calendarLink);
        } else {
            props.history.push('/login')
        }
    };

    const bioView = (str, length) => {
        if (str && str.length > bioLength) {
            return str.slice(0, bioLength) + "..."
        } else {
            return str;
        };
    };

    const expandMore = () => {
        setBioLength(bio.length);
        setExpanded(true);
    }

    const expandLess = () => {
        setBioLength(300)
        setExpanded(false)
    }

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
                            bio && bio.length > 300 ?
                                expanded ?
                                <IconButton className={classes.icon} onClick={expandLess} color="primary" aria-label="expand">
                                    <ExpandLessIcon className={classes.icon}  />
                                </IconButton> :
                                <IconButton className={classes.icon} onClick={expandMore} color="primary" aria-label="expand">
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