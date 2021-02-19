import React from 'react';
import {Box,Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import BillboardWrapper from '../components/billboardWrapper';
import BillboardImg from '../assets/img/student_service_img.png'

const useStyles = makeStyles({
   billboardConent:{
        display:'flex',
        flexFlow:'row',
        alignItems:'center',
        justifyContent:'space-around'
   },
   left:{

   },
   img:{
        maxWidth:'100px'
   },
   right:{
       display:'flex',
       flexFlow:'column',
       alignItems:'center'
   }
});

const StudentServices = (props) => {
    
    const classes = useStyles();

    return (
        <Box>
            <BillboardWrapper {...props}>
                {/* nav */}
                <Box className={classes.billboardConent}>
                    <Box className={classes.left}>
                        <img className={classes.img} src={BillboardImg} alt="billboard illustration"/>
                    </Box>
                    <Box className={classes.right}>
                        <Typography variant='h1'> Chat With A Current University Student Of Your Choice</Typography>
                        <Typography variant='p'> Learn about Canadian universities and their programs, get supplimentary application help from students who have already been accepted to your dream program/university, and get the support you need before attending the university!</Typography>
                    </Box>
                </Box>
            </BillboardWrapper>
            
            {/* billboard */}
            {/* uni filter */}
            {/* rep list */}
            {/* footer */}
        </Box>
    )
}

export default StudentServices;