import React from 'react';
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import {regFont} from './themes/color';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin:'20px auto'
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

const CollegeCard = ({ college, city, country, point1, point2, imgPath }) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imgPath}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography className={classes.font} gutterBottom variant="h6" component="h2">
                        {college}
                    <Typography className={classes.font} variant='body2'> in {city},{country}</Typography>
                    </Typography>
                    <Typography className={classes.font} variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.actions}>
                <Button className={classes.repBtn} size="small" color="primary">
                    Find Representative
                </Button>
            </CardActions>
        </Card>
    )
};

export default CollegeCard;