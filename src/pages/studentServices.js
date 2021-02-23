import React, {useState} from 'react';
import {Box,Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import BillboardWrapper from '../components/billboardWrapper';
import BillboardImg from '../assets/img/student_service_img.png'
import {secondaryFont, mainBlue} from '../components/themes/color';
import Colleges from '../config/colleges';
import Filter from '../components/uniFilter';
import UniRepList from '../components/uniRepList';
import FooterV2 from '../components/footerV2';
import Nav from '../components/nav';

const useStyles = makeStyles({
   billboardConent:{
        display:'flex',
        flexFlow:'row',
        alignItems:'center',
        justifyContent:'space-around',
        height: '600px',
        ['@media (max-width:900px)']:{
            height: '400px'
        }
        
   },
   left:{
        width:'50%',
        display:'flex',
        justifyContent:'center',
        ['@media (max-width:800px)']:{
            display:'none'
        }
   },
   img:{
        maxWidth:'550px',
        marginLeft:'250px',
        ['@media (max-width:900px)']:{
            maxWidth:'400px',
        }
   },
   right:{
       display:'flex',
       flexFlow:'column',
       alignItems:'center',
       width:'30%',
       marginRight:'100px',
       ['@media (max-width:900px)']:{
        marginRight:'50px'
    },  
    
       ['@media (max-width:800px)']:{
        width:"70%",
        margin:'auto 5px'
    }
   },
   boardHeader:{
       fontFamily: `${secondaryFont}`,
       fontSize: '2rem',
       fontWeight: '500',
       color:`${mainBlue}`,
       ['@media (max-width:900px)']:{
        fontSize:'1.5rem'
    },
   },
   boardDescription: {
        fontFamily: `${secondaryFont}`,
        fontSize: '1.3rem',
        lineHeight: '1.4',
        marginTop: '20px',
        fontWeight:'100',
        ['@media (max-width:900px)']:{
            fontSize:'1rem'
        },
   }
});

const StudentServices = (props) => {
    
    const classes = useStyles();
    const universityList = Colleges.map(el => el.college)
    const [uni, setUni]  = useState(universityList[0]);
    const filteredCollege = Colleges.filter(el => el.college === uni)
    
    return (
        <Box>
            <BillboardWrapper {...props}>
                <Nav />
                {/* nav */}
                <Box className={classes.billboardConent}>
                    <Box className={classes.left}>
                        <img className={classes.img} src={BillboardImg} alt="billboard illustration"/>
                    </Box>
                    <Box className={classes.right}>
                        <Typography variant='h1' className={classes.boardHeader}> Chat With A Current University Student Of Your Choice</Typography>
                        <Typography variant='subtitle1' className={classes.boardDescription}> Learn about Canadian universities and their programs, get supplimentary application help from students who have already been accepted to your dream program/university, and get the support you need before attending the university!</Typography>
                    </Box>
                </Box>
            </BillboardWrapper>
            <Filter unis={universityList} uni={uni} setUni={setUni} />
            <UniRepList {...filteredCollege} uni={uni} {...props}></UniRepList>
            <FooterV2 />
            {/* billboard */}
            {/* uni filter */}
            {/* rep list */}
            {/* footer */}
        </Box>
    )
}

export default StudentServices;