import { instance } from '../../../api/constants';
import * as React from 'react';
import { Box,Avatar,Typography, Container } from '@mui/material';
import { IUserType } from '../../../api/services/usersService';
import { Link } from 'react-router-dom';
import UsersScreen from '../users';
import  { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Hidden } from '@material-ui/core';

const About = () => {
 
    return ( 
        <>
    
    <Box sx={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
        <Container maxWidth="lg">
      
       <Carousel className='pl-5 pr-5 items-center ' autoPlay={true} interval={4000}>
                <div>
                    <img src="about1.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="about2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="about7.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="about3.avif" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="about8.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="about5.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="about6.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="about4.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="about9.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="about10.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="about7.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="about11.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            </Container>
    <Box sx={{background:'#DDE9FF',height:'70px',width:1,marginTop:'1px',boxShadow:1}}>
    <Box sx={{display: 'flex',padding:'10px',gap:5,justifyContent:'center'}}>
     <span className='flex '> <img src='/delivery.png' className='w-10 h-10 pt-1 mr-4 '/> <Typography>Free Delivery<p className='text-xs text-gray-500'>Lorem ipsum dolor sit amet</p></Typography></span> 
      <span className='flex '> <img src='/protection.png' className='w-10 h-10 pt-1 mr-4'/> <Typography>100% Authentic<p className='text-xs text-gray-500'>Lorem ipsum dolor sit amet</p></Typography> </span>
      <span className='flex '> <img src='/support.png' className='w-10 h-10 pt-1 mr-4'/> <Typography>Support 24/7<p className='text-xs text-gray-500'>Lorem ipsum dolor sit amet</p></Typography> </span>
    </Box>
    </Box>
    <Container maxWidth="lg">
       
       <Box sx={{marginTop:'30px',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
       <span className='text-gray-400 text-xs'>if you're curious</span>
        <h1 className='font-bold'>OUR TEAM MEMBERS</h1>
      </Box>
      <Typography variant='inherit'  sx={{fontSize: 16 ,marginTop:'30px',display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'100px'}}>APAREls Wearable History
       APARELS was founded by our designer and creator Lily Chen in the fictional city of Riverside in 2018. The Obsidian in our product line inherits its deep black color from being woven from fine, dark threads. Our stunning fabric draws upon its rich history in a contemporary way. Our unique product line presents the dedicated individually handcrafted precision of artistry and design.
       While developing a new piece, Lily is not focused on the historical or aesthetic value - she is dedicatedly working on it, focusing on the end result and trying to technically realize the very vision of the piece in her mind.
       While we cater to various market needs, our goal is to design and create bespoke, authentically handcrafted pieces of clothing that will be cherished and worn with a personalized touch for many generations to come.
       </Typography>

       <Box sx={{marginTop:'30px',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
       <span className='text-gray-400 text-xs'>if you're curious</span>
        <h1 className='font-bold'>OUR FUTURE GOALS</h1>
        <span className='text-gray-400 text-xs'>you wanna know our secret here you are </span>
      </Box>
      <ol  className='mt-10 flex content-center items-center list-decimal gap-5'>
         <li className='pr-12'>furniture and homeware is what we live,breathe and design so our Chelsea boutique become the hot bed</li>
         <li className='pr-12'>furniture and homeware is what we live,breathe and design so our Chelsea boutique become the hot bed</li>
         <li className='pr-12'>furniture and homeware is what we live,breathe and design so our Chelsea boutique become the hot bed</li>
         <li className='pr-12'>furniture and homeware is what we live,breathe and design so our Chelsea boutique become the hot bed</li>
       </ol>
      <Box sx={{display:'flex',marginBottom:'50px',justify:'center',alignItems:'center'}}>
       
      <UsersScreen />
    </Box>
    </Container>
      </Box>
     </>
    )
    
}
 
export default About;