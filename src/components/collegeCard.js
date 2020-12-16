import React from 'react';
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import {regFont} from './themes/color';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        minWidth: 300,
        margin:'20px auto',
        height:290
    },
    media: {
        height: 140,
    },
    actions: {
        justifyContent:'flex-end'
    },
    repBtn:{
        textTransform:'none'
    },
    font:{
        fontFamily: regFont
    }
});

const CollegeCard = ({ college, city, country, point1, point2, imgPath, ...props}) => {

    const classes = useStyles();
    
    const onClickHandler = (e) => {
        e.preventDefault();
        props.history.push(`/reps/${college}`);
    };

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imgPath}
                />
                <CardContent>
                    <Typography className={classes.font} gutterBottom variant="h6" component="h2">
                        {college}
                    <Typography className={classes.font} variant='body2'> in {city},{country}</Typography>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.actions}>
                <Button 
                className={classes.repBtn} 
                size="small" 
                color="primary"
                onClick={onClickHandler}>
                    Find Representative
                </Button>
            </CardActions>
        </Card>
    )
};

export default CollegeCard;